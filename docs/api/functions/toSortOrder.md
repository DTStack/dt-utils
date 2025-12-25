[dt-utils](../globals.md) / toSortOrder

# Function: toSortOrder()

> **toSortOrder**(`order`): `undefined` \| `"asc"` \| `"desc"`

Defined in: [toSortOrder/index.ts:19](https://github.com/DTStack/dt-utils/blob/master/src/toSortOrder/index.ts#L19)

将前端框架（如 Ant Design）中常用的排序方向术语转换为标准的 SQL 排序术语。

## Parameters

### order

`string`

要转换的排序字符串（'ascend' 或 'descend'）

## Returns

`undefined` \| `"asc"` \| `"desc"`

对应的 SQL 排序字符串（'asc' 或 'desc'），如果输入为空或无效则返回 undefined

## Example

```typescript
import { toSortOrder } from 'dt-utils';

toSortOrder('ascend')  // => 'asc'
toSortOrder('descend') // => 'desc'
toSortOrder('')        // => undefined
toSortOrder('invalid') // => undefined
```
