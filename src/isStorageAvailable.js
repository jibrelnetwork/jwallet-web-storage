function isStorageAvailable(storage) {
  try {
    const testItem = '__storage_test__'
    const testData = { test: 'test' }

    storage.setItem(testItem, JSON.stringify(testData))

    const storedData = JSON.parse(storage.getItem(testItem))

    if (storedData.test !== testData.testData) {
      return false
    }

    storage.removeItem(testItem)

    return true
  } catch (e) {
    return false
  }
}

module.exports = isStorageAvailable
