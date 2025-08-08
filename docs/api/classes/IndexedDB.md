[dt-utils](../globals.md) / IndexedDB

# Class: ~~IndexedDB~~

Defined in: [indexedDB/index.ts:37](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/indexedDB/index.ts#L37)

IndexedDB

## Deprecated

## Description

这个类为 IndexedDB 提供了一个包装器，IndexedDB 是一个用于客户端存储大量结构化数据（包括文件/二进制对象）的 API。
它允许你以结构化格式存储和检索数据，并使用各种方法查询和操作这些数据。

## Example

```typescript
import { LocalIndexedDB } from 'dt-utils';

// 初始化数据库
const db = new LocalIndexedDB('userDB', 1, 'users');
await db.open();

// 添加数据
await db.add('user1', { name: 'John', age: 30 });

// 获取数据
const user = await db.get('user1');

// 更新数据
await db.set('user1', { name: 'John', age: 31 });

// 删除数据
await db.delete('user1');

// 清空所有数据
await db.clear();
```

## See

 - [IndexedDB 使用指南](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB|MDN)
 - [https://caniuse.com/#feat=indexeddb\|浏览器兼容性](https://caniuse.com/#feat=indexeddb|浏览器兼容性)

## Constructors

### Constructor

> **new IndexedDB**(`database`, `version`, `storeName`, `openLog`): `IndexedDB`

Defined in: [indexedDB/index.ts:51](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/indexedDB/index.ts#L51)

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

`IndexedDB`

## Methods

### ~~add()~~

> **add**\<`T`\>(`key`, `value`): `Promise`\<`IDBRequest`\<`any`\>\>

Defined in: [indexedDB/index.ts:149](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/indexedDB/index.ts#L149)

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

Defined in: [indexedDB/index.ts:171](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/indexedDB/index.ts#L171)

#### Returns

`Promise`\<`IDBRequest`\<`any`\>\>

***

### ~~delete()~~

> **delete**(`key`): `Promise`\<`IDBRequest`\<`any`\>\>

Defined in: [indexedDB/index.ts:166](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/indexedDB/index.ts#L166)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`IDBRequest`\<`any`\>\>

***

### ~~get()~~

> **get**\<`T`\>(`key`): `Promise`\<`T`\>

Defined in: [indexedDB/index.ts:160](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/indexedDB/index.ts#L160)

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

Defined in: [indexedDB/index.ts:70](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/indexedDB/index.ts#L70)

打开在构造函数中指定的数据库。
此方法返回一个 Promise，解析为数据库实例。

#### Returns

`Promise`\<`IDBDatabase`\>

***

### ~~set()~~

> **set**\<`T`\>(`key`, `value`): `Promise`\<`IDBRequest`\<`any`\>\>

Defined in: [indexedDB/index.ts:154](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/indexedDB/index.ts#L154)

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
