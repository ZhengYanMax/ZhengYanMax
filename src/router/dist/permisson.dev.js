"use strict";

var _index = _interopRequireDefault(require("./index"));

var _index2 = _interopRequireDefault(require("../store/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_index["default"].beforeEach(function (to, from, next) {
  //1.判断进入当前路由的时候是否需要登录
  if (to.meta.isLogin) {
    //需要登录进入
    //2. 判断是否已经登录过  没有登录过--跳转登录界面
    var token = _index2["default"].state.loginModule.userInfo.token;

    if (token) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});