import isEmpty from '../index';

describe('isEmpty', () => {
    describe('should return true for empty values', () => {
        test('returns true for null', () => {
            expect(isEmpty(null)).toBe(true);
        });

        test('returns true for undefined', () => {
            expect(isEmpty(undefined)).toBe(true);
        });

        test('returns true for empty string', () => {
            expect(isEmpty('')).toBe(true);
        });

        test('returns true for empty array', () => {
            expect(isEmpty([])).toBe(true);
        });

        test('returns true for empty object', () => {
            expect(isEmpty({})).toBe(true);
        });

        test('returns false for empty Map instance', () => {
            expect(isEmpty(new Map())).toBe(false);
        });

        test('returns false for empty Set instance', () => {
            expect(isEmpty(new Set())).toBe(false);
        });

        test('returns false for empty WeakMap instance', () => {
            expect(isEmpty(new WeakMap())).toBe(false);
        });

        test('returns false for empty WeakMap instance', () => {
            expect(isEmpty(new WeakSet())).toBe(false);
        });

        test('returns false for custom class instance', () => {
            class Foo {}

            expect(isEmpty(new Foo())).toBe(false);
        });

        test('returns false for empty RegExp instance', () => {
            expect(isEmpty(new RegExp(''))).toBe(false);
        });

        test('returns false for empty Error instance', () => {
            expect(isEmpty(new Error())).toBe(false);
        });

        test('returns false for empty Date instance', () => {
            expect(isEmpty(new Date())).toBe(false);
        });
    });

    describe('should return false for non-empty values', () => {
        test('returns false for non-empty string', () => {
            expect(isEmpty('hello')).toBe(false);
        });

        test('returns false for non-empty array', () => {
            expect(isEmpty([1, 2, 3])).toBe(false);
        });

        test('returns false for non-empty object', () => {
            expect(isEmpty({ a: 1 })).toBe(false);
        });

        test('returns false for number 0', () => {
            expect(isEmpty(0)).toBe(false);
        });

        test('returns false for boolean false', () => {
            expect(isEmpty(false)).toBe(false);
        });

        test('returns false for NaN', () => {
            expect(isEmpty(NaN)).toBe(false);
        });

        test('returns false for Date instance', () => {
            expect(isEmpty(new Date())).toBe(false);
        });

        test('returns false for function', () => {
            expect(isEmpty(() => {})).toBe(false);
        });
    });

    describe('should handle edge cases correctly', () => {
        test('returns false for string with spaces', () => {
            expect(isEmpty('   ')).toBe(false);
        });

        test('returns false for object with nested empty object', () => {
            expect(isEmpty({ a: {} })).toBe(false);
        });

        test('returns false for array containing empty object', () => {
            expect(isEmpty([{}])).toBe(false);
        });
    });
});
