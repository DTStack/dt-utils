/* eslint-disable no-irregular-whitespace */
/**
 * 移除字符串首尾的空白字符。
 *
 * @category Utils
 * @description
 * 处理各种 Unicode 空白字符，包括空格、制表符和不换行空格。
 *
 * @param {string} str - 需要处理的字符串
 * @returns {string} 处理后的字符串，如果输入不是字符串则返回原始值
 *
 * @example
 * ```typescript
 * import { trim } from 'dt-utils';
 *
 * // 移除首尾的空白字符
 * trim('  hello world  '); // => 'hello world'
 * trim('\t\nhello\r  '); // => 'hello'
 *
 * // 处理全角空格
 * trim('　hello　'); // => 'hello'
 *
 * // 非字符串类型返回原始值
 * trim(123); // => 123
 * ```
 */
const trim = (str: string): string => {
    if (typeof str !== 'string') {
        return str;
    }

    return str
        .trim()
        .replace(/^[\s\uFEFF\xA0]+/g, '')
        .replace(/[\s\uFEFF\xA0]+$/g, '');
};

export default trim;
