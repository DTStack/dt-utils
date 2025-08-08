/**
 * 以小写字符串形式返回值的类型。
 *
 * @category Utils
 * @description
 * 用于确定 JavaScript 值的精确类型，返回该值类型的小写字符串表示。
 *
 * @param {*} value - 需要检查类型的值
 * @returns {string} 小写的类型字符串
 *
 * @example
 * ```typescript
 * import { getTypeOfValue } from 'dt-utils';
 *
 * // 基本类型
 * getTypeOfValue(42);           // => 'number'
 * getTypeOfValue('hello');      // => 'string'
 * getTypeOfValue(true);         // => 'boolean'
 * getTypeOfValue(undefined);    // => 'undefined'
 * getTypeOfValue(null);         // => 'null'
 *
 * // 复杂类型
 * getTypeOfValue([1, 2, 3]);    // => 'array'
 * getTypeOfValue({});           // => 'object'
 * getTypeOfValue(() => {});     // => 'function'
 *
 * // 内置对象
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
