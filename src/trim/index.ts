/* eslint-disable no-irregular-whitespace */
/**
 * Removes leading and trailing whitespace characters from a string.
 *
 * @category Utils
 * @description
 * Handles various Unicode whitespace characters including spaces, tabs, and no-break spaces.
 *
 * @param {string} str - The string to trim
 * @returns {string} The trimmed string, or the original value if input is not a string
 *
 * @example
 * ```typescript
 * import { trim } from 'dt-utils';
 *
 * // Removes leading and trailing whitespace characters
 * trim('  hello world  '); // => 'hello world'
 * trim('\t\nhello\r  '); // => 'hello'
 *
 * // handles full-width spaces
 * trim('　hello　'); // => 'hello'
 *
 * // returns original value for non-strings
 * trim(123); // => 123
 * ```
 */
const trim = (str: string): string => {
    if (typeof str !== 'string') {
        return str;
    }

    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

export default trim;
