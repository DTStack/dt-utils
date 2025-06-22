[dt-utils](../globals.md) / localDB

# Class: localDB

Defined in: [localDB/index.ts:36](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localDB/index.ts#L36)

A utility class for managing browser's localStorage with enhanced functionality

## Description

LocalDB provides a wrapper around the browser's localStorage API with additional features:
- Type-safe storage and retrieval of data
- Automatic JSON serialization/deserialization
- Batch operations support
- Selective clearing with exceptions

## Example

```typescript
import { LocalDB } from 'dt-utils';

// Store a single value
LocalDB.set('user', { id: 1, name: 'John' });

// Store multiple values at once
LocalDB.set({
  theme: 'dark',
  language: 'en',
  settings: { notifications: true }
});

// Retrieve stored data
const user = LocalDB.get('user'); // => { id: 1, name: 'John' }

// Remove specific data
LocalDB.remove('user');

// Clear all except specified keys
LocalDB.clear(['theme', 'language']);
```

## Constructors

### Constructor

> **new localDB**(): `LocalDB`

#### Returns

`LocalDB`

## Methods

### clear()

> `static` **clear**(`except?`): `void`

Defined in: [localDB/index.ts:95](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localDB/index.ts#L95)

Clears the localStorage while optionally preserving specific keys.

@

#### Parameters

##### except?

`string`[]

An optional array of keys to keep in localStorage.
If provided, only the keys not in this array will be removed.

#### Returns

`void`

***

### get()

> `static` **get**(`key`): `any`

Defined in: [localDB/index.ts:68](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localDB/index.ts#L68)

Retrieves data from localStorage by key

#### Parameters

##### key

`string`

Unique identifier for the data to be retrieved

#### Returns

`any`

- Returns the stored data, which can be a string or an object

***

### remove()

> `static` **remove**(`key`): `void`

Defined in: [localDB/index.ts:83](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localDB/index.ts#L83)

Deletes data from localStorage by key

#### Parameters

##### key

`string`

Unique identifier for the data to be deleted

#### Returns

`void`

***

### set()

#### Call Signature

> `static` **set**(`items`): `void`

Defined in: [localDB/index.ts:41](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localDB/index.ts#L41)

Adds multiple items to localStorage

##### Parameters

###### items

`Record`\<`string`, `any`\>

An object where keys are localStorage keys and values are the values to be stored

##### Returns

`void`

#### Call Signature

> `static` **set**(`key`, `value`): `void`

Defined in: [localDB/index.ts:47](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localDB/index.ts#L47)

Stores data value by key in localStorage

##### Parameters

###### key

`string`

Unique identifier for the stored data

###### value

`any`

The data to be stored, can be of any type

##### Returns

`void`
