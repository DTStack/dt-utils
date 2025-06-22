[dt-utils](../globals.md) / isMobile

# Function: isMobile()

> **isMobile**(): `boolean`

Defined in: [isMobile/index.ts:30](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/isMobile/index.ts#L30)

Checks if device is mobile.

## Returns

`boolean`

Returns `true` if device is mobile, else `false`.

## Description

This function uses a comprehensive regex pattern to identify mobile devices, including
smartphones, tablets, and other mobile platforms.

## Example

```typescript
import { isMobile } from 'dt-utils';

// On a desktop browser
isMobile(); // => false

// On an iPhone
isMobile(); // => true

// On an iPad
isMobile(); // => true

// When running in a non-browser environment
isMobile(); // => false
```

## See

[http://detectmobilebrowsers.com/](http://detectmobilebrowsers.com/)
