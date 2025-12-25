[dt-utils](../globals.md) / toPercent

# Function: toPercent()

> **toPercent**(`num`, `precision?`): `string`

Defined in: [toPercent/index.ts:34](https://github.com/DTStack/dt-utils/blob/master/src/toPercent/index.ts#L34)

将数字格式化为百分比字符串。

## Parameters

### num

`number`

要转换为百分比的十进制数

### precision?

`number` = `2`

要四舍五入到的小数位数（默认值：2）

## Returns

`string`

具有指定精度的格式化百分比字符串

## Description

将十进制数转换为百分比字符串表示。

## Example

```typescript
import { toPercent } from 'dt-utils';

// 基本用法
toPercent(0.1234)      // => "12.34%"

// 自定义精度
toPercent(0.1234, 1)   // => "12.3%"
toPercent(1.2345, 3)   // => "123.345%"

// 处理负数
toPercent(-0.089, 1)   // => "-8.9%"

// 边界情况
toPercent(0.00000001)  // => "0%"
toPercent(NaN)         // => "0%"
toPercent(Infinity)    // => "0%"
toPercent(null)        // => "0%"
toPercent(undefined)   // => "0%"
```
