[dt-utils](../globals.md) / getTypeOfValue

# Function: getTypeOfValue()

> **getTypeOfValue**(`value`): `string`

Defined in: [getTypeOfValue/index.ts:37](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/getTypeOfValue/index.ts#L37)

Returns the type of a value as a lowercase string.

## Parameters

### value

`any`

The value to check the type of

## Returns

`string`

The lowercase type string

## Description

A utility function that determines the precise type of any JavaScript value.
Returns the lowercase string representation of the value's type.

## Example

```typescript
import { getTypeOfValue } from 'dt-utils';

// Basic types
getTypeOfValue(42);           // => 'number'
getTypeOfValue('hello');      // => 'string'
getTypeOfValue(true);         // => 'boolean'
getTypeOfValue(undefined);    // => 'undefined'
getTypeOfValue(null);         // => 'null'

// Complex types
getTypeOfValue([1, 2, 3]);    // => 'array'
getTypeOfValue({});           // => 'object'
getTypeOfValue(() => {});     // => 'function'

// Built-in objects
getTypeOfValue(new Date());   // => 'date'
getTypeOfValue(/regex/);      // => 'regexp'
getTypeOfValue(new Error());  // => 'error'
getTypeOfValue(Symbol());     // => 'symbol'
getTypeOfValue(new Map());    // => 'map'
getTypeOfValue(new Set());    // => 'set'
```
