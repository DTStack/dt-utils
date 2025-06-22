import UAParser from 'ua-parser-js';

/**
 * Check if the current operating system is macOS.
 *
 * @category Environment Detection
 * @returns {boolean} Returns `true` if running on macOS, `false` otherwise
 *
 * @example
 * ```typescript
 * import { isMacOS } from 'dt-utils';
 *
 * // Check if current OS is macOS
 * if (isMacOS()) {
 *   console.log('Running on macOS');
 * } else {
 *   console.log('Not running on macOS');
 * }
 *
 * // Direct usage
 * const isOnMac = isMacOS(); // => true/false
 * ```
 */
const isMacOS = (): boolean => {
    const parser = new UAParser();
    const result = parser.getOS();

    return result.name === 'macOS';
};

export default isMacOS;
