[dt-utils](../globals.md) / fromBase64

# Function: fromBase64()

> **fromBase64**(`value`): `string`

Defined in: [fromBase64/index.ts:22](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/fromBase64/index.ts#L22)

converts a Base64 string to a UTF-8 string.

## Parameters

### value

`string`

— Base64 string. Both normal and URL-safe are supported

## Returns

`string`

— UTF-8 string

## Example

```typescript
import { fromBase64 } from 'dt-utils';

// Decode base64 string
fromBase64('SGVsbG8gV29ybGQ=') // => 'Hello World'

// Decode base64 string with unicode characters
fromBase64('5L2g5aW977yB') // => '你好！'
```
