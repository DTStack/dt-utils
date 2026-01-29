import UAParser from 'ua-parser-js';

/**
 * 检查当前操作系统是否为 Windows。
 *
 * @category 环境检测
 *
 * @returns {boolean} - 如果操作系统是 Windows 返回 true，否则返回 false。
 *
 * @example
 * ```typescript
 * import { isWindows } from 'dt-utils';
 *
 * // 检查当前操作系统是否为 Windows
 * if (isWindows()) {
 *   console.log('运行在 Windows 系统上');
 * } else {
 *   console.log('不是运行在 Windows 系统上');
 * }
 *
 * // 直接使用
 * const isWindowsOS = isWindows(); // => true/false
 * ```
 */
const isWindows = (): boolean => {
    const parser = new UAParser();
    const result = parser.getOS();

    return result.name === 'Windows';
};

export default isWindows;
