# Utils
导入
````js
  import { Utils } form 'dt-utils';
````
## pageWidth
获取页面宽度
```js
  Utils.pageWidth()
```
## pageHeight
获取页面高度
```js
  Utils.pageHeight()
```
## checkExist
检查属性是否存在
```js
  Utils.checkExist()
```
eg:
```js
  Utils.checkExist('') // false
  Utils.checkExist(null) // false
  Utils.checkExist(undefined) // false
```
## isMacOs
判断设备是否是Mac
```js
  Utils.isMacOs(); //boolean
```
## isWindows
判断设备是否是Windows
```js
  Utils.isWindows(); //boolean
```
## isMobileDevice
判断设备是否是移动设备
```js
  Utils.isMobileDevice(); //boolean
```
## browserCheck
浏览器类型和版本检测

`true`表示通过兼容性检测,`false`表示不通过兼容性检测

```js
  Utils.browserCheck(); //boolean 
```
## getParameterByName
根据参数名获取URL数据

```js
 /**
   * 获取图片的Base64格式
   *  @param  {[type]} name [description]
   * @param  {[type]} url  [description] 可选参数，默认当前域
   */
  Utils.getParameterByName(); //boolean 
```

eg:
```js
  Utils.getParameterByName('name','http://baidu.com?name='1'); // 1 
  Utils.getParameterByName('name'); // 1 
```
## getBase64
获取图片的Base64格式

```js
  /**
   * 获取图片的Base64格式
   * @param  {[type]}   img      [description]
   * @param  {Function} callback [description]
   */
  Utils.getBase64(img,callback); 
```
## percent
百分比转换

````js
   /**
   * @param  {[type]} num       [description]
   * @param  {[type]} precision [description]
   */
  Utils.percent(num: number, precision?: number); 
````
eg:

````js
 Utils.percent(1); // 100%
 Utils.percent(0.5); // 50%
 Utils.percent(0.54); // 54%
 Utils.percent(0.54321); // 54.32%
 Utils.percent(0.54321,1); // 54.3%
 Utils.percent(0.54321,2); // 54.32%
 Utils.percent(0.54321,3); // 54.321%
````
## getCssText
  样式对象转css style风格转字符串

````js
/**
 * @param {Record<string, any>} [object={}]
 * @returns String
 */
  Utils.getCssText(object: Record<string, any> = {}); 
````
eg:

````js
  let styles = {
    height:'100px',
    width:'100px',
    color:'red'
  }
  Utils.getCssText(styles); // 'height:100px;width:100px;color:red;'
````

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

## trim
去除空串

## trimlr
去除字符串两头空格

## removeAllSpaces
去除全部空串

## getCookie
原生 JavaScript 获取 cookie 值
```js
getCookie (name: string)
```

## deleteCookie
删除指定的Cookie值
```js
deleteCookie (name: string, domain?: string, path?: string)
```

## deleteAllCookies
删除所有Cookie值
```js
deleteAllCookies (domain: string, path: string)
```

## setCookie
创建Cookie值
```js
setCookie (name: string, value: string | number | object | boolean, days?: number)
```

## convertBytes
转换 Byte 转换为小于1024值最大单位
```js
convertBytes (value: number)
```

## formatTime
时间转换 3661s--->1小时1分钟1秒

## toQfw
千位分割

## textOverflowExchange
文字溢出转换
```js
textOverflowExchange (text: string, length: number)
```

## jsonFormat
json格式化

格式化内容: text

格式化占位符: space
```js
jsonFormat (text: string, space?: number)
```
## sortByCompareFunctions
多函数排序，匹配到0为止
```js
sortByCompareFunctions (arr: any[], ...compareFunctions: any[])
```
## exchangeOrder
转换排序字段
```js
exchangeOrder (order: string) {
    switch (order) {
        case 'ascend':
            return 'asc';
        case 'descend':
            return 'desc';
        default:
            return undefined;
    }
}
```
## generateAKey
生成一个随机key

## isJSONStr
判断是否是JSON string
```js
// str 所要验证的字符串
isJSONStr (str: string)
// return {Boolean} 是否是JSON字符串
```

## getRandomStr
随机生成一串len位同时包含数字、大小写字母的字符串
```js
getRandomStr (len: number): string
```

## isEqualArr
简单地判断数组是否相等
```js
isEqualArr (arr1: any[], arr2: any[]): boolean
```

## isEqual
简单地判断对象是否相等


## shouldRender

## appInfo
输出应用版本以及运维信息

## mock
数据Mock
```js
// param {Object} params
mock (params: any)
```
