[dt-utils](../globals.md) / generateUrlWithQuery

# Function: generateUrlWithQuery()

> **generateUrlWithQuery**(`pathname`, `queryParams`): `string`

Defined in: [generateUrlWithQuery/index.ts:44](https://github.com/DTStack/dt-utils/blob/master/src/generateUrlWithQuery/index.ts#L44)

生成带查询参数的 URL

## Parameters

### pathname

`string`

基础 URL 路径（例如：'/api/users'）

### queryParams

`QueryParams` = `{}`

查询参数对象（例如：{ id: 123, name: 'john' }）

## Returns

`string`

完整的 URL 字符串

## Description

将基础 URL 路径与查询参数组合，
生成一个完整的 URL 字符串。它会自动处理参数编码并移除无效值。

## Example

```typescript
import { generateUrlWithQuery } from 'dt-utils';

// 基础用法
generateUrlWithQuery('/api/users', { id: 123 }) // => '/api/users?id=123'

// 多个参数
generateUrlWithQuery('/search', { q: 'test', page: 1, sort: 'desc', tags: ['active', 'user'] }) // => '/search?q=test&page=1&sort=desc&tags=active,user'

// 处理无效值
generateUrlWithQuery('/api/data', { id: 123, name: null, status: undefined, empty: '', emptyArray: [] }) // => '/api/data?id=123'

// 数组类型参数
generateUrlWithQuery('/api/users', { ids: [1, 2, 3], tags: ['a', 'b'] }) // => '/api/users?ids=1,2,3&tags=a,b'

// 嵌套数组（会被扁平化）
generateUrlWithQuery('/api/data', { matrix: [[1, 2], [3, 4]] }) // => '/api/data?matrix=1,2,3,4'

// 混合类型数组
generateUrlWithQuery('/api/data', { mixed: [1, 'two', true, null, undefined] }) // => '/api/data?mixed=1,two,true,,'

// 复杂类型数组（使用 toString() 转换）
generateUrlWithQuery('/api/data', { objects: [{ a: 1 }, { b: 2 }] }) // => '/api/data?objects=[object Object],[object Object]'
```
