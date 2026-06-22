[dt-utils](../globals.md) / toBase64

# Function: toBase64()

将值转换为Base64编码的字符串。

## Example

```typescript
import { toBase64 } from 'dt-utils';

// 将字符串转换为Base64
const str = 'Hello World';
const base64Str = toBase64(str);
console.log(base64Str); // 'SGVsbG8gV29ybGQ='

// 处理null值
const result = toBase64(null);
console.log(result); // null

// 将文件转换为Base64
const file = new File(['file content'], 'test.txt');
const base64File = await toBase64(file);
console.log(base64File); // 'data:text/plain;base64,ZmlsZSBjb250ZW50'
```

## Call Signature

> **toBase64**(`value`): `undefined` \| `string`

Defined in: [toBase64/index.ts:9](https://github.com/DTStack/dt-utils/blob/master/src/toBase64/index.ts#L9)

将字符串转换为Base64编码的字符串。

### Parameters

#### value

需要转换为Base64的字符串，支持null/undefined

`undefined` | `null` | `string`

### Returns

`undefined` \| `string`

Base64编码的字符串，如果输入为null/undefined则返回undefined

## Call Signature

> **toBase64**(`value`): `Promise`\<`null` \| `string` \| `ArrayBuffer`\>

Defined in: [toBase64/index.ts:17](https://github.com/DTStack/dt-utils/blob/master/src/toBase64/index.ts#L17)

将File或Blob对象转换为Base64编码的Data URL。

### Parameters

#### value

需要转换为Base64的File或Blob对象

`Blob` | `File`

### Returns

`Promise`\<`null` \| `string` \| `ArrayBuffer`\>

Promise，解析为Base64编码的Data URL字符串
