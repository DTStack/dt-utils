[dt-utils](../globals.md) / generateUrlWithQuery

# Function: generateUrlWithQuery()

> **generateUrlWithQuery**(`pathname`, `queryParams`): `string`

Defined in: [generateUrlWithQuery/index.ts:32](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/generateUrlWithQuery/index.ts#L32)

Generate URL with query parameters.

## Parameters

### pathname

`string`

Base URL path (e.g., '/api/users')

### queryParams

`QueryParams` = `{}`

Query parameters object (e.g., { id: 123, name: 'john' })

## Returns

`string`

Complete URL string

## Description

This utility function combines a base URL path with query parameters
to create a complete URL string. It automatically handles parameter encoding and removes invalid values.

## Example

```typescript
import { generateUrlWithQuery } from 'dt-utils';

// Basic usage
generateUrlWithQuery('/api/users', { id: 123 }) // => '/api/users?id=123'

// Multiple parameters
generateUrlWithQuery('/search', { q: 'test', page: 1, sort: 'desc' }) // => '/search?q=test&page=1&sort=desc'

// Handles invalid values
generateUrlWithQuery('/api/data', { id: 123, name: null, status: undefined }) // => '/api/data?id=123'
```
