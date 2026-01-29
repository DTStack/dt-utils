[dt-utils](../globals.md) / fromBase64

# Function: fromBase64()

> **fromBase64**(`value`): `string`

Defined in: [fromBase64/index.ts:22](https://github.com/DTStack/dt-utils/blob/master/src/fromBase64/index.ts#L22)

将 Base64 字符串转换为 UTF-8 字符串。

## Parameters

### value

`string`

Base64 字符串。支持标准格式和 URL 安全格式

## Returns

`string`

- UTF-8 字符串

## Example

```typescript
import { fromBase64 } from 'dt-utils';

// 解码 base64 字符串
fromBase64('SGVsbG8gV29ybGQ=') // => 'Hello World'

// 解码包含 unicode 字符的 base64 字符串
fromBase64('5L2g5aW977yB') // => '你好！'
```
