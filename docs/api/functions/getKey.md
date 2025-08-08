[dt-utils](../globals.md) / getKey

# Function: getKey()

> **getKey**(`size`): `string`

Defined in: [getKey/index.ts:24](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/getKey/index.ts#L24)

使用 nanoid 生成唯一键值

## Parameters

### size

`number`

生成的键值长度

## Returns

`string`

指定长度的随机字符串

## Description

使用 nanoid 库生成指定长度的随机唯一键值

## Example

```typescript
import { getKey } from 'dt-utils';

// 生成长度为10的键值
getKey(10) // => "nf5oc2mw3p"

// 生成长度为5的键值
getKey(5) // => "a4b2x"
```
