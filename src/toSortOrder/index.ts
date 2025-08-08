/**
 * 将前端框架（如 Ant Design）中常用的排序方向术语转换为标准的 SQL 排序术语。
 *
 * @category 转换
 *
 * @param {string} order - 要转换的排序字符串（'ascend' 或 'descend'）
 * @returns {string | undefined} 对应的 SQL 排序字符串（'asc' 或 'desc'），如果输入为空或无效则返回 undefined
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
