"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../api/index"));

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _index2 = _interopRequireDefault(require("../../router/index"));

var _elementUi = _interopRequireDefault(require("element-ui"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  state: {
    userInfo: {
      user: '',
      token: ''
    }
  },
  mutations: {
    setUser: function setUser(state, payload) {
      state.userInfo = payload;
    }
  },
  actions: {
    getUser: function getUser(_ref, payload) {
      var commit = _ref.commit;

      _index["default"].getLogin(payload).then(function (res) {
        console.log(res.data);

        if (res.data.status !== 200) {
          _elementUi["default"].Message.error('出错啦');

          return;
        }

        var info = (0, _jwtDecode["default"])(res.data.token); // console.log(info);

        var user = {
          user: info.user,
          token: res.data.token
        };
        commit('setUser', user); // this.setUser(user);

        _index2["default"].push('/');

        localStorage.setItem('user', JSON.stringify(user));
      });
    }
  }
};
exports["default"] = _default;