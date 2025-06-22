[dt-utils](../globals.md) / checkBrowserSupport

# Function: checkBrowserSupport()

> **checkBrowserSupport**(`browsers`): `boolean`

Defined in: [checkBrowserSupport/index.ts:49](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/checkBrowserSupport/index.ts#L49)

Checks if the current browser meets minimum version requirements

## Parameters

### browsers

`IBrowser`[]

An array of browser specifications, where each specification contains:
- `name`: Browser name (e.g., 'chrome', 'firefox', 'safari')
- `version`: Minimum required version number

## Returns

`boolean`

Returns `true` if current browser meets version requirements, `false` otherwise

## Description

A utility function that validates whether the current browser satisfies specified minimum version
requirements. The function accepts an array of browser specifications and performs version
comparison checks.

## Example

```typescript
import { checkBrowserSupport } from 'dt-utils';

// Single browser check
checkBrowserSupport([
  { name: 'chrome', version: '80' }
]);

// Multiple browser support
checkBrowserSupport([
  { name: 'chrome', version: '80' },
  { name: 'firefox', version: '75' },
  { name: 'safari', version: '13' }
]);

// Version can be string or number
checkBrowserSupport([
  { name: 'chrome', version: 80 },
  { name: 'firefox', version: '75.0.1' }
]);
```
