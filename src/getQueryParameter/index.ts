import getQueryParameters from '../getQueryParameters';

/**
 * 从给定的 URL 中获取指定查询参数的值。
 *
 * @category Utils
 * @description
 * 解析目标 URL 的查询字符串，提取并转换指定名称的查询参数值。
 * 支持处理特殊字符串值：
 * - 'null' 会被转换为 null
 * - 'undefined' 会被转换为 undefined
 * - 可以被 JSON 解析的字符串会被自动解析（例如数字、布尔值）
 * - 其他值保持字符串形式
 *
 * @param {string} name - 要获取的查询参数名
 * @param {string} [url] - 目标 URL，若未提供则使用当前页面的 window.location.href
 * @returns {string | number | boolean | undefined | null} - 解析后的查询参数值
 *
 * @example
 * ```typescript
 * import getQueryParameter from 'dt-utils';
 *
 * // 基本用法
 * getQueryParameter('name', 'https://example.com?name=john&age=25'); // => "john"
 *
 * // 处理特殊值
 * getQueryParameter('isActive', 'https://example.com?isActive=true&count=null'); // => true
 * getQueryParameter('count', 'https://example.com?isActive=true&count=null'); // => null
 *
 * // 不传入 url 时使用当前页面 URL
 * // 若当前页面 URL 为 https://current.com?page=home&limit=10
 * getQueryParameter('limit'); // => 10
 *
 * // 从 hash 片段解析参数
 * getQueryParameter('page', 'https://example.com/#/hash?page=home&limit=10'); // => "home"
 * ```
 */
const getQueryParameter = (name: string, url?: string) => {
    try {
        const targetUrl = url || window.location.href;
        const parsedUrl = new URL(targetUrl);
        let params = getQueryParameters(parsedUrl.search);

        if (parsedUrl.hash.includes('?')) {
            const hashSearch = parsedUrl.hash.slice(parsedUrl.hash.indexOf('?') + 1);
            const hashParams = getQueryParameters(hashSearch);

            params = { ...hashParams, ...params };
        }

        return params[name];
    } catch (error: unknown) {
        console.error(
            'Error parsing query parameter:',
            error instanceof Error ? error.message : error
        );
        return undefined;
    }
};
export default getQueryParameter;
