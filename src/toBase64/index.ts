import { toBase64 as _toBase64 } from 'js-base64';

/**
 * 将字符串转换为Base64编码的字符串。
 *
 * @param {string | null | undefined} value - 需要转换为Base64的字符串，支持null/undefined
 * @returns {string | undefined} Base64编码的字符串，如果输入为null/undefined则返回undefined
 */
function toBase64(value: string | null | undefined): string | undefined;

/**
 * 将File或Blob对象转换为Base64编码的Data URL。
 *
 * @param {File | Blob} value - 需要转换为Base64的File或Blob对象
 * @returns {Promise<string | ArrayBuffer | null>} Promise，解析为Base64编码的Data URL字符串
 */
function toBase64(value: File | Blob): Promise<string | ArrayBuffer | null>;
/**
 * 将值转换为Base64编码的字符串。
 *
 * @category 转换
 *
 * @example
 * ```typescript
 * import { toBase64 } from 'dt-utils';
 *
 * // 将字符串转换为Base64
 * const str = 'Hello World';
 * const base64Str = toBase64(str);
 * console.log(base64Str); // 'SGVsbG8gV29ybGQ='
 *
 * // 处理null值
 * const result = toBase64(null);
 * console.log(result); // null
 *
 * // 将文件转换为Base64
 * const file = new File(['file content'], 'test.txt');
 * const base64File = await toBase64(file);
 * console.log(base64File); // 'data:text/plain;base64,ZmlsZSBjb250ZW50'
 * ```
 */
function toBase64(value: File | Blob | string | null | undefined) {
    if (value === undefined || value === null) return undefined;

    if (!(value instanceof Blob)) {
        return _toBase64(value);
    }

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(value);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

export default toBase64;
