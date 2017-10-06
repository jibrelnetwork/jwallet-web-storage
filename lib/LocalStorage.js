'use strict';

var LocalStorage = typeof window !== 'undefined' ? window.localStorage : {};

module.exports = LocalStorage;