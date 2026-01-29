[dt-utils](../globals.md) / generateUniqueId

# Function: generateUniqueId()

> **generateUniqueId**(`size`): `string`

Defined in: [generateUniqueId/index.ts:24](https://github.com/DTStack/dt-utils/blob/master/src/generateUniqueId/index.ts#L24)

使用 nanoid 生成唯一键值

## Parameters

### size

`number` = `8`

生成的键值长度

## Returns

`string`

指定长度的随机字符串

## Description

使用 nanoid 库生成指定长度的随机唯一键值

## Example

```typescript
import { generateUniqueId } from 'dt-utils';

// 生成长度为10的键值
generateUniqueId(10) // => "nf5oc2mw3p"

// 生成长度为5的键值
generateUniqueId(5) // => "a4b2x"
```
