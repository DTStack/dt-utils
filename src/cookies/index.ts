import JSCookies from 'js-cookie';

import getTypeOfValue from '../getTypeOfValue';

const DEFAULT_OPTIONS = {
    path: '/',
};

/**
 * 统一封装的 Cookie 操作工具集。
 *
 * @category Storage
 * @description
 * 基于 js-cookie 封装的浏览器 Cookie 操作工具，提供统一的默认配置和便捷方法。
 * 所有操作默认携带根路径，统一管理 Cookie 的读写与删除逻辑，简化项目中 Cookie 的使用。
 *
 * @Methods
 * | 方法名 | 描述 | 参数 | 返回值 | 使用方式 |
 * |------|------|------|--------|--------|
 * | `get` | 读取指定名称的 Cookie 值；不传名称时返回所有 Cookie | `name?: string` - Cookie 名称 | `string \| undefined \| Record<string, string>` | `Cookies.get('username')` |
 * | `set` | 设置 Cookie，并自动合并默认配置 | `name: string` - Cookie 名称 <br> `value: string` - Cookie 值 <br> `options?: JSCookies.CookieAttributes` - 可选配置 | `void` | `Cookies.set('username', 'john', { expires: 7 })` |
 * | `remove` | 删除指定名称的 Cookie，并自动合并默认配置 | `name: string \| string[]` - Cookie 名称 <br> `options?: JSCookies.CookieAttributes` - 可选配置 | `void` | `Cookies.remove('username')` |
 * | `clear` | 清除 Cookie，可以选择性保留特定键 | `except?: string[]` - 可选的要保留的键数组 | `void` | `Cookies.clear(['username'])` |
 *
 * @example
 * ```typescript
 * import Cookies from './cookies';
 *
 * // 读取所有 Cookie
 * const allCookies = Cookies.get();
 *
 * // 读取指定 Cookie
 * const username = Cookies.get('username');
 *
 * // 设置 Cookie
 * Cookies.set('username', 'john', { expires: 7 });
 *
 * // 读取 Cookie
 * const username = Cookies.get('username');
 *
 * // 删除单个 Cookie
 * Cookies.remove('username');
 *
 * // 批量删除 Cookie
 * Cookies.remove(['username', 'permission']);
 *
 * // 清除除 username 外的所有 Cookie
 * Cookies.clear(['username'], { path: '/' });
 * ```
 */
class Cookies {
    /**
     * @hidden
     */
    constructor() {}
    /**
     * @hidden
     * 读取所有 Cookie
     */
    static get(): Record<string, string>;
    /**
     * @hidden
     * 读取指定名称的 Cookie 值
     * @param {string} name - Cookie 名称
     */
    static get(name: string): string | undefined;
    static get(name?: string): Record<string, string> | string | undefined {
        return name ? JSCookies.get(name) : JSCookies.get();
    }

    /**
     * @hidden
     * 设置 Cookie，并合并默认根路径配置。
     */
    static set(name: string, value: string, options?: JSCookies.CookieAttributes) {
        JSCookies.set(name, value, {
            ...DEFAULT_OPTIONS,
            ...options,
        });
    }

    /**
     * @hidden
     * 删除指定名称的 Cookie，并合并默认根路径配置。
     */
    static remove(name: string | string[], options?: JSCookies.CookieAttributes) {
        if (typeof name === 'string') {
            JSCookies.remove(name, {
                ...DEFAULT_OPTIONS,
                ...options,
            });
        } else if (getTypeOfValue(name) === 'array') {
            name.forEach((k) =>
                JSCookies.remove(k, {
                    ...DEFAULT_OPTIONS,
                    ...options,
                })
            );
        }
    }

    /**
     * @hidden
     * 清除 Cookie，同时可以选择性保留特定的键。
     */
    static clear(except?: string[], options?: JSCookies.CookieAttributes) {
        const cookies = Cookies.get();

        const keysToRemove = Object.keys(cookies).filter((key) => !except?.includes(key));

        keysToRemove.forEach((key) => Cookies.remove(key, options));
    }
}

export default Cookies;
