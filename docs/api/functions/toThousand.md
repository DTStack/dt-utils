[dt-utils](../globals.md) / toThousand

# Function: toThousand()

> **toThousand**(`num`): `string`

Defined in: [toThousand/index.ts:29](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/toThousand/index.ts#L29)

Converts a number or string to a formatted string with thousand separators.

## Parameters

### num

The number or string to be formatted

`string` | `number`

## Returns

`string`

A string with thousand separators added

## Description

This function takes a number or string input and returns a formatted string with commas as thousand separators.
Handles both integer and decimal numbers.

## Example

```typescript
import { toThousand } from 'dt-utils';

// Format integers
toThousand(1234567)     // => '1,234,567'
toThousand('1234567')   // => '1,234,567'

// Format decimals
toThousand(12345.67)    // => '12,345.67'
toThousand('12345.67')  // => '12,345.67'

// Handle edge cases
toThousand(0)           // => '0'
toThousand('')          // => '0'
```
