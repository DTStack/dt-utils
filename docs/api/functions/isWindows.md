[dt-utils](../globals.md) / isWindows

# Function: isWindows()

> **isWindows**(): `boolean`

Defined in: [isWindows/index.ts:25](https://github.com/DTStack/dt-utils/blob/master/src/isWindows/index.ts#L25)

检查当前操作系统是否为 Windows。

## Returns

`boolean`

- 如果操作系统是 Windows 返回 true，否则返回 false。

## Example

```typescript
import { isWindows } from 'dt-utils';

// 检查当前操作系统是否为 Windows
if (isWindows()) {
  console.log('运行在 Windows 系统上');
} else {
  console.log('不是运行在 Windows 系统上');
}

// 直接使用
const isWindowsOS = isWindows(); // => true/false
```
