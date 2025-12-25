[dt-utils](../globals.md) / LocalDB

# Class: LocalDB

Defined in: [localDB/index.ts:36](https://github.com/DTStack/dt-utils/blob/master/src/localDB/index.ts#L36)

一个用于管理浏览器 localStorage 的增强功能工具类

## Description

LocalDB 为浏览器的 localStorage API 提供了一个包装器，具有以下附加功能：
- 类型安全的数据存储和检索
- 自动 JSON 序列化/反序列化
- 批量操作支持
- 可选择性清除带例外项

## Example

```typescript
import { LocalDB } from 'dt-utils';

// 存储单个值
LocalDB.set('user', { id: 1, name: 'John' });

// 一次存储多个值
LocalDB.set({
  theme: 'dark',
  language: 'en',
  settings: { notifications: true }
});

// 检索存储的数据
const user = LocalDB.get('user'); // => { id: 1, name: 'John' }

// 删除特定数据
LocalDB.remove('user');

// 清除除指定键外的所有数据
LocalDB.clear(['theme', 'language']);
```

## Constructors

### Constructor

> **new LocalDB**(): `LocalDB`

#### Returns

`LocalDB`

## Methods

### clear()

> `static` **clear**(`except?`): `void`

Defined in: [localDB/index.ts:93](https://github.com/DTStack/dt-utils/blob/master/src/localDB/index.ts#L93)

清除 localStorage，同时可以选择性地保留特定的键

#### Parameters

##### except?

`string`[]

可选的要在 localStorage 中保留的键名数组。
如果提供了这个参数，只有不在这个数组中的键会被删除。

#### Returns

`void`

***

### get()

> `static` **get**(`key`): `any`

Defined in: [localDB/index.ts:68](https://github.com/DTStack/dt-utils/blob/master/src/localDB/index.ts#L68)

通过键名从 localStorage 中获取数据

#### Parameters

##### key

`string`

要获取数据的唯一标识符

#### Returns

`any`

- 返回存储的数据，可以是字符串或对象

***

### remove()

> `static` **remove**(`key`): `void`

Defined in: [localDB/index.ts:83](https://github.com/DTStack/dt-utils/blob/master/src/localDB/index.ts#L83)

通过键名从 localStorage 中删除数据

#### Parameters

##### key

`string`

要删除数据的唯一标识符

#### Returns

`void`

***

### set()

#### Call Signature

> `static` **set**(`items`): `void`

Defined in: [localDB/index.ts:41](https://github.com/DTStack/dt-utils/blob/master/src/localDB/index.ts#L41)

向 localStorage 添加多个项目

##### Parameters

###### items

`Record`\<`string`, `any`\>

一个对象，其中键是 localStorage 的键名，值是要存储的数据

##### Returns

`void`

#### Call Signature

> `static` **set**(`key`, `value`): `void`

Defined in: [localDB/index.ts:47](https://github.com/DTStack/dt-utils/blob/master/src/localDB/index.ts#L47)

通过键名在 localStorage 中存储数据值

##### Parameters

###### key

`string`

存储数据的唯一标识符

###### value

`any`

要存储的数据，可以是任何类型

##### Returns

`void`
