import { fromBase64 as _fromBase64 } from 'js-base64';

/**
 * 将 Base64 字符串转换为 UTF-8 字符串。
 *
 * @category 转换
 *
 * @param {string} value - Base64 字符串。支持标准格式和 URL 安全格式
 * @returns {string} - UTF-8 字符串
 *
 * @example
 * ```typescript
 * import { fromBase64 } from 'dt-utils';
 *
 * // 解码 base64 字符串
 * fromBase64('SGVsbG8gV29ybGQ=') // => 'Hello World'
 *
 * // 解码包含 unicode 字符的 base64 字符串
 * fromBase64('5L2g5aW977yB') // => '你好！'
 * ```
 */
function fromBase64(value: string) {
    return _fromBase64(value);
}

export default fromBase64;
