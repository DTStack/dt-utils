# Date 日期处理

## formatDateTime
 格式：`YYYY-MM-DD HH:mm:ss`

```js
  /**
   * @param {(string | number | Date)} timestap
   * @returns
   */
   Utils.formatDateTime (timestap: string | number | Date); 
```
eg:
```js
   Utils.formatDateTime(); 
```

## formatDate
 格式：`YYYY-MM-DD`

```js
  /**
   * @param {(string | number | Date)} timestap
   * @returns
   */
   Utils.formatDate (timestap: string | number | Date); 
```
eg:
```js
   Utils.formatDate(); 
```
## formatDateHours
 格式：`YYYY-MM-DD HH:mm`

```js
  /**
   * @param {(string | number | Date)} timestap
   * @returns
   */
   Utils.formatDateHours (timestap: string | number | Date); 
```
eg:
```js
   Utils.formatDateHours(); 
```
## formatDayHours
 格式：`MM-DD HH:mm`

```js
  /**
   * @param {(string | number | Date)} timestap
   * @returns
   */
   Utils.formatDayHours (timestap: string | number | Date); 
```
eg:
```js
   Utils.formatDayHours(); 
```
## formatHours
 格式：`HH:mm`

```js
  /**
   * @param {(string | number | Date)} timestap
   * @returns
   */
   Utils.formatHours (timestap: string | number | Date); 
```
eg:
```js
   Utils.formatHours(); 
```
## formatMinute
 格式：`HH:mm:ss`

```js
  /**
   * @param {(string | number | Date)} timestap
   * @returns
   */
   Utils.formatMinute (timestap: string | number | Date); 
```
eg:
```js
   Utils.formatMinute(); 
```

## formatTime
时间转换 3661s--->1小时1分钟1秒
```js
formatTime (value: number): string
```
eg:
```js
formatTime(36) // 36s
formatTime(360) // 6m
formatTime(3600) // 1h
```
