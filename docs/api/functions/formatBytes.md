[dt-utils](../globals.md) / formatBytes

# Function: formatBytes()

> **formatBytes**(`value`, `decimals?`): `FormattedBytes`

Defined in: [formatBytes/index.ts:49](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/formatBytes/index.ts#L49)

将字节数值格式化为带单位的字符串表示。

## Parameters

### value

`number`

要格式化的字节数值

### decimals?

`number` = `2`

结果保留的小数位数，默认为2位

## Returns

`FormattedBytes`

格式化后的字符串，例如"1.5 MB"。若输入无效则返回"Invalid value"

## Description

自动将字节数值转换为最适合的单位表示形式，支持从字节(B)到尧字节(YB)的单位范围。
转换采用二进制换算(1024进制)，即:
- 1 KB = 1024 B
- 1 MB = 1024 KB
- 以此类推...

特殊情况处理:
- 当输入为负数、NaN或Infinity时，返回"Invalid value"
- 当输入为0时，返回"0 B"

## Example

```typescript
import { formatBytes } from 'dt-utils';

// 基本格式化
formatBytes(1024)        // => "1 KB"
formatBytes(1536)        // => "1.5 KB"
formatBytes(1048576)     // => "1 MB"

// 指定小数位数
formatBytes(1234567, 1)  // => "1.2 MB"
formatBytes(1234567, 3)  // => "1.178 MB"

// 大数值
formatBytes(1.5e12)      // => "1.36 TB"

// 边界情况
formatBytes(0)           // => "0 B"
formatBytes(-1024)       // => "Invalid value"
formatBytes(Infinity)    // => "Invalid value"
formatBytes(NaN)         // => "Invalid value"
```

## See

[https://en.wikipedia.org/wiki/Byte#Multiple-byte\_units](https://en.wikipedia.org/wiki/Byte#Multiple-byte_units) 查看更多关于字节单位的信息
