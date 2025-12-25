import { nanoid } from 'nanoid';

/**
 * 使用 nanoid 生成唯一键值
 *
 * @category Utils
 * @description
 * 使用 nanoid 库生成指定长度的随机唯一键值
 *
 * @param {number} size - 生成的键值长度
 * @returns {string} 指定长度的随机字符串
 *
 * @example
 * ```typescript
 * import { generateUniqueId } from 'dt-utils';
 *
 * // 生成长度为10的键值
 * generateUniqueId(10) // => "nf5oc2mw3p"
 *
 * // 生成长度为5的键值
 * generateUniqueId(5) // => "a4b2x"
 * ```
 */
const generateUniqueId = (size: number): string => {
    return nanoid(size);
};

export default generateUniqueId;
