/**
 * 一个用于管理浏览器 localStorage 的增强功能工具类
 *
 * @category Storage
 * @description
 * LocalDB 为浏览器的 localStorage API 提供了一个包装器，具有以下附加功能：
 * - 类型安全的数据存储和检索
 * - 自动 JSON 序列化/反序列化
 * - 批量操作支持
 * - 可选择性清除带例外项
 *
 * @Methods
 * | 方法名 | 描述 | 参数 | 返回值 |
 * |------|------|------|--------|
 * | `set(items: Record<string, any>)` | 向 localStorage 添加多个项目 | `items: Record<string, any>` - 键值对对象 | `void` |
 * | `set(key: string, value: any)` | 通过键名在 localStorage 中存储单个数据值（如果 value 为 null/undefined，则删除该键） | `key: string` - 存储的唯一标识符 <br> `value: any` - 要存储的数据 | `void` |
 * | `get` | 通过键名从 localStorage 中获取数据 | `key: string` - 要获取数据的唯一标识符 | `any`（可能是对象或字符串，找不到返回 null） |
 * | `remove` | 通过键名从 localStorage 中删除数据 | `key: string` - 要删除数据的唯一标识符 | `void` |
 * | `clear` | 清除 localStorage，可以选择性保留特定键 | `except?: string[]` - 可选的要保留的键数组 | `void` |
 *
 * @example
 * ```typescript
 * import { LocalDB } from 'dt-utils';
 *
 * // 存储单个值
 * LocalDB.set('user', { id: 1, name: 'John' });
 *
 * // 一次存储多个值
 * LocalDB.set({
 *   theme: 'dark',
 *   language: 'en',
 *   settings: { notifications: true }
 * });
 *
 * // 检索存储的数据
 * const user = LocalDB.get('user'); // => { id: 1, name: 'John' }
 *
 * // 删除特定数据
 * LocalDB.remove('user');
 *
 * // 清除除指定键外的所有数据
 * LocalDB.clear(['theme', 'language']);
 * ```
 */
class LocalDB {
    /**
     * @hidden
     */
    constructor() {}
    /**
     * @hidden
     * 向 localStorage 添加多个项目
     * @param items - 一个对象，其中键是 localStorage 的键名，值是要存储的数据
     */
    static set(items: Record<string, any>): void;
    /**
     * @hidden
     * 通过键名在 localStorage 中存储数据值
     * @param {string} key - 存储数据的唯一标识符
     * @param {any} value - 要存储的数据，可以是任何类型
     */
    static set(key: string, value: any): void;
    static set(...args: any[]) {
        if (typeof args[0] === 'string') {
            const [key, value] = args;
            if (value === null || value === undefined) {
                LocalDB.remove(key);
            } else {
                const data = typeof value === 'object' ? JSON.stringify(value) : value;
                window.localStorage.setItem(key, data);
            }
        } else {
            for (const [key, value] of Object.entries(args[0])) {
                LocalDB.set(key, value);
            }
        }
    }
    /**
     * @hidden
     * 通过键名从 localStorage 中获取数据
     * @param {string} key - 要获取数据的唯一标识符
     * @return {any} - 返回存储的数据，可以是字符串或对象
     */
    static get(key: string) {
        const str = window.localStorage.getItem(key);

        if (str === null) return null;
        try {
            return JSON.parse(str);
        } catch (error) {
            return str;
        }
    }

    /**
     * @hidden
     * 通过键名从 localStorage 中删除数据
     * @param {string} key - 要删除数据的唯一标识符
     */
    static remove(key: string) {
        window.localStorage.removeItem(key);
    }

    /**
     * @hidden
     * 清除 localStorage，同时可以选择性地保留特定的键
     *
     * @param {string[]} [except] - 可选的要在 localStorage 中保留的键名数组。
     * 如果提供了这个参数，只有不在这个数组中的键会被删除。
     */
    static clear(except?: string[]) {
        if (except?.length) {
            const keysToRemove = Object.keys(localStorage).filter((key) => !except.includes(key));
            keysToRemove.forEach((key) => LocalDB.remove(key));
        } else {
            window.localStorage.clear();
        }
    }
}

export default LocalDB;
