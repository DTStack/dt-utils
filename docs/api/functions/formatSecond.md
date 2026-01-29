[dt-utils](../globals.md) / formatSecond

# Function: formatSecond()

> **formatSecond**(`secondTime`, `options?`): `string`

Defined in: [formatSecond/index.ts:75](https://github.com/DTStack/dt-utils/blob/master/src/formatSecond/index.ts#L75)

将秒数格式化为可读的时间字符串。

支持：
- 自定义时间单位（h / m / s）
- 数值补零（padZero）
- 通过 format 模板输出（如 HH:mm:ss）

## Parameters

### secondTime

`number` = `0`

需要转换的秒数（小于等于 0、NaN、非数字将视为 0）

### options?

`FormatSecondOptions` = `{}`

格式化选项

## Returns

`string`

格式化后的时间字符串

## Example

```ts
import { formatSecond } from 'dt-utils';

// 基本用法（默认单位：h / m / s）
formatSecond(3661)  // => '1h1m1s'

formatSecond(59)  // => '59s'

formatSecond(0)  // => '0s'

// 补零
formatSecond(3661, { padZero: true })  // => '01h01m01s'

formatSecond(60, { padZero: true })  // => '01m'

// 自定义单位（中文）
formatSecond(1106, {
  units: { h: '小时', m: '分', s: '秒' },
})  // => '18分26秒'

// 使用 format 模板（运行时长）
formatSecond(12078, {
  format: 'HH:mm:ss',
  padZero: true,
})  // => '03:21:18'

// 边界情况
formatSecond(-1)  // => '0s'

formatSecond(NaN)  // => '0s'

formatSecond()  // => '0s'
```
