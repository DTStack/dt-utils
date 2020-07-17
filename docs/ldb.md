# localDb

导入
````js
  import { LocalDB } form 'dt-utils';
````
功能

封装localStorage，增加对JSON对象的转换，方法声明localDb对象定义相关方法

## set
按key存贮数据value到localStorage

### 参数
(key, value)
存贮数据的唯一标识，所要存贮的数据
### 返回值
无
### eg：
```js
set (key: string|number, value: any) {
    if (!value) delete window.localStorage[key]
    else {
        const val = typeof value === 'object'
            ? JSON.stringify(value) : value
        window.localStorage[key] = val
    }
}
```
## get
通过key从localStorage获取数据

### 参数
key：获取数据的可以标识
### 返回值
返回空，字符串或者对象
## clear
清空localStorage
### 参数
无
### 返回值
无
````js
  LocalDB.clear()
````

## isJSONStr
判断是否是JSON string

### 参数
str：所要验证的字符串
### 返回值
{Boolean}是否是JSON字符串
### eg：
```js
isJSONStr (str: string) {
    return (
        (str.charAt(0) === '{' && str.charAt(str.length - 1) === '}') ||
        (str.charAt(0) === '[' && str.charAt(str.length - 1) === ']')
    )
}
```
