'use strict';

var LocalStorage = require('./LocalStorage');
var CookieStorage = require('./CookieStorage');
var MemoryStorage = require('./MemoryStorage');

var isStorageAvailable = require('./isStorageAvailable');

// localStorage -> cookies -> memory
function getStorage() {
  if (isStorageAvailable(LocalStorage)) {
    return LocalStorage;
  } else if (isStorageAvailable(CookieStorage)) {
    return CookieStorage;
  }

  return CustomStorage;
}

module.exports = getStorage();