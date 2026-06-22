[dt-utils](../globals.md) / formatDateTime

# Function: formatDateTime()

一个日期时间格式化工具，可处理各种输入类型和格式化模式。

## Example

```typescript
import { formatDateTime, DateTimeFormat } from 'dt-utils';

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

// 自定义格式返回dayjs对象
const dt = formatDateTime(new Date(), "dddd, MMMM D, YYYY");
console.log(dt.format('YYYY-MM-DD'));  // 可进行链式操作
```

## Call Signature

> **formatDateTime**(`date`, `format?`): `string`

Defined in: [formatDateTime/index.ts:95](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L95)

将日期时间格式化为指定格式的字符串。

### Parameters

#### date

`DateTimeInput`

输入日期值，支持多种格式：
  - Date对象: new Date()
  - 时间戳: 1674633600000
  - ISO字符串: "2023-01-15T14:30:00"
  - dayjs对象: dayjs()

#### format?

使用DateTimeFormat枚举以保持一致的格式化

`"s"` | `"YYYY"` | `"YY"` | `"MM"` | `"M"` | `"MMMM"` | `"MMM"` | `"DD"` | `"D"` | `"dddd"` | `"ddd"` | `"HH"` | `"H"` | `"hh"` | `"h"` | `"mm"` | `"m"` | `"ss"` | `"Z"` | `"ZZ"` | `"YYYY-MM-DD HH:mm:ss"` | `"YYYY-MM-DDTHH:mm:ssZ"` | `"YYYY-MM-DD"` | `"HH:mm:ss"` | `"hh:mm:ss A"` | `"YYYY-MM-DD HH:mm"` | `"YYYY-MM-DD hh:mm A"`

### Returns

`string`

格式化后的日期字符串

## Call Signature

> **formatDateTime**(`date`, `format?`): `Dayjs`

Defined in: [formatDateTime/index.ts:108](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L108)

将日期时间转换为dayjs对象，用于自定义格式处理。

### Parameters

#### date

`DateTimeInput`

输入日期值，支持多种格式：
  - Date对象: new Date()
  - 时间戳: 1674633600000
  - ISO字符串: "2023-01-15T14:30:00"
  - dayjs对象: dayjs()

#### format?

`string`

自定义格式字符串（非DateTimeFormat枚举值）

### Returns

`Dayjs`

dayjs实例对象，可进行链式操作
