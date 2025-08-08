import getTypeOfValue from '../getTypeOfValue';

type QueryValue = string | number | boolean | null | undefined;
type QueryParams = Record<string, QueryValue>;

/**
 * 生成带查询参数的 URL
 *
 * @category Utils
 * @description
 * 将基础 URL 路径与查询参数组合，
 * 生成一个完整的 URL 字符串。它会自动处理参数编码并移除无效值。
 *
 * @param {string} pathname - 基础 URL 路径（例如：'/api/users'）
 * @param {QueryParams} queryParams - 查询参数对象（例如：{ id: 123, name: 'john' }）
 * @returns {string} 完整的 URL 字符串
 *
 * @example
 * ```typescript
 * import { generateUrlWithQuery } from 'dt-utils';
 *
 * // 基础用法
 * generateUrlWithQuery('/api/users', { id: 123 }) // => '/api/users?id=123'
 *
 * // 多个参数
 * generateUrlWithQuery('/search', { q: 'test', page: 1, sort: 'desc' }) // => '/search?q=test&page=1&sort=desc'
 *
 * // 处理无效值
 * generateUrlWithQuery('/api/data', { id: 123, name: null, status: undefined }) // => '/api/data?id=123'
 * ```
 */
const generateUrlWithQuery = (pathname: string, queryParams: QueryParams = {}): string => {
    // Remove null, undefined and empty string values
    const filteredParams = Object.fromEntries(
        Object.entries(queryParams).filter(
            ([_, value]) => value !== null && value !== undefined && value !== ''
        )
    );

    // Remove trailing slashes from pathname
    const normalizedPathname = pathname.replace(/\/+$/, '');

    try {
        const params = new URLSearchParams();

        Object.entries(filteredParams).forEach(([key, value]) => {
            if (['string', 'number', 'boolean'].includes(getTypeOfValue(value))) {
                params.append(key, String(value));
            }
        });

        const queryString = params.toString();
        return queryString ? `${normalizedPathname}?${queryString}` : normalizedPathname;
    } catch (error: unknown) {
        console.error('Error generating URL:', error instanceof Error ? error.message : error);
        return normalizedPathname;
    }
};

export default generateUrlWithQuery;
