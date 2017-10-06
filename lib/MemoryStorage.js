"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MemoryStorage = function () {
  function MemoryStorage() {
    _classCallCheck(this, MemoryStorage);

    this.storage = {};
  }

  _createClass(MemoryStorage, [{
    key: "setItem",
    value: function setItem(item, data) {
      this.storage[item] = data;
    }
  }, {
    key: "getItem",
    value: function getItem(item) {
      return this.storage[item] || null;
    }
  }, {
    key: "removeItem",
    value: function removeItem(item) {
      this.storage[item] = null;
    }
  }]);

  return MemoryStorage;
}();

module.exports = MemoryStorage;