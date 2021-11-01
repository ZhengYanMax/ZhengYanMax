"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("./plugins/element.js");

require("./assets/css/reset.css");

require("./router/permisson");

require("./assets/css/iconfont.css");

var _vueJsonp = require("vue-jsonp");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueJsonp.VueJsonp);

_vue["default"].config.productionTip = false;
var user = localStorage.getItem('user');

if (user) {
  user = JSON.parse(user);

  _store["default"].commit('loginModule/setUser', user);
}

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');