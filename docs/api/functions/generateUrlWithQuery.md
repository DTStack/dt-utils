[dt-utils](../globals.md) / generateUrlWithQuery

# Function: generateUrlWithQuery()

> **generateUrlWithQuery**(`pathname`, `queryParams`): `string`

Defined in: [generateUrlWithQuery/index.ts:32](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/generateUrlWithQuery/index.ts#L32)

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
generateUrlWithQuery('/search', { q: 'test', page: 1, sort: 'desc' }) // => '/search?q=test&page=1&sort=desc'

// 处理无效值
generateUrlWithQuery('/api/data', { id: 123, name: null, status: undefined }) // => '/api/data?id=123'
```
