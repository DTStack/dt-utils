[dt-utils](../globals.md) / getKey

# Function: getKey()

> **getKey**(`size`): `string`

Defined in: [getKey/index.ts:24](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/getKey/index.ts#L24)

Generates a unique key using nanoid

## Parameters

### size

`number`

The length of the generated key

## Returns

`string`

A random string with the specified length

## Description

Generates a random unique key with specified length using nanoid library

## Example

```typescript
import { getKey } from 'dt-utils';

// Generate a key with length of 10
getKey(10) // => "nf5oc2mw3p"

// Generate a key with length of 5
getKey(5) // => "a4b2x"
```
