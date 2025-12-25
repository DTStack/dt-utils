[dt-utils](../globals.md) / formatDateTime

# Function: formatDateTime()

> **formatDateTime**(`date`, `format`): `string` \| `Dayjs`

Defined in: [formatDateTime/index.ts:120](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L120)

一个日期时间格式化工具，可处理各种输入类型和格式化模式。

## Parameters

### date

`DateTimeInput`

输入日期值，支持多种格式：
  - Date对象: new Date()
  - 时间戳: 1674633600000
  - ISO字符串: "2023-01-15T14:30:00"
  - dayjs对象: dayjs()

### format

`string` = `DateTimeFormat.STANDARD`

期望的输出格式：
  - 使用DateTimeFormat枚举以保持一致的格式化
  - 或提供自定义格式字符串

## Returns

`string` \| `Dayjs`

格式化后的日期字符串或 dayjs 实例对象

## Description

将日期或时间戳格式化为指定格式的字符串。
支持多种输入类型和格式化模式。

## Example

```typescript
import { formatDateTime } from 'dt-utils';

// 标准日期格式
formatDateTime(new Date(), DateTimeFormat.STANDARD)  // "2024-03-21 15:30:45"

// 从时间戳格式化
formatDateTime(1674633600000, DateTimeFormat.DATE_TIME)  // "2023-01-25 10:00"

// 格式化月份名称
formatDateTime("2023-01-15", DateTimeFormat.MONTH_NAME)  // "January"

// 12小时制时间格式
formatDateTime(new Date(), DateTimeFormat.TIME_12)  // "03:30:45 PM"

// 完整星期几名称
formatDateTime(new Date(), DateTimeFormat.WEEKDAY)  // "Thursday"

// 自定义格式
formatDateTime(new Date(), "dddd, MMMM D, YYYY")  // dayjs.Dayjs
```
