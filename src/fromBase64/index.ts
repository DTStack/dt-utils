import { fromBase64 as _fromBase64 } from 'js-base64';

/**
 * converts a Base64 string to a UTF-8 string.
 *
 * @category Conversion
 *
 * @param {string} value — Base64 string. Both normal and URL-safe are supported
 * @returns {string} — UTF-8 string
 *
 * @example
 * ```typescript
 * import { fromBase64 } from 'dt-utils';
 *
 * // Decode base64 string
 * fromBase64('SGVsbG8gV29ybGQ=') // => 'Hello World'
 *
 * // Decode base64 string with unicode characters
 * fromBase64('5L2g5aW977yB') // => '你好！'
 * ```
 */
function fromBase64(value: string) {
    return _fromBase64(value);
}

export default fromBase64;
