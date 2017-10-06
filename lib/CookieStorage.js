'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TEN_YEARS = 1000 * 60 * 60 * 24 * 365 * 10;

var CookieStorage = function () {
  function CookieStorage() {
    _classCallCheck(this, CookieStorage);
  }

  _createClass(CookieStorage, [{
    key: 'setItem',
    value: function setItem(item, data) {
      var expire = new Date();
      expire.setTime(expire.getTime() + TEN_YEARS);

      document.cookie = item + '=' + data + '; expires=' + expire.toUTCString();
    }
  }, {
    key: 'getItem',
    value: function getItem(item) {
      var key = item + '=';
      var allCookies = document.cookie.split(';');

      var value = null;

      allCookies.forEach(function (cookieItem) {
        var currentItem = cookieItem;

        while (cookieItem.charAt(0) === ' ') {
          currentItem = cookieItem.substring(1);
        }

        if (currentItem.indexOf(key) === 0) {
          value = currentItem.substring(key.length, currentItem.length);
        }
      });

      return value;
    }
  }, {
    key: 'removeItem',
    value: function removeItem(item) {
      document.cookie = item + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    }
  }]);

  return CookieStorage;
}();

module.exports = CookieStorage;