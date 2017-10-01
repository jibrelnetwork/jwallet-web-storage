const TEN_YEARS = 1000 * 60 * 60 * 24 * 365 * 10

class CookieStorage {
  static get name() {
    return 'CookieStorage'
  }

  setItem(item, data) {
    const expire = new Date()
    expire.setTime(expire.getTime() + TEN_YEARS)

    document.cookie = `${item}=${data}; expires=${expire.toUTCString()}`
  }

  getItem(item) {
    const key = `${item}=`
    const allCookies = document.cookie.split(';')

    let value = null

    allCookies.forEach((cookieItem) => {
      let currentItem = cookieItem

      while (cookieItem.charAt(0) === ' ') {
        currentItem = cookieItem.substring(1)
      }

      if (currentItem.indexOf(key) === 0) {
        value = currentItem.substring(key.length, currentItem.length)
      }
    })

    return value
  }

  removeItem(item) {
    document.cookie = `${item}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`
  }
}

module.exports = CookieStorage
