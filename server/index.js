const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const secret = require('./secretKey')
app.use(express.urlencoded({ extended: true })) 

app.get('/login', (req, res) => {
    let user = req.query.username;
    let pwd = req.query.password;
    if (user === 'admin' && pwd === '123') {

        let tokenInfo = {
            id: 123,
            user
        }
        let token = jwt.sign(tokenInfo, secret.secretKey, {expiresIn:2000})

        res.send({
            status: 200,
            success: true,
            token,
            user
        })
    } else {
        res.send({
            status: 403,
            success: false,
            mag: '账号或密码输入错误'
        })
    }
})

app.post('/getuser', (req, res) => {
    let token = req.headers.authorization;//接受token字段
    console.log('token',token);
    if (token) {
        jwt.verify(token, secret.secretKey, (err, decoded) => {
            if (err) {
                switch (err.name) {
                    case 'JsonWebTokenError':
                        res.send({ success:false, status:403, code: -1, msg: '无效的token' });
                        break;
                    case 'TokenExpiredError':
                        res.send({ success:false,status:403, code: -1, msg: 'token过期' });
                        break;
                }
            } else {//token验证通过了 
                //返回给前端相应的信息
                res.send({
                    status: 200,
                    success:true,
                    info: "token验证成功--返回请求的数据",
                    result:[1,2,3,4]
                })
            }
        })
    } else {
        res.send({
            success:false,
            info: "重新登录"
        })
    }
})



app.listen(2525, () => {
    console.log('我在2525端口等你哦!');
})