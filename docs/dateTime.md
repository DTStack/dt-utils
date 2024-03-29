# DateTime

导入

```js
import { DateTime } from "@dtinsight/dt-utils";
```

## formatDateTime

返回 `YYYY-MM-DD HH:mm:ss` 格式化的字符串

```js
DateTime.formatDateTime(1627457470000);
```

## formatDate

返回 `YYYY-MM-DD` 格式化的字符串

```js
DateTime.formatDate(1627457470000);
```

## formatDateHours

返回 `YYYY-MM-DD HH:mm` 格式化的字符串

```js
DateTime.formatDateHours(1627457470000);
```

## formatDayHours

返回 `MM-DD HH:mm` 格式化的字符串

```js
DateTime.formatDayHours(1627457470000);
```

## formatHours

返回 `HH:mm` 格式化的字符串

```js
DateTime.formatHours(1627457470000);
```

## formatMinute

返回 `HH:mm:ss` 格式化的字符串

```js
DateTime.formatMinute(1627457470000);
```

## formatSecond

把秒数转换成 3h5m11s 的格式

```js
DateTime.formatSecond(11111); // 3h5m11s
DateTime.formatSecond(111); // 1m51s
DateTime.formatSecond(11); // 11s
```