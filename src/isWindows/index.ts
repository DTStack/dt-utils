import UAParser from 'ua-parser-js';

/**
 * Check if the current operating system is Windows.
 *
 * @category Environment Detection
 *
 * @returns {boolean} - Returns true if the OS is Windows, false otherwise.
 *
 * @example
 * ```typescript
 * import { isWindows } from 'dt-utils';
 *
 * // Check if current OS is Windows
 * if (isWindows()) {
 *   console.log('Running on Windows');
 * } else {
 *   console.log('Not running on Windows');
 * }
 *
 * // Direct usage
 * const isWindowsOS = isWindows(); // => true/false
 * ```
 */
const isWindows = (): boolean => {
    const parser = new UAParser();
    const result = parser.getOS();

    return result.name === 'Windows';
};

export default isWindows;
