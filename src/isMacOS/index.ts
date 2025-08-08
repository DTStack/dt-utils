import UAParser from 'ua-parser-js';
/**
 * 检查当前操作系统是否为 macOS。
 *
 * @category 环境检测
 * @returns {boolean} 如果在 macOS 上运行返回 `true`，否则返回 `false`
 *
 * @example
 * ```typescript
 * import { isMacOS } from 'dt-utils';
 *
 * // 检查当前系统是否为 macOS
 * if (isMacOS()) {
 *   console.log('运行在 macOS 上');
 * } else {
 *   console.log('不是运行在 macOS 上');
 * }
 *
 * // 直接使用
 * const isOnMac = isMacOS(); // => true/false
 * ```
 */
const isMacOS = (): boolean => {
    const parser = new UAParser();
    const result = parser.getOS();

    return result.name === 'macOS';
};

export default isMacOS;
