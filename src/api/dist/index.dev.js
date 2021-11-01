"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("./base"));

var _request = _interopRequireDefault(require("../utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = {
  getLogin: function getLogin(params) {
    return _request["default"].get(_base["default"].login, {
      params: params
    });
  },
  getBanner: function getBanner() {
    return _request["default"].get(_base["default"].blueLogin);
  },
  getUserinfo: function getUserinfo() {
    return _request["default"].post(_base["default"].userinfo);
  },
  getDailySuggest: function getDailySuggest() {
    return _request["default"].get(_base["default"].travel + _base["default"].travelToday);
  },
  getHotCity: function getHotCity() {
    return _request["default"].get(_base["default"].travel + _base["default"].travelHot);
  }
};
var _default = api;
exports["default"] = _default;