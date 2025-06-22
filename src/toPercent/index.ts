/**
 * Formats a number as a percentage string.
 *
 * @category Conversion
 * @description
 * This function converts a decimal number to a percentage string representation.
 *
 * @param {number} num - The decimal number to be converted to percentage
 * @param {number} [precision=2] - The number of decimal places to round to (default: 2)
 * @returns {string} A formatted percentage string with the specified precision
 *
 * @example
 * ```typescript
 * import { toPercent } from 'dt-utils';
 *
 * // Basic usage
 * toPercent(0.1234)      // => "12.34%"
 *
 * // Custom precision
 * toPercent(0.1234, 1)   // => "12.3%"
 * toPercent(1.2345, 3)   // => "123.345%"
 *
 * // Handling negative numbers
 * toPercent(-0.089, 1)   // => "-8.9%"
 *
 * // Edge cases
 * toPercent(0.00000001)  // => "0%"
 * toPercent(NaN)         // => "0%"
 * toPercent(Infinity)    // => "0%"
 * toPercent(null)        // => "0%"
 * toPercent(undefined)   // => "0%"
 * ```
 */
const toPercent = (num: number, precision = 2): string => {
    if (num === null || num === undefined || num === Infinity || num === -Infinity || isNaN(num)) {
        return '0%';
    }

    try {
        // Convert number to percentage and handle precision
        const value = Number(num);
        const multiplied = value * 100;

        // Handle extremely small values to avoid scientific notation
        if (Math.abs(multiplied) < 0.000001) {
            return '0%';
        }

        const formatted = Number(multiplied.toFixed(precision)).toString();

        return `${formatted}%`;
    } catch (error) {
        console.warn('toPercent 转换失败:', error);
        return '0%';
    }
};

export default toPercent;
