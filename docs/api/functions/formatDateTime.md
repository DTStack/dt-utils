[dt-utils](../globals.md) / formatDateTime

# Function: formatDateTime()

> **formatDateTime**(`date`, `format`): `string` \| `Dayjs`

Defined in: [formatDateTime/index.ts:122](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/formatDateTime/index.ts#L122)

A powerful date-time formatting utility that handles various input types and formatting patterns.

## Parameters

### date

`DateTimeInput`

Input date value, supports multiple formats:
  - Date object: new Date()
  - Timestamp: 1674633600000
  - ISO string: "2023-01-15T14:30:00"
  - dayjs object: dayjs()

### format

`string`

Desired output format:
  - Use DateTimeFormat enum for consistent formatting
  - Or provide custom format string

## Returns

`string` \| `Dayjs`

Formatted date string or dayjs object

## Description

This function formats a date or timestamp into a string using the specified format.
It supports various input types and formatting patterns.

## Example

```typescript
import { formatDateTime } from 'dt-utils';

// Standard date format
formatDateTime(new Date(), DateTimeFormat.STANDARD)  // "2024-03-21 15:30:45"

// Format from timestamp
formatDateTime(1674633600000, DateTimeFormat.DATE_TIME)  // "2023-01-25 10:00"

// Format with month name
formatDateTime("2023-01-15", DateTimeFormat.MONTH_NAME)  // "January"

// 12-hour time format
formatDateTime(new Date(), DateTimeFormat.TIME_12)  // "03:30:45 PM"

// Full weekday name
formatDateTime(new Date(), DateTimeFormat.WEEKDAY)  // "Thursday"

// Custom format
formatDateTime(new Date(), "dddd, MMMM D, YYYY")  // dayjs.Dayjs
```
