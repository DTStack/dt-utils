/**
 * Parses query parameters from a given search string.
 *
 * @category Utils
 * @description
 * Extracts and parses query parameters from a URL search string into a typed object.
 * Handles special string values:
 * - 'null' is converted to null
 * - 'undefined' is converted to undefined
 * - JSON-parsable strings are automatically parsed (e.g. numbers, booleans)
 * - Other values remain as strings
 *
 * @param {string} search - The search string (e.g., location.search).
 * @returns {Record<string, string | null | undefined>} - An object containing the query parameters.
 *
 * @example
 * ```typescript
 * import { getQueryParameters } from 'dt-utils';
 *
 * // Basic usage
 * const search = '?name=john&age=25';
 * getQueryParameters(search); // => { name: "john", age: 25 }
 *
 * // Handling special values
 * const search = '?isActive=true&count=null&status=undefined';
 * getQueryParameters(search); // => { isActive: true, count: null, status: undefined }
 *
 * // With type inference
 * interface QueryParams {
 *   page: string;
 *   limit: number;
 * }
 * const params = getQueryParameters<QueryParams>('?page=home&limit=10');
 * // params.page is string, params.limit is number
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
