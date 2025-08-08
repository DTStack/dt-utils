[dt-utils](../globals.md) / isMobile

# Function: isMobile()

> **isMobile**(): `boolean`

Defined in: [isMobile/index.ts:30](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/isMobile/index.ts#L30)

检查设备是否为移动设备。

## Returns

`boolean`

如果设备是移动设备则返回 `true`，否则返回 `false`。

## Description

该函数使用 http://detectmobilebrowsers.com/ 提供的正则表达式模式来识别移动设备，包括
智能手机、平板电脑和其他移动平台。

## Example

```typescript
import { isMobile } from 'dt-utils';

// 在桌面浏览器上
isMobile(); // => false

// 在 iPhone 上
isMobile(); // => true

// 在 iPad 上
isMobile(); // => true

// 在非浏览器环境中运行时
isMobile(); // => false
```

## See

[http://detectmobilebrowsers.com/](http://detectmobilebrowsers.com/)
