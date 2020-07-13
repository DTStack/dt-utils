const { toString } = Object.prototype;

/**
 * 获取值的类型标签
 * @param value - 任意值
 * @returns [object Xxxx]
 *
 * @public
 * @author Simon
 */
export function getTag (value: any): string {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
}

/**
 * 判断是否是数值类型
 * @param value - 任意值
 * @returns true / false
 * @example
 * ```ts
 * isNumber(2) // => true
 * ```
 *
 * @public
 * @author Simon
 */
export function isNumber (value: any): boolean {
    return getTag(value) === '[object Number]';
}

/**
 * 判断是否是字符串类型
 * @param value - 任意值
 * @returns true / false
 * @example
 * ```ts
 * isString('abc') // => true
 * ```
 *
 * @public
 * @author Simon
 */
export function isString (value: any): boolean {
    return getTag(value) === '[object String]';
}
