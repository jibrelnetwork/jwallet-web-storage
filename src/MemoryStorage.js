class MemoryStorage {
  constructor() {
    this.storage = {}
  }

  setItem(item, data) {
    this.storage[item] = data
  }

  getItem(item) {
    return this.storage[item] || null
  }

  removeItem(item) {
    this.storage[item] = null
  }
}

module.exports = MemoryStorage
