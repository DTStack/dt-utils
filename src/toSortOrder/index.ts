/**
 * Converts sorting direction terms commonly used in frontend frameworks (like Ant Design)
 * to standard SQL ordering terms.
 *
 * @category Conversion
 *
 * @param {string} order - The order string to convert ('ascend' or 'descend')
 * @returns {string | undefined} The corresponding SQL order string ('asc' or 'desc'), or undefined if input is empty/invalid
 *
 * @example
 * ```typescript
 * import { toSortOrder } from 'dt-utils';
 *
 * toSortOrder('ascend')  // => 'asc'
 * toSortOrder('descend') // => 'desc'
 * toSortOrder('')        // => undefined
 * toSortOrder('invalid') // => undefined
 * ```
 */
const toSortOrder = (order: string): 'asc' | 'desc' | undefined => {
    if (!order) return undefined;

    const orderMap = {
        ascend: 'asc',
        descend: 'desc',
    };

    return orderMap[order];
};

export default toSortOrder;
