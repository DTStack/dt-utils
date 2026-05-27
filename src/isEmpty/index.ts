import { isEmpty as _isEmpty, isPlainObject } from 'lodash-es';

import getTypeOfValue from '../getTypeOfValue';

/**
 * 检查一个值是否为空。空值包括：null、undefined、空字符串、空数组和空对象。
 *
 * @category 工具函数
 *
 * @param {unknown} value - 要检查的值
 * @returns {boolean} - 如果值为空，则返回 true；否则返回 false
 *
 * @example
 * ```typescript
 * import { isEmpty } from 'dt-utils';
 *
 * isEmpty(null); // true
 * isEmpty(undefined); // true
 * isEmpty(''); // true
 * isEmpty([]); // true
 * isEmpty({}); // true
 * isEmpty('hello'); // false
 * isEmpty([1, 2, 3]); // false
 * isEmpty({ a: 1 }); // false
 * isEmpty(new Map()); // false
 * isEmpty(new Set()); // false
 * isEmpty(new Date()); // false
 * isEmpty(new RegExp()); // false
 * isEmpty(new Error()); // false
 * isEmpty(new Foo()); // false
 * ```
 */
const isEmpty = (value: unknown): boolean => {
    if (value === null) {
        return true;
    }

    if (value === undefined) {
        return true;
    }

    if (value === '') {
        return true;
    }

    if (getTypeOfValue(value) === 'array') {
        return _isEmpty(value);
    }

    if (isPlainObject(value) || ['map', 'set'].includes(getTypeOfValue(value))) {
        return _isEmpty(value);
    }

    return false;
};

export default isEmpty;
