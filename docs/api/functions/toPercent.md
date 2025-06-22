[dt-utils](../globals.md) / toPercent

# Function: toPercent()

> **toPercent**(`num`, `precision?`): `string`

Defined in: [toPercent/index.ts:34](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/toPercent/index.ts#L34)

Formats a number as a percentage string.

## Parameters

### num

`number`

The decimal number to be converted to percentage

### precision?

`number` = `2`

The number of decimal places to round to (default: 2)

## Returns

`string`

A formatted percentage string with the specified precision

## Description

This function converts a decimal number to a percentage string representation.

## Example

```typescript
import { toPercent } from 'dt-utils';

// Basic usage
toPercent(0.1234)      // => "12.34%"

// Custom precision
toPercent(0.1234, 1)   // => "12.3%"
toPercent(1.2345, 3)   // => "123.345%"

// Handling negative numbers
toPercent(-0.089, 1)   // => "-8.9%"

// Edge cases
toPercent(0.00000001)  // => "0%"
toPercent(NaN)         // => "0%"
toPercent(Infinity)    // => "0%"
toPercent(null)        // => "0%"
toPercent(undefined)   // => "0%"
```
