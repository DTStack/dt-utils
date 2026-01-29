[dt-utils](../globals.md) / IndexedDB

# Class: ~~IndexedDB~~

Defined in: [indexedDB/index.ts:47](https://github.com/DTStack/dt-utils/blob/master/src/indexedDB/index.ts#L47)

IndexedDB

## Deprecated

## Description

这个类为 IndexedDB 提供了一个包装器，IndexedDB 是一个用于客户端存储大量结构化数据（包括文件/二进制对象）的 API。
它允许你以结构化格式存储和检索数据，并使用各种方法查询和操作这些数据。

## Methods

| 方法名 | 描述 | 参数 | 返回值 |
|------|------|------|--------|
| `open` | 打开数据库连接 | — | `Promise<IDBDatabase>` |
| `add` | 添加一个新的键值对到对象存储中 | `key: IDBValidKey` <br> `value: any` | `Promise<void>` |
| `set` | 更新对象存储中已存在的键值对 | `key: IDBValidKey` <br> `value: any` | `Promise<void>` |
| `get` | 从对象存储中检索指定键的值 | `key: IDBValidKey` | `Promise<any>` |
| `delete` | 从对象存储中删除指定键对应的数据 | `key: IDBValidKey` | `Promise<void>` |
| `clear` | 清空对象存储中的所有数据 | — | `Promise<void>` |

## Example

```typescript
import { IndexedDB } from 'dt-utils';

// 初始化数据库
const db = new IndexedDB('userDB', 1, 'users');
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

 - [MDN IndexedDB 使用指南](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
 - [浏览器兼容性](https://caniuse.com/#feat=indexeddb)

## Constructors

### Constructor

> **new IndexedDB**(`database`, `version`, `storeName`, `openLog`): `IndexedDB`

Defined in: [indexedDB/index.ts:61](https://github.com/DTStack/dt-utils/blob/master/src/indexedDB/index.ts#L61)

创建一个新的 IndexedDB 对象

#### Parameters

##### database

`string`

数据库名称

##### version

`number`

数据库版本

##### storeName

`string`

对象存储名称

##### openLog

`boolean` = `false`

是否记录 IndexedDB 的变更日志

#### Returns

`IndexedDB`
