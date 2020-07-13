import assert from 'assert';
import { getTag, isNumber, isString } from '../src/type';

describe('type:', () => {
    /**
   * getTag
   */
    describe('getTag', () => {
        test(' undefined => [object Undefined] ', () => {
            assert.strictEqual(getTag(undefined), '[object Undefined]');
        });

        test(' null => [object Null] ', () => {
            assert.strictEqual(getTag(null), '[object Null]');
        });

        test(' 1 => [object Number] ', () => {
            assert.strictEqual(getTag(1), '[object Number]');
        });

        test(' "abc" => [object String] ', () => {
            assert.strictEqual(getTag('abc'), '[object String]');
        });

        test(' {} => [object Object] ', () => {
            assert.strictEqual(getTag({}), '[object Object]');
        });

        test(' [] => [object Array] ', () => {
            assert.strictEqual(getTag([]), '[object Array]');
        });

        test(' Symbol => [object Symbol] ', () => {
            assert.strictEqual(getTag(Symbol('key')), '[object Symbol]');
        });
    });

    /**
   * isNumber
   */
    describe('isNumber', () => {
        test(' 1 => true ', () => {
            assert.strictEqual(isNumber(1), true);
        });

        test(' NaN => true ', () => {
            assert.strictEqual(isNumber(NaN), true);
        });

        test(' \'2\' => false ', () => {
            assert.strictEqual(isNumber('2'), false);
        });

    });

    /**
   * isString
   */
    describe('isString', () => {
        test(' \'abc\' => string ', () => {
            assert.strictEqual(isString('abc'), true);
        });

        test(' 1 => false ', () => {
            assert.strictEqual(isString(1), false);
        });
    });
});
