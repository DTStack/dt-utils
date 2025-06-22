/**
 * Converts a number or string to a formatted string with thousand separators.
 *
 * @category Conversion
 * @description
 * This function takes a number or string input and returns a formatted string with commas as thousand separators.
 * Handles both integer and decimal numbers.
 *
 * @param {string | number} num - The number or string to be formatted
 * @returns {string} A string with thousand separators added
 *
 * @example
 * ```typescript
 * import { toThousand } from 'dt-utils';
 *
 * // Format integers
 * toThousand(1234567)     // => '1,234,567'
 * toThousand('1234567')   // => '1,234,567'
 *
 * // Format decimals
 * toThousand(12345.67)    // => '12,345.67'
 * toThousand('12345.67')  // => '12,345.67'
 *
 * // Handle edge cases
 * toThousand(0)           // => '0'
 * toThousand('')          // => '0'
 * ```
 */
const toThousand = (num: string | number): string => {
    if (num === null || num === undefined || num === '') return '0';

    const numStr = String(num);
    const [integerPart, decimalPart] = numStr.split('.');
    const formattedInteger = integerPart.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

export default toThousand;
