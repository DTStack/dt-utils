import getTypeOfValue from '../getTypeOfValue';
/**
 * 一个用于管理浏览器 Session 存储的工具类，提供类型安全的方法
 *
 * @category Storage
 * @description
 * SessionDB 为浏览器的 sessionStorage API 提供了一个包装器，具有以下附加功能：
 * - 类型安全的数据存储和检索
 * - 自动 JSON 序列化/反序列化
 * - 批量操作支持
 * - 可选择性清除带例外项
 *
 * @example
 * ```typescript
 * import { SessionDB } from 'dt-utils';
 *
 * // 存储简单值
 * SessionDB.set('username', 'john_doe');
 *
 * // 存储对象
 * SessionDB.set('userProfile', {
 *   id: 123,
 *   name: 'John Doe',
 *   preferences: { theme: 'dark' }
 * });
 *
 * // 一次存储多个项目
 * SessionDB.set({
 *   token: 'abc123',
 *   lastLogin: new Date().toISOString()
 * });
 *
 * // 检索存储的数据
 * const username = SessionDB.get('username'); // => 'john_doe'
 * const profile = SessionDB.get('userProfile'); // => { id: 123, ... }
 *
 * // 删除特定项目
 * SessionDB.remove('username');
 * SessionDB.remove(['token', 'lastLogin']); // 删除多个项目
 *
 * // 清除所有项目，除了指定的键
 * SessionDB.clear(['userProfile']); // 只保留 userProfile
 * ```
 */
class SessionDB {
    /**
     * 向 sessionStorage 添加多个项目
     * @param {Record<string, any>} items - 一个对象，其中键是 sessionStorage 的键，值是要存储的值
     */
    static set(items: Record<string, any>): void;
    /**
     * 通过键在 sessionStorage 中存储数据值
     * @param {string} key - 存储数据的唯一标识符
     * @param {any} value - 要存储的数据，可以是任何类型
     */
    static set(key: string, value: any): void;
    static set(...args: any[]) {
        if (typeof args[0] === 'string') {
            const [key, value] = args;
            if (value === null || value === undefined) {
                SessionDB.remove(key);
            } else {
                const data = typeof value === 'object' ? JSON.stringify(value) : value;
                window.sessionStorage.setItem(key, data);
            }
        } else if (getTypeOfValue(args[0]) === 'object') {
            for (const [key, value] of Object.entries(args[0])) {
                SessionDB.set(key, value);
            }
        }
    }

    /**
     * 通过键从 sessionStorage 检索数据
     * @param {string} key - 要检索的数据的唯一标识符
     * @return {any} - 返回存储的数据，可以是字符串或对象
     */
    static get(key: string) {
        const str = window.sessionStorage.getItem(key);

        if (str === null) return null;
        try {
            return JSON.parse(str);
        } catch (error) {
            return str;
        }
    }

    /**
     * 通过键从 sessionStorage 删除数据
     * @param {string} key - 要删除的数据的唯一标识符
     */
    static remove(key: string | string[]) {
        if (typeof key === 'string') {
            window.sessionStorage.removeItem(key);
        } else if (getTypeOfValue(key) === 'array') {
            key.forEach((k) => SessionDB.remove(k));
        }
    }

    /**
     * 清除 sessionStorage，同时可以选择性地保留特定的键。
     *
     * @param {string[]} [except] - 要在 sessionStorage 中保留的键的可选数组。
     * 如果提供了该参数，只有不在此数组中的键会被删除。
     */
    static clear(except?: string[]) {
        if (except?.length) {
            const keysToRemove = Object.keys(sessionStorage).filter((key) => !except.includes(key));
            keysToRemove.forEach((key) => SessionDB.remove(key));
        } else {
            window.sessionStorage.clear();
        }
    }
}
export default SessionDB;
