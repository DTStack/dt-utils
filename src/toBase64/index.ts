import { toBase64 as _toBase64 } from 'js-base64';

import getTypeOfValue from '../getTypeOfValue';

/**
 * 将值转换为Base64编码的字符串。
 *
 * @category 转换
 *
 * @param {File | Blob | string} value - 需要转换为Base64的值。支持File、string或其他原始类型
 * @returns {Promise<string | null | undefined>} 返回一个Promise，解析为Base64编码的字符串。如果输入为null/undefined则返回原始值
 *
 * @example
 * ```typescript
 * import { toBase64 } from 'dt-utils';
 *
 * // 将字符串转换为Base64
 * const str = 'Hello World';
 * const base64Str = await toBase64(str);
 * console.log(base64Str); // 'SGVsbG8gV29ybGQ='
 *
 * // 将文件转换为Base64
 * const file = new File(['file content'], 'test.txt');
 * const base64File = await toBase64(file);
 * console.log(base64File); // 'data:text/plain;base64,ZmlsZSBjb250ZW50'
 *
 * // 处理null值
 * const result = await toBase64(null);
 * console.log(result); // null
 * ```
 */
const toBase64 = (value: File | Blob | string): Promise<string | null | undefined> => {
    if (value === undefined || value === null) return Promise.resolve(value);

    return new Promise((resolve, reject) => {
        if (['blob', 'file'].includes(getTypeOfValue(value))) {
            const reader = new FileReader();
            reader.readAsDataURL(value as File | Blob);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        } else {
            resolve(_toBase64(String(value)));
        }
    });
};

export default toBase64;
