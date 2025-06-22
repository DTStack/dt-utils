[dt-utils](../globals.md) / LocalIndexedDB

# Class: ~~LocalIndexedDB~~

Defined in: [localIndexedDB/index.ts:37](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localIndexedDB/index.ts#L37)

LocalIndexedDB

## Deprecated

## Description

This class provides a wrapper for IndexedDB, a low-level API for client-side storage of significant amounts of structured data, including files/blobs.
It allows you to store and retrieve data in a structured format, and to query and manipulate that data using a variety of methods.

## Example

```typescript
import { LocalIndexedDB } from 'dt-utils';

// Initialize database
const db = new LocalIndexedDB('userDB', 1, 'users');
await db.open();

// Add data
await db.add('user1', { name: 'John', age: 30 });

// Get data
const user = await db.get('user1');

// Update data
await db.set('user1', { name: 'John', age: 31 });

// Delete data
await db.delete('user1');

// Clear all data
await db.clear();
```

## See

 - [IndexedDB Usage Guide](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB|MDN)
 - [Compatibility](https://caniuse.com/#feat=indexeddb|Browser)

## Constructors

### Constructor

> **new LocalIndexedDB**(`database`, `version`, `storeName`, `openLog`): `LocalIndexedDB`

Defined in: [localIndexedDB/index.ts:51](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localIndexedDB/index.ts#L51)

Constructor for a new indexedDB object

#### Parameters

##### database

`string`

Database name

##### version

`number`

Database version

##### storeName

`string`

Store object name

##### openLog

`boolean` = `false`

Whether to log indexedDB changes

#### Returns

`LocalIndexedDB`

## Methods

### ~~add()~~

> **add**\<`T`\>(`key`, `value`): `Promise`\<`IDBRequest`\<`any`\>\>

Defined in: [localIndexedDB/index.ts:149](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localIndexedDB/index.ts#L149)

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

##### value

`T`

#### Returns

`Promise`\<`IDBRequest`\<`any`\>\>

***

### ~~clear()~~

> **clear**(): `Promise`\<`IDBRequest`\<`any`\>\>

Defined in: [localIndexedDB/index.ts:171](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localIndexedDB/index.ts#L171)

#### Returns

`Promise`\<`IDBRequest`\<`any`\>\>

***

### ~~delete()~~

> **delete**(`key`): `Promise`\<`IDBRequest`\<`any`\>\>

Defined in: [localIndexedDB/index.ts:166](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localIndexedDB/index.ts#L166)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`IDBRequest`\<`any`\>\>

***

### ~~get()~~

> **get**\<`T`\>(`key`): `Promise`\<`T`\>

Defined in: [localIndexedDB/index.ts:160](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localIndexedDB/index.ts#L160)

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`T`\>

***

### ~~open()~~

> **open**(): `Promise`\<`IDBDatabase`\>

Defined in: [localIndexedDB/index.ts:70](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localIndexedDB/index.ts#L70)

Open the database indicated in the constructor function.
This method returns a Promise that resolves to the db instance.

#### Returns

`Promise`\<`IDBDatabase`\>

***

### ~~set()~~

> **set**\<`T`\>(`key`, `value`): `Promise`\<`IDBRequest`\<`any`\>\>

Defined in: [localIndexedDB/index.ts:154](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/localIndexedDB/index.ts#L154)

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

##### value

`T`

#### Returns

`Promise`\<`IDBRequest`\<`any`\>\>
