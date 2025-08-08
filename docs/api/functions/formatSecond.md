[dt-utils](../globals.md) / formatSecond

# Function: formatSecond()

> **formatSecond**(`secondTime`): `string`

Defined in: [formatSecond/index.ts:28](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/formatSecond/index.ts#L28)

将秒数转换为时间格式 (HH[h]mm[m]ss[s])

## Parameters

### secondTime

`number` = `0`

需要转换的秒数

## Returns

`string`

格式化后的时间字符串，包含小时(h)、分钟(m)和秒(s)

## Example

```typescript
import { formatSecond } from 'dt-utils';

// 基本用法
formatSecond(3661)   // => '1h1m1s'
formatSecond(59)     // => '59s'
formatSecond(0)      // => '0s'

// 处理大数字
formatSecond(7323)   // => '2h2m3s'
formatSecond(3600)   // => '1h'

// 处理边界情况
formatSecond(-1)     // => '0s'
formatSecond(NaN)    // => '0s'
formatSecond()       // => '0s'
```
