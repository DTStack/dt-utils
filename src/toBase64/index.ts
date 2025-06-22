import { toBase64 as _toBase64 } from 'js-base64';

import getTypeOfValue from '../getTypeOfValue';

/**
 * Converts a value to a Base64-encoded string.
 *
 * @category Conversion
 *
 * @param {File | Blob | string} value - The value to convert to Base64. Supports File, string, or other primitive types
 * @returns {Promise<string | null | undefined>} A Promise that resolves with the Base64-encoded string. Returns original value if input is null/undefined
 *
 * @example
 * ```typescript
 * import { toBase64 } from 'dt-utils';
 *
 * // Convert string to Base64
 * const str = 'Hello World';
 * const base64Str = await toBase64(str);
 * console.log(base64Str); // 'SGVsbG8gV29ybGQ='
 *
 * // Convert File to Base64
 * const file = new File(['file content'], 'test.txt');
 * const base64File = await toBase64(file);
 * console.log(base64File); // 'data:text/plain;base64,ZmlsZSBjb250ZW50'
 *
 * // Handle null value
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
