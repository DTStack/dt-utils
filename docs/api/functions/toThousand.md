[dt-utils](../globals.md) / toThousand

# Function: toThousand()

> **toThousand**(`num`): `string`

Defined in: [toThousand/index.ts:29](https://github.com/DTStack/dt-utils/blob/master/src/toThousand/index.ts#L29)

将数字或字符串转换为带千位分隔符的格式化字符串

## Parameters

### num

需要格式化的数字或字符串

`string` | `number`

## Returns

`string`

添加了千位分隔符的字符串

## Description

接收一个数字或字符串输入，返回一个使用逗号作为千位分隔符的格式化字符串。
可以处理整数和小数。

## Example

```typescript
import { toThousand } from 'dt-utils';

// 格式化整数
toThousand(1234567)     // => '1,234,567'
toThousand('1234567')   // => '1,234,567'

// 格式化小数
toThousand(12345.67)    // => '12,345.67'
toThousand('12345.67')  // => '12,345.67'

// 处理边界情况
toThousand(0)           // => '0'
toThousand('')          // => '0'
```
