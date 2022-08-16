# LocalDB

导入
````js
  import { LocalDB } from '@dtinsight/dt-utils';
````
功能

封装 localStorage，增加对 JSON 对象的转换，方法声明 LocalDB 对象定义相关方法

## set
按 key 存贮数据 value 到 localStorage

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
通过 key 从 localStorage 获取数据

### 参数
key：获取数据的唯一标识
### 返回值
返回空，字符串或者对象

## remove
通过 key 从 localStorage 删除数据

### 参数
key：删除数据的唯一标识

## clear
清空 localStorage
### 参数
无
### 返回值
无
````js
  LocalDB.clear()
````
