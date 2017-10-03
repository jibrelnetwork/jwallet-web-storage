'use strict';

function isStorageAvailable(storage) {
  try {
    var testItem = '__storage_test__';
    var testData = { test: 'test' };

    storage.setItem(testItem, JSON.stringify(testData));

    var storedData = JSON.parse(storage.getItem(testItem));

    if (storedData.test !== testData.testData) {
      return false;
    }

    storage.removeItem(testItem);

    return true;
  } catch (e) {
    return false;
  }
}

module.exports = isStorageAvailable;