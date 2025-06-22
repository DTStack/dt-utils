import toPercent from '../index';

describe('toPercent', () => {
    test('correctly formats numbers between 0 and 1', () => {
        expect(toPercent(0)).toBe('0%');
        expect(toPercent(0.5)).toBe('50%');
        expect(toPercent(1)).toBe('100%');
    });

    test('correctly handles numbers greater than 1', () => {
        expect(toPercent(1.5)).toBe('150%');
        expect(toPercent(2)).toBe('200%');
    });

    test('correctly handles negative numbers', () => {
        expect(toPercent(-0.5)).toBe('-50%');
        expect(toPercent(-1)).toBe('-100%');
    });

    test('handles string, null, undefined, and non-finite numbers', () => {
        expect(toPercent('-0.5' as any)).toBe('-50%');
        expect(toPercent('-1' as any)).toBe('-100%');
        expect(toPercent('abc' as any)).toBe('0%');
        expect(toPercent(null as any)).toBe('0%');
        expect(toPercent(undefined as any)).toBe('0%');
        expect(toPercent(Infinity)).toBe('0%');
        expect(toPercent(-Infinity)).toBe('0%');
        expect(toPercent(NaN)).toBe('0%');
    });

    test('formats with custom precision', () => {
        expect(toPercent(0.1234, 0)).toBe('12%'); // 0 decimal places
        expect(toPercent(0.1234, 1)).toBe('12.3%'); // 1 decimal place
        expect(toPercent(0.1234, 2)).toBe('12.34%'); // 2 decimal places (default)
        expect(toPercent(0.1234, 3)).toBe('12.34%'); // 3 decimal places
        expect(toPercent(0.1234, 4)).toBe('12.34%'); // 4 decimal places
    });

    test('handles extremely small values to avoid scientific notation', () => {
        expect(toPercent(0.000000001)).toBe('0%'); // Extremely small value should return 0%
        expect(toPercent(-0.000000001)).toBe('0%'); // Negative extremely small value should also return 0%
    });

    test('handles edge cases', () => {
        expect(toPercent(0.9999)).toBe('99.99%'); // Value close to 1
        expect(toPercent(0.0001)).toBe('0.01%'); // Value close to 0 but not extremely small
    });
});
