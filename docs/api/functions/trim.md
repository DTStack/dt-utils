[dt-utils](../globals.md) / trim

# Function: trim()

> **trim**(`str`): `string`

Defined in: [trim/index.ts:27](https://github.com/DTStack/dt-utils/blob/master/src/trim/index.ts#L27)

移除字符串首尾的空白字符。

## Parameters

### str

`string`

需要处理的字符串

## Returns

`string`

处理后的字符串，如果输入不是字符串则返回原始值

## Description

处理各种 Unicode 空白字符，包括空格、制表符和不换行空格。

## Example

```typescript
import { trim } from 'dt-utils';

// 移除首尾的空白字符
trim('  hello world  '); // => 'hello world'
trim('\t\nhello\r  '); // => 'hello'

// 处理全角空格
trim('　hello　'); // => 'hello'

// 非字符串类型返回原始值
trim(123); // => 123
```
