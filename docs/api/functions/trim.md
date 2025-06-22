[dt-utils](../globals.md) / trim

# Function: trim()

> **trim**(`str`): `string`

Defined in: [trim/index.ts:27](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/trim/index.ts#L27)

Removes leading and trailing whitespace characters from a string.

## Parameters

### str

`string`

The string to trim

## Returns

`string`

The trimmed string, or the original value if input is not a string

## Description

Handles various Unicode whitespace characters including spaces, tabs, and no-break spaces.

## Example

```typescript
import { trim } from 'dt-utils';

// Removes leading and trailing whitespace characters
trim('  hello world  '); // => 'hello world'
trim('\t\nhello\r  '); // => 'hello'

// handles full-width spaces
trim('　hello　'); // => 'hello'

// returns original value for non-strings
trim(123); // => 123
```
