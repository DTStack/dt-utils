[dt-utils](../globals.md) / SessionDB

# Class: SessionDB

Defined in: [sessionDB/index.ts:45](https://github.com/DTStack/dt-utils/blob/master/src/sessionDB/index.ts#L45)

一个用于管理浏览器 Session 存储的工具类，提供类型安全的方法

## Description

SessionDB 为浏览器的 sessionStorage API 提供了一个包装器，具有以下附加功能：
- 类型安全的数据存储和检索
- 自动 JSON 序列化/反序列化
- 批量操作支持
- 可选择性清除带例外项

## Example

```typescript
import { SessionDB } from 'dt-utils';

// 存储简单值
SessionDB.set('username', 'john_doe');

// 存储对象
SessionDB.set('userProfile', {
  id: 123,
  name: 'John Doe',
  preferences: { theme: 'dark' }
});

// 一次存储多个项目
SessionDB.set({
  token: 'abc123',
  lastLogin: new Date().toISOString()
});

// 检索存储的数据
const username = SessionDB.get('username'); // => 'john_doe'
const profile = SessionDB.get('userProfile'); // => { id: 123, ... }

// 删除特定项目
SessionDB.remove('username');
SessionDB.remove(['token', 'lastLogin']); // 删除多个项目

// 清除所有项目，除了指定的键
SessionDB.clear(['userProfile']); // 只保留 userProfile
```

## Constructors

### Constructor

> **new SessionDB**(): `SessionDB`

#### Returns

`SessionDB`

## Methods

### clear()

> `static` **clear**(`except?`): `void`

Defined in: [sessionDB/index.ts:107](https://github.com/DTStack/dt-utils/blob/master/src/sessionDB/index.ts#L107)

清除 sessionStorage，同时可以选择性地保留特定的键。

#### Parameters

##### except?

`string`[]

要在 sessionStorage 中保留的键的可选数组。
如果提供了该参数，只有不在此数组中的键会被删除。

#### Returns

`void`

***

### get()

> `static` **get**(`key`): `any`

Defined in: [sessionDB/index.ts:78](https://github.com/DTStack/dt-utils/blob/master/src/sessionDB/index.ts#L78)

通过键从 sessionStorage 检索数据

#### Parameters

##### key

`string`

要检索的数据的唯一标识符

#### Returns

`any`

- 返回存储的数据，可以是字符串或对象

***

### remove()

> `static` **remove**(`key`): `void`

Defined in: [sessionDB/index.ts:93](https://github.com/DTStack/dt-utils/blob/master/src/sessionDB/index.ts#L93)

通过键从 sessionStorage 删除数据

#### Parameters

##### key

要删除的数据的唯一标识符

`string` | `string`[]

#### Returns

`void`

***

### set()

#### Call Signature

> `static` **set**(`items`): `void`

Defined in: [sessionDB/index.ts:50](https://github.com/DTStack/dt-utils/blob/master/src/sessionDB/index.ts#L50)

向 sessionStorage 添加多个项目

##### Parameters

###### items

`Record`\<`string`, `any`\>

一个对象，其中键是 sessionStorage 的键，值是要存储的值

##### Returns

`void`

#### Call Signature

> `static` **set**(`key`, `value`): `void`

Defined in: [sessionDB/index.ts:56](https://github.com/DTStack/dt-utils/blob/master/src/sessionDB/index.ts#L56)

通过键在 sessionStorage 中存储数据值

##### Parameters

###### key

`string`

存储数据的唯一标识符

###### value

`any`

要存储的数据，可以是任何类型

##### Returns

`void`
