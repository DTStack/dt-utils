import { nanoid } from 'nanoid';

/**
 * Generates a unique key using nanoid
 *
 * @category Utils
 * @description
 * Generates a random unique key with specified length using nanoid library
 *
 * @param {number} size - The length of the generated key
 * @returns {string} A random string with the specified length
 *
 * @example
 * ```typescript
 * import { getKey } from 'dt-utils';
 *
 * // Generate a key with length of 10
 * getKey(10) // => "nf5oc2mw3p"
 *
 * // Generate a key with length of 5
 * getKey(5) // => "a4b2x"
 * ```
 */
const getKey = (size: number): string => {
    return nanoid(size);
};

export default getKey;
