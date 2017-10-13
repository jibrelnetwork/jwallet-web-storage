# jwallet-web-storage

Web Storage (API) polyfill. Using following storages in order of priority: localStorage -> cookie -> memory

## Get Started

```
npm install jwallet-web-storage
```

```javascript
const storage = require('jwallet-web-storage')
```

## API

The (Web Storage API)[https://html.spec.whatwg.org/multipage/webstorage.html] provides mechanisms by which browsers can store key/value pairs.

### setItem(key, value)

Adds `key` to the storage, or updates that `key`'s `value` if it already exists.

#### Examples

```javascript
storage.setItem('Key', 'Value')

const objectStorageValue = { foo: 'bar' }
storage.setItem('AnotherKey', JSON.stringify(objectStorageValue))
```

### getItem(key)

Returns that `key`'s value.

#### Examples

```javascript
storage.getItem('Key') //> Value

JSON.parse(storage.getItem('AnotherKey')) //> { foo: 'bar' }
```

### removeItem(key)

Removes `key` from the storage.

```javascript
storage.removeItem('Key')
storage.removeItem('AnotherKey')
```
