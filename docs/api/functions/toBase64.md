[dt-utils](../globals.md) / toBase64

# Function: toBase64()

> **toBase64**(`value`): `Promise`\<`undefined` \| `null` \| `string`\>

Defined in: [toBase64/index.ts:32](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/toBase64/index.ts#L32)

将值转换为Base64编码的字符串。

## Parameters

### value

需要转换为Base64的值。支持File、string或其他原始类型

`string` | `Blob` | `File`

## Returns

`Promise`\<`undefined` \| `null` \| `string`\>

返回一个Promise，解析为Base64编码的字符串。如果输入为null/undefined则返回原始值

## Example

```typescript
import { toBase64 } from 'dt-utils';

// 将字符串转换为Base64
const str = 'Hello World';
const base64Str = await toBase64(str);
console.log(base64Str); // 'SGVsbG8gV29ybGQ='

// 将文件转换为Base64
const file = new File(['file content'], 'test.txt');
const base64File = await toBase64(file);
console.log(base64File); // 'data:text/plain;base64,ZmlsZSBjb250ZW50'

// 处理null值
const result = await toBase64(null);
console.log(result); // null
```
