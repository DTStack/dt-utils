[dt-utils](../globals.md) / toSortOrder

# Function: toSortOrder()

> **toSortOrder**(`order`): `undefined` \| `"asc"` \| `"desc"`

Defined in: [toSortOrder/index.ts:20](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/toSortOrder/index.ts#L20)

Converts sorting direction terms commonly used in frontend frameworks (like Ant Design)
to standard SQL ordering terms.

## Parameters

### order

`string`

The order string to convert ('ascend' or 'descend')

## Returns

`undefined` \| `"asc"` \| `"desc"`

The corresponding SQL order string ('asc' or 'desc'), or undefined if input is empty/invalid

## Example

```typescript
import { toSortOrder } from 'dt-utils';

toSortOrder('ascend')  // => 'asc'
toSortOrder('descend') // => 'desc'
toSortOrder('')        // => undefined
toSortOrder('invalid') // => undefined
```
