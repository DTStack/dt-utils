# 操作Cookie
````js
  import { Cookie } from '@dtinsight/dt-utils'
````
## getCookie
原生 JavaScript 获取 cookie 值，根据传入参数制定
```js
Cookie.getCookie (name: string)
```

## deleteCookie
删除指定的Cookie值
```js
Cookie.deleteCookie (name: string, domain?: string, path?: string)
```

## deleteAllCookies
删除所有Cookie值
```js
Cookie.deleteAllCookies (domain: string, path: string)
```

## setCookie
创建Cookie值
```js
Cookie.setCookie (name: string, value: string | number | object | boolean, days?: number)
```
