"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _querystring = _interopRequireDefault(require("querystring"));

var _index = _interopRequireDefault(require("../store/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 封装的axios
 */

/**
 * 错误函数 解析常用的http状态码
 * 2xx：成功
 * 3xx: 重定向
 * 4xx: 资源不存在
 * 5xx：服务器错误
 * 
 */
var ErrorHandle = function ErrorHandle(status, info) {
  switch (status) {
    case 400:
      console.log('400-表示请求报文中存在语法错');
      break;

    case 401:
      console.log('401-未经许可，需要通过HTTP认证');
      break;

    case 403:
      console.log('403-服务器拒绝该次访问（访问权限出现问题）');
      break;

    case 404:
      console.log('404-表示服务器上无法找到请求的资源');
      break;

    case 500:
      console.log('500-表示服务器在执行请求时发生了错误，也有可能是web应用存在的bug或某些临时的错误时；');
      break;

    case 503:
      console.log('503-表示服务器暂时处于超负载或正在进行停机维护，无法处理请求');
      break;

    default:
      console.log(info);
      break;
  }
}; //自定义新建一个 axios 实例


var install = _axios["default"].create({
  // baseURL:'http://iwenwiki.com',//网络请求的基础路径 
  timeout: 5000 //请求等待时间 时间到了后台没有返回数据 请求中段

}); //拦截器 
// 添加请求拦截器


install.interceptors.request.use(function (config) {
  //处理post请求发送的参数格式
  if (config.method === 'post') {
    config.data = _querystring["default"].stringify(config.data); //{} xx=xx&xx=xx 
  } // console.log('添加请求拦截器--config',config);
  // 在发送请求之前做些什么


  var token = _index["default"].state.loginModule.userInfo.token;

  if (token) {
    config.headers.authorization = token;
  }

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
}); // 添加响应拦截器

install.interceptors.response.use(function (response) {
  return response.status === 200 ? Promise.resolve(response) : Promise.reject(response);
}, function (error) {
  console.log('响应拦截器错误', error);
  var response = error.response; // 对响应错误做点什么

  ErrorHandle(response.status, response.info);
});

function get(url, params) {
  return install.get(url, {
    params: params
  }).then(function (res) {
    return res.data;
  });
}

var _default = install;
exports["default"] = _default;