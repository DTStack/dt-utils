[dt-utils](../globals.md) / Cookies

# Class: Cookies

Defined in: [cookies/index.ts:51](https://github.com/DTStack/dt-utils/blob/master/src/cookies/index.ts#L51)

统一封装的 Cookie 操作工具集。

## Description

基于 js-cookie 封装的浏览器 Cookie 操作工具，提供统一的默认配置和便捷方法。
所有操作默认携带根路径，统一管理 Cookie 的读写与删除逻辑，简化项目中 Cookie 的使用。

## Methods

| 方法名 | 描述 | 参数 | 返回值 | 使用方式 |
|------|------|------|--------|--------|
| `get` | 读取指定名称的 Cookie 值；不传名称时返回所有 Cookie | `name?: string` - Cookie 名称 | `string \| undefined \| Record<string, string>` | `Cookies.get('username')` |
| `set` | 设置 Cookie，并自动合并默认配置 | `name: string` - Cookie 名称 <br> `value: string` - Cookie 值 <br> `options?: JSCookies.CookieAttributes` - 可选配置 | `void` | `Cookies.set('username', 'john', { expires: 7 })` |
| `remove` | 删除指定名称的 Cookie，并自动合并默认配置 | `name: string \| string[]` - Cookie 名称 <br> `options?: JSCookies.CookieAttributes` - 可选配置 | `void` | `Cookies.remove('username')` |
| `clear` | 清除 Cookie，可以选择性保留特定键 | `except?: string[]` - 可选的要保留的键数组 | `void` | `Cookies.clear(['username'])` |

## Example

```typescript
import Cookies from './cookies';

// 读取所有 Cookie
const allCookies = Cookies.get();

// 读取指定 Cookie
const username = Cookies.get('username');

// 设置 Cookie
Cookies.set('username', 'john', { expires: 7 });

// 读取 Cookie
const username = Cookies.get('username');

// 删除单个 Cookie
Cookies.remove('username');

// 批量删除 Cookie
Cookies.remove(['username', 'permission']);

// 清除除 username 外的所有 Cookie
Cookies.clear(['username'], { path: '/' });
```
