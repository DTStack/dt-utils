/**
 * 从给定的搜索字符串中解析查询参数。
 *
 * @category Utils
 * @description
 * 从 URL 搜索字符串中提取并解析查询参数到一个类型化对象中。
 * 处理特殊字符串值：
 * - 'null' 会被转换为 null
 * - 'undefined' 会被转换为 undefined
 * - 可以被 JSON 解析的字符串会被自动解析（例如数字、布尔值）
 * - 其他值保持字符串形式
 *
 * @param {string} search - 搜索字符串（例如 location.search）。
 * @returns {Record<string, string | null | undefined>} - 包含查询参数的对象。
 *
 * @example
 * ```typescript
 * import { getQueryParameters } from 'dt-utils';
 *
 * // 基本用法
 * const search = '?name=john&age=25';
 * getQueryParameters(search); // => { name: "john", age: 25 }
 *
 * // 处理特殊值
 * const search = '?isActive=true&count=null&status=undefined';
 * getQueryParameters(search); // => { isActive: true, count: null, status: undefined }
 *
 * // 类型推断
 * interface QueryParams {
 *   page: string;
 *   limit: number;
 * }
 * const params = getQueryParameters<QueryParams>('?page=home&limit=10');
 * // params.page 是字符串类型, params.limit 是数字类型
 * ```
 */
const getQueryParameters = <T extends Record<string, string | null | undefined>>(
    search: string
): T => {
    if (!search) return {} as T;

    const searchParams = new URLSearchParams(search);
    const paramValue = {};

    searchParams.forEach((value, key) => {
        if (value === 'null') {
            paramValue[key] = null;
        } else if (value === 'undefined') {
            paramValue[key] = undefined;
        } else {
            try {
                paramValue[key] = JSON.parse(value);
            } catch (error) {
                paramValue[key] = value;
            }
        }
    });

    return paramValue as T;
};

export default getQueryParameters;
