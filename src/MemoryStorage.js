class MemoryStorage {
  constructor() {
    this.storage = {}
    this.isMemory = true
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
