[dt-utils](../globals.md) / DateTimeFormat

# Enumeration: DateTimeFormat

Defined in: [formatDateTime/index.ts:8](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L8)

日期和时间格式模式的枚举
提供标准化的格式标记以实现一致的日期/时间格式化

## Enumeration Members

### DATE

> **DATE**: `"YYYY-MM-DD"`

Defined in: [formatDateTime/index.ts:65](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L65)

仅日期格式 (例如 2024-03-21)

***

### DATE\_TIME

> **DATE\_TIME**: `"YYYY-MM-DD HH:mm"`

Defined in: [formatDateTime/index.ts:71](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L71)

带24小时制时间的日期 (例如 2024-03-21 15:30)

***

### DATE\_TIME\_12

> **DATE\_TIME\_12**: `"YYYY-MM-DD hh:mm A"`

Defined in: [formatDateTime/index.ts:73](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L73)

带12小时制时间和午前/午后的日期 (例如 2024-03-21 03:30 PM)

***

### DAY

> **DAY**: `"DD"`

Defined in: [formatDateTime/index.ts:27](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L27)

表示带前导零的月份中的日期 (01-31)

***

### DAY\_SHORT

> **DAY\_SHORT**: `"D"`

Defined in: [formatDateTime/index.ts:29](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L29)

表示不带前导零的月份中的日期 (1-31)

***

### FULL\_DATETIME\_ISO

> **FULL\_DATETIME\_ISO**: `"YYYY-MM-DDTHH:mm:ssZ"`

Defined in: [formatDateTime/index.ts:75](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L75)

完整的ISO日期时间格式 (例如 2024-03-21T15:30:45+0700)

***

### HOUR

> **HOUR**: `"HH"`

Defined in: [formatDateTime/index.ts:37](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L37)

表示24小时制带前导零的小时 (00-23)

***

### HOUR\_12

> **HOUR\_12**: `"hh"`

Defined in: [formatDateTime/index.ts:41](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L41)

表示12小时制带前导零的小时 (01-12)

***

### HOUR\_12\_SHORT

> **HOUR\_12\_SHORT**: `"h"`

Defined in: [formatDateTime/index.ts:43](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L43)

表示12小时制不带前导零的小时 (1-12)

***

### HOUR\_SHORT

> **HOUR\_SHORT**: `"H"`

Defined in: [formatDateTime/index.ts:39](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L39)

表示24小时制不带前导零的小时 (0-23)

***

### ISO

> **ISO**: `"YYYY-MM-DDTHH:mm:ssZ"`

Defined in: [formatDateTime/index.ts:63](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L63)

ISO 8601兼容格式 (例如 2024-03-21T15:30:45+0700)

***

### MINUTE

> **MINUTE**: `"mm"`

Defined in: [formatDateTime/index.ts:45](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L45)

表示带前导零的分钟 (00-59)

***

### MINUTE\_SHORT

> **MINUTE\_SHORT**: `"m"`

Defined in: [formatDateTime/index.ts:47](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L47)

表示不带前导零的分钟 (0-59)

***

### MONTH

> **MONTH**: `"MM"`

Defined in: [formatDateTime/index.ts:17](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L17)

表示带前导零的月份 (01-12)

***

### MONTH\_NAME

> **MONTH\_NAME**: `"MMMM"`

Defined in: [formatDateTime/index.ts:21](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L21)

表示完整月份名称 (例如 January)

***

### MONTH\_NAME\_SHORT

> **MONTH\_NAME\_SHORT**: `"MMM"`

Defined in: [formatDateTime/index.ts:23](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L23)

表示缩写月份名称 (例如 Jan)

***

### MONTH\_SHORT

> **MONTH\_SHORT**: `"M"`

Defined in: [formatDateTime/index.ts:19](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L19)

表示不带前导零的月份 (1-12)

***

### SECOND

> **SECOND**: `"ss"`

Defined in: [formatDateTime/index.ts:49](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L49)

表示带前导零的秒数 (00-59)

***

### SECOND\_SHORT

> **SECOND\_SHORT**: `"s"`

Defined in: [formatDateTime/index.ts:51](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L51)

表示不带前导零的秒数 (0-59)

***

### STANDARD

> **STANDARD**: `"YYYY-MM-DD HH:mm:ss"`

Defined in: [formatDateTime/index.ts:61](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L61)

标准日期时间格式 (例如 2024-03-21 15:30:45)

***

### TIME

> **TIME**: `"HH:mm:ss"`

Defined in: [formatDateTime/index.ts:67](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L67)

24小时制时间格式 (例如 15:30:45)

***

### TIME\_12

> **TIME\_12**: `"hh:mm:ss A"`

Defined in: [formatDateTime/index.ts:69](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L69)

带午前/午后的12小时制时间格式 (例如 03:30:45 PM)

***

### TIMEZONE

> **TIMEZONE**: `"Z"`

Defined in: [formatDateTime/index.ts:55](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L55)

表示时区偏移 (例如 +07:00)

***

### TIMEZONE\_ISO

> **TIMEZONE\_ISO**: `"ZZ"`

Defined in: [formatDateTime/index.ts:57](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L57)

表示ISO格式的时区偏移 (例如 +0700)

***

### WEEKDAY

> **WEEKDAY**: `"dddd"`

Defined in: [formatDateTime/index.ts:31](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L31)

表示完整星期几名称 (例如 Monday)

***

### WEEKDAY\_SHORT

> **WEEKDAY\_SHORT**: `"ddd"`

Defined in: [formatDateTime/index.ts:33](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L33)

表示缩写星期几名称 (例如 Mon)

***

### YEAR

> **YEAR**: `"YYYY"`

Defined in: [formatDateTime/index.ts:11](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L11)

表示4位数年份 (例如 2024)

***

### YEAR\_SHORT

> **YEAR\_SHORT**: `"YY"`

Defined in: [formatDateTime/index.ts:13](https://github.com/DTStack/dt-utils/blob/master/src/formatDateTime/index.ts#L13)

表示2位数年份 (例如 24)
