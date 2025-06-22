/**
 * A utility class for managing browser's localStorage with enhanced functionality
 *
 * @category Storage
 * @description
 * LocalDB provides a wrapper around the browser's localStorage API with additional features:
 * - Type-safe storage and retrieval of data
 * - Automatic JSON serialization/deserialization
 * - Batch operations support
 * - Selective clearing with exceptions
 *
 * @example
 * ```typescript
 * import { LocalDB } from 'dt-utils';
 *
 * // Store a single value
 * LocalDB.set('user', { id: 1, name: 'John' });
 *
 * // Store multiple values at once
 * LocalDB.set({
 *   theme: 'dark',
 *   language: 'en',
 *   settings: { notifications: true }
 * });
 *
 * // Retrieve stored data
 * const user = LocalDB.get('user'); // => { id: 1, name: 'John' }
 *
 * // Remove specific data
 * LocalDB.remove('user');
 *
 * // Clear all except specified keys
 * LocalDB.clear(['theme', 'language']);
 * ```
 */
class LocalDB {
    /**
     * Adds multiple items to localStorage
     * @param items - An object where keys are localStorage keys and values are the values to be stored
     */
    static set(items: Record<string, any>): void;
    /**
     * Stores data value by key in localStorage
     * @param {string} key - Unique identifier for the stored data
     * @param {any} value - The data to be stored, can be of any type
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
     * Retrieves data from localStorage by key
     * @param {string} key - Unique identifier for the data to be retrieved
     * @return {any} - Returns the stored data, which can be a string or an object
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
     * Deletes data from localStorage by key
     * @param {string} key - Unique identifier for the data to be deleted
     */
    static remove(key: string) {
        window.localStorage.removeItem(key);
    }

    /**
     * Clears the localStorage while optionally preserving specific keys.
     *
     * @
     *
     * @param {string[]} [except] - An optional array of keys to keep in localStorage.
     * If provided, only the keys not in this array will be removed.
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
