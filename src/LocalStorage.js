let LocalStorage

try {
  LocalStorage = (typeof window !== 'undefined') ? window.localStorage : {}
} catch (err) {}

module.exports = LocalStorage
