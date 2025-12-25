[dt-utils](../globals.md) / isMacOS

# Function: isMacOS()

> **isMacOS**(): `boolean`

Defined in: [isMacOS/index.ts:23](https://github.com/DTStack/dt-utils/blob/master/src/isMacOS/index.ts#L23)

检查当前操作系统是否为 macOS。

## Returns

`boolean`

如果在 macOS 上运行返回 `true`，否则返回 `false`

## Example

```typescript
import { isMacOS } from 'dt-utils';

// 检查当前系统是否为 macOS
if (isMacOS()) {
  console.log('运行在 macOS 上');
} else {
  console.log('不是运行在 macOS 上');
}

// 直接使用
const isOnMac = isMacOS(); // => true/false
```
