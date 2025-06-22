[dt-utils](../globals.md) / sessionDB

# Class: sessionDB

Defined in: [sessionDB/index.ts:44](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/sessionDB/index.ts#L44)

A utility class for managing browser's session storage with type-safe methods

## Description

SessionDB provides a convenient interface for interacting with the browser's sessionStorage API.
It supports storing and retrieving various data types, including objects and arrays, with automatic
JSON serialization/deserialization.

## Example

```typescript
import { SessionDB } from 'dt-utils';

// Store a simple value
SessionDB.set('username', 'john_doe');

// Store an object
SessionDB.set('userProfile', {
  id: 123,
  name: 'John Doe',
  preferences: { theme: 'dark' }
});

// Store multiple items at once
SessionDB.set({
  token: 'abc123',
  lastLogin: new Date().toISOString()
});

// Retrieve stored data
const username = SessionDB.get('username'); // => 'john_doe'
const profile = SessionDB.get('userProfile'); // => { id: 123, ... }

// Remove specific items
SessionDB.remove('username');
SessionDB.remove(['token', 'lastLogin']); // Remove multiple items

// Clear all items except specified keys
SessionDB.clear(['userProfile']); // Keeps only userProfile
```

## Constructors

### Constructor

> **new sessionDB**(): `SessionDB`

#### Returns

`SessionDB`

## Methods

### clear()

> `static` **clear**(`except?`): `void`

Defined in: [sessionDB/index.ts:106](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/sessionDB/index.ts#L106)

Clears the sessionStorage while optionally preserving specific keys.

#### Parameters

##### except?

`string`[]

An optional array of keys to keep in sessionStorage.
If provided, only the keys not in this array will be removed.

#### Returns

`void`

***

### get()

> `static` **get**(`key`): `any`

Defined in: [sessionDB/index.ts:77](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/sessionDB/index.ts#L77)

Retrieves data from sessionStorage by key

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

Defined in: [sessionDB/index.ts:92](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/sessionDB/index.ts#L92)

Deletes data from sessionStorage by key

#### Parameters

##### key

Unique identifier for the data to be deleted

`string` | `string`[]

#### Returns

`void`

***

### set()

#### Call Signature

> `static` **set**(`items`): `void`

Defined in: [sessionDB/index.ts:49](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/sessionDB/index.ts#L49)

Adds multiple items to sessionStorage

##### Parameters

###### items

`Record`\<`string`, `any`\>

An object where keys are sessionStorage keys and values are the values to be stored

##### Returns

`void`

#### Call Signature

> `static` **set**(`key`, `value`): `void`

Defined in: [sessionDB/index.ts:55](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/sessionDB/index.ts#L55)

Stores data value by key in sessionStorage

##### Parameters

###### key

`string`

Unique identifier for the stored data

###### value

`any`

The data to be stored, can be of any type

##### Returns

`void`
