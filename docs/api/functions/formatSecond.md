[dt-utils](../globals.md) / formatSecond

# Function: formatSecond()

> **formatSecond**(`secondTime`): `string`

Defined in: [formatSecond/index.ts:28](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/formatSecond/index.ts#L28)

Converts seconds into a time format (HH[h]mm[m]ss[s])

## Parameters

### secondTime

`number` = `0`

Number of seconds to be converted

## Returns

`string`

Formatted time string with hours (h), minutes (m), and seconds (s)

## Example

```typescript
import { formatSecond } from 'dt-utils';

// Basic usage
formatSecond(3661)   // => '1h1m1s'
formatSecond(59)     // => '59s'
formatSecond(0)      // => '0s'

// Handle large numbers
formatSecond(7323)   // => '2h2m3s'
formatSecond(3600)   // => '1h'

// Handle edge cases
formatSecond(-1)     // => '0s'
formatSecond(NaN)    // => '0s'
formatSecond()       // => '0s'
```
