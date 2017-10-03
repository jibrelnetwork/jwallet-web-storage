'use strict';

var LocalStorage = typeof window !== 'undefined' ? window.localStorage : {};

LocalStorage.name = 'LocalStorage';

module.exports = LocalStorage;