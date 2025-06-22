import getTypeOfValue from '../getTypeOfValue';

type QueryValue = string | number | boolean | null | undefined;
type QueryParams = Record<string, QueryValue>;

/**
 * Generate URL with query parameters.
 *
 * @category Utils
 * @description
 * This utility function combines a base URL path with query parameters
 * to create a complete URL string. It automatically handles parameter encoding and removes invalid values.
 *
 * @param {string} pathname - Base URL path (e.g., '/api/users')
 * @param {QueryParams} queryParams - Query parameters object (e.g., { id: 123, name: 'john' })
 * @returns {string} Complete URL string
 *
 * @example
 * ```typescript
 * import { generateUrlWithQuery } from 'dt-utils';
 *
 * // Basic usage
 * generateUrlWithQuery('/api/users', { id: 123 }) // => '/api/users?id=123'
 *
 * // Multiple parameters
 * generateUrlWithQuery('/search', { q: 'test', page: 1, sort: 'desc' }) // => '/search?q=test&page=1&sort=desc'
 *
 * // Handles invalid values
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
