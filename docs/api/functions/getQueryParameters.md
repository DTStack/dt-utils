[dt-utils](../globals.md) / getQueryParameters

# Function: getQueryParameters()

> **getQueryParameters**\<`T`\>(`search`): `T`

Defined in: [getQueryParameters/index.ts:37](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/getQueryParameters/index.ts#L37)

Parses query parameters from a given search string.

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `undefined` \| `null` \| `string`\>

## Parameters

### search

`string`

The search string (e.g., location.search).

## Returns

`T`

- An object containing the query parameters.

## Description

Extracts and parses query parameters from a URL search string into a typed object.
Handles special string values:
- 'null' is converted to null
- 'undefined' is converted to undefined
- JSON-parsable strings are automatically parsed (e.g. numbers, booleans)
- Other values remain as strings

## Example

```typescript
import { getQueryParameters } from 'dt-utils';

// Basic usage
const search = '?name=john&age=25';
getQueryParameters(search); // => { name: "john", age: 25 }

// Handling special values
const search = '?isActive=true&count=null&status=undefined';
getQueryParameters(search); // => { isActive: true, count: null, status: undefined }

// With type inference
interface QueryParams {
  page: string;
  limit: number;
}
const params = getQueryParameters<QueryParams>('?page=home&limit=10');
// params.page is string, params.limit is number
```
