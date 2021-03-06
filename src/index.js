const LocalStorage = require('./LocalStorage')
const CookieStorage = require('./CookieStorage')
const MemoryStorage = require('./MemoryStorage')

const isStorageAvailable = require('./isStorageAvailable')

// localStorage -> cookies -> memory
function getStorage() {
  if (isStorageAvailable(LocalStorage)) {
    return LocalStorage
  } else if (isStorageAvailable(CookieStorage)) {
    return new CookieStorage()
  }

  return new MemoryStorage()
}

module.exports = getStorage()
