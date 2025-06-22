[dt-utils](../globals.md) / isWindows

# Function: isWindows()

> **isWindows**(): `boolean`

Defined in: [isWindows/index.ts:25](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/isWindows/index.ts#L25)

Check if the current operating system is Windows.

## Returns

`boolean`

- Returns true if the OS is Windows, false otherwise.

## Example

```typescript
import { isWindows } from 'dt-utils';

// Check if current OS is Windows
if (isWindows()) {
  console.log('Running on Windows');
} else {
  console.log('Not running on Windows');
}

// Direct usage
const isWindowsOS = isWindows(); // => true/false
```
