"use strict";

var express = require('express');

var app = express();

var jwt = require('jsonwebtoken');

var secret = require('./secretKey');

app.use(express.urlencoded({
  extended: true
}));
app.get('/login', function (req, res) {
  var user = req.query.username;
  var pwd = req.query.password;

  if (user === 'admin' && pwd === '123') {
    var tokenInfo = {
      id: 123,
      user: user
    };
    var token = jwt.sign(tokenInfo, secret.secretKey, {
      expiresIn: 2000
    });
    res.send({
      status: 200,
      success: true,
      token: token,
      user: user
    });
  } else {
    res.send({
      status: 403,
      success: false,
      mag: '账号或密码输入错误'
    });
  }
});
app.post('/getuser', function (req, res) {
  var token = req.headers.authorization; //接受token字段

  console.log('token', token);

  if (token) {
    jwt.verify(token, secret.secretKey, function (err, decoded) {
      if (err) {
        switch (err.name) {
          case 'JsonWebTokenError':
            res.send({
              success: false,
              status: 403,
              code: -1,
              msg: '无效的token'
            });
            break;

          case 'TokenExpiredError':
            res.send({
              success: false,
              status: 403,
              code: -1,
              msg: 'token过期'
            });
            break;
        }
      } else {
        //token验证通过了 
        //返回给前端相应的信息
        res.send({
          status: 200,
          success: true,
          info: "token验证成功--返回请求的数据",
          result: [1, 2, 3, 4]
        });
      }
    });
  } else {
    res.send({
      success: false,
      info: "重新登录"
    });
  }
});
app.listen(2525, function () {
  console.log('我在2525端口等你哦!');
});