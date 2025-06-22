[dt-utils](../globals.md) / isMacOS

# Function: isMacOS()

> **isMacOS**(): `boolean`

Defined in: [isMacOS/index.ts:24](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/isMacOS/index.ts#L24)

Check if the current operating system is macOS.

## Returns

`boolean`

Returns `true` if running on macOS, `false` otherwise

## Example

```typescript
import { isMacOS } from 'dt-utils';

// Check if current OS is macOS
if (isMacOS()) {
  console.log('Running on macOS');
} else {
  console.log('Not running on macOS');
}

// Direct usage
const isOnMac = isMacOS(); // => true/false
```
