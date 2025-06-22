[dt-utils](../globals.md) / formatBytes

# Function: formatBytes()

> **formatBytes**(`value`, `decimals?`): `FormattedBytes`

Defined in: [formatBytes/index.ts:43](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/formatBytes/index.ts#L43)

Formats a numeric byte value into a string with appropriate size units.

## Parameters

### value

`number`

The numeric value in bytes to format

### decimals?

`number` = `2`

The number of decimal places to round to (defaults to 2)

## Returns

`FormattedBytes`

A formatted string in the format "value unit" (e.g. "1.5 MB") or error message

## Description

Converts a byte value into a human-readable string representation with the most appropriate
size unit, ranging from Bytes (B) to Yottabytes (YB). The conversion uses 1024 as the base
unit multiplier (1 KB = 1024 B).

## Example

```typescript
import { formatBytes } from 'dt-utils';

// Basic formatting
formatBytes(1024)        // => "1 KB"
formatBytes(1536)        // => "1.5 KB"
formatBytes(1048576)     // => "1 MB"

// Specifying decimal places
formatBytes(1234567, 1)  // => "1.2 MB"
formatBytes(1234567, 3)  // => "1.178 MB"

// Large numbers
formatBytes(1.5e12)      // => "1.36 TB"

// Edge cases
formatBytes(0)           // => "0 B"
formatBytes(-1024)       // => "Invalid value"
formatBytes(Infinity)    // => "Invalid value"
formatBytes(NaN)         // => "Invalid value"
```

## See

[https://en.wikipedia.org/wiki/Byte#Multiple-byte\_units](https://en.wikipedia.org/wiki/Byte#Multiple-byte_units) for more information about byte units
