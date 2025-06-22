import getTypeOfValue from '../getTypeOfValue';

/**
 *  A utility class for managing browser's session storage with type-safe methods
 *
 * @category Storage
 * @description
 * SessionDB provides a convenient interface for interacting with the browser's sessionStorage API.
 * It supports storing and retrieving various data types, including objects and arrays, with automatic
 * JSON serialization/deserialization.
 *
 * @example
 * ```typescript
 * import { SessionDB } from 'dt-utils';
 *
 * // Store a simple value
 * SessionDB.set('username', 'john_doe');
 *
 * // Store an object
 * SessionDB.set('userProfile', {
 *   id: 123,
 *   name: 'John Doe',
 *   preferences: { theme: 'dark' }
 * });
 *
 * // Store multiple items at once
 * SessionDB.set({
 *   token: 'abc123',
 *   lastLogin: new Date().toISOString()
 * });
 *
 * // Retrieve stored data
 * const username = SessionDB.get('username'); // => 'john_doe'
 * const profile = SessionDB.get('userProfile'); // => { id: 123, ... }
 *
 * // Remove specific items
 * SessionDB.remove('username');
 * SessionDB.remove(['token', 'lastLogin']); // Remove multiple items
 *
 * // Clear all items except specified keys
 * SessionDB.clear(['userProfile']); // Keeps only userProfile
 * ```
 */
class SessionDB {
    /**
     * Adds multiple items to sessionStorage
     * @param {Record<string, any>} items - An object where keys are sessionStorage keys and values are the values to be stored
     */
    static set(items: Record<string, any>): void;
    /**
     * Stores data value by key in sessionStorage
     * @param {string} key - Unique identifier for the stored data
     * @param {any} value - The data to be stored, can be of any type
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
     * Retrieves data from sessionStorage by key
     * @param {string} key - Unique identifier for the data to be retrieved
     * @return {any} - Returns the stored data, which can be a string or an object
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
     * Deletes data from sessionStorage by key
     * @param {string} key - Unique identifier for the data to be deleted
     */
    static remove(key: string | string[]) {
        if (typeof key === 'string') {
            window.sessionStorage.removeItem(key);
        } else if (getTypeOfValue(key) === 'array') {
            key.forEach((k) => SessionDB.remove(k));
        }
    }

    /**
     * Clears the sessionStorage while optionally preserving specific keys.
     *
     * @param {string[]} [except] - An optional array of keys to keep in sessionStorage.
     * If provided, only the keys not in this array will be removed.
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
