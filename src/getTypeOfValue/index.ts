/**
 * Returns the type of a value as a lowercase string.
 *
 * @category Utils
 * @description
 * A utility function that determines the precise type of any JavaScript value.
 * Returns the lowercase string representation of the value's type.
 *
 * @param {*} value - The value to check the type of
 * @returns {string} The lowercase type string
 *
 * @example
 * ```typescript
 * import { getTypeOfValue } from 'dt-utils';
 *
 * // Basic types
 * getTypeOfValue(42);           // => 'number'
 * getTypeOfValue('hello');      // => 'string'
 * getTypeOfValue(true);         // => 'boolean'
 * getTypeOfValue(undefined);    // => 'undefined'
 * getTypeOfValue(null);         // => 'null'
 *
 * // Complex types
 * getTypeOfValue([1, 2, 3]);    // => 'array'
 * getTypeOfValue({});           // => 'object'
 * getTypeOfValue(() => {});     // => 'function'
 *
 * // Built-in objects
 * getTypeOfValue(new Date());   // => 'date'
 * getTypeOfValue(/regex/);      // => 'regexp'
 * getTypeOfValue(new Error());  // => 'error'
 * getTypeOfValue(Symbol());     // => 'symbol'
 * getTypeOfValue(new Map());    // => 'map'
 * getTypeOfValue(new Set());    // => 'set'
 * ```
 */
const getTypeOfValue = (value: any) => {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
};

export default getTypeOfValue;
