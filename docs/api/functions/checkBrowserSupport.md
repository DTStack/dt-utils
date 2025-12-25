[dt-utils](../globals.md) / checkBrowserSupport

# Function: checkBrowserSupport()

> **checkBrowserSupport**(`browsers`): `boolean`

Defined in: [checkBrowserSupport/index.ts:51](https://github.com/DTStack/dt-utils/blob/master/src/checkBrowserSupport/index.ts#L51)

检查当前浏览器是否满足最低版本要求

## Parameters

### browsers

`IBrowser`[]

浏览器最低版本配置数组
- `name`: 浏览器名称，不区分大小写（如：'chrome'、'firefox'、'safari'等）
- `version`: 最低版本号要求，支持字符串或数字格式（如：'80'、75、'13.0.1'等）

## Returns

`boolean`

返回检查结果
- 当前浏览器版本满足要求时，返回 `true`
- 当前浏览器版本不满足要求或浏览器类型不匹配时，返回 `false`
- 传入空数组时，返回 `false`

## Description

该函数会检查当前浏览器的版本是否大于或等于指定的最低版本要求。
如果当前浏览器不在指定的浏览器列表中，将返回 false。

## Example

```typescript
import { checkBrowserSupport } from 'dt-utils';

// 检查单个浏览器版本要求
checkBrowserSupport([
  { name: 'chrome', version: '80' }
]);

// 检查多个浏览器版本要求（满足其中之一即可）
checkBrowserSupport([
  { name: 'chrome', version: '80' },
  { name: 'firefox', version: '75' },
  { name: 'safari', version: '13' }
]);

// 版本号支持字符串或数字格式
checkBrowserSupport([
  { name: 'chrome', version: 80 },
  { name: 'firefox', version: '75.0.1' }
]);
```
