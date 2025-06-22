[dt-utils](../globals.md) / toBase64

# Function: toBase64()

> **toBase64**(`value`): `Promise`\<`undefined` \| `null` \| `string`\>

Defined in: [toBase64/index.ts:32](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/toBase64/index.ts#L32)

Converts a value to a Base64-encoded string.

## Parameters

### value

The value to convert to Base64. Supports File, string, or other primitive types

`string` | `Blob` | `File`

## Returns

`Promise`\<`undefined` \| `null` \| `string`\>

A Promise that resolves with the Base64-encoded string. Returns original value if input is null/undefined

## Example

```typescript
import { toBase64 } from 'dt-utils';

// Convert string to Base64
const str = 'Hello World';
const base64Str = await toBase64(str);
console.log(base64Str); // 'SGVsbG8gV29ybGQ='

// Convert File to Base64
const file = new File(['file content'], 'test.txt');
const base64File = await toBase64(file);
console.log(base64File); // 'data:text/plain;base64,ZmlsZSBjb250ZW50'

// Handle null value
const result = await toBase64(null);
console.log(result); // null
```
