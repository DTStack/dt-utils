import formatBytes from '../index';

describe('formatBytes', () => {
    describe('Edge Cases', () => {
        test('should return Invalid value for non-finite numbers', () => {
            expect(formatBytes(Infinity)).toBe('Invalid value');
            expect(formatBytes(NaN)).toBe('Invalid value');
        });

        test('should return Invalid value for negative numbers', () => {
            expect(formatBytes(-1)).toBe('Invalid value');
            expect(formatBytes(-1024)).toBe('Invalid value');
        });

        test('should return 0 B for zero', () => {
            expect(formatBytes(0)).toBe('0 B');
        });
    });

    describe('Unit Conversions', () => {
        test('should correctly convert bytes (B)', () => {
            expect(formatBytes(1)).toBe('1 B');
            expect(formatBytes(1023)).toBe('1023 B');
        });

        test('should correctly convert kilobytes (KB)', () => {
            expect(formatBytes(1024)).toBe('1 KB');
            expect(formatBytes(1024 * 1.5)).toBe('1.5 KB');
        });

        test('should correctly convert megabytes (MB)', () => {
            expect(formatBytes(1024 * 1024)).toBe('1 MB');
            expect(formatBytes(1024 * 1024 * 2.5)).toBe('2.5 MB');
        });

        test('should correctly convert gigabytes (GB)', () => {
            expect(formatBytes(1024 * 1024 * 1024)).toBe('1 GB');
        });

        test('should handle very large numbers', () => {
            const hugeNumber = Math.pow(1024, 8) * 2;
            expect(formatBytes(hugeNumber)).toBe('2 YB');
        });
    });

    describe('Decimal Places', () => {
        test('should use default 2 decimal places', () => {
            expect(formatBytes(1024 * 1.234)).toBe('1.23 KB');
        });

        test('should handle custom decimal places correctly', () => {
            expect(formatBytes(1024 * 1.234, 1)).toBe('1.2 KB');
            expect(formatBytes(1024 * 1.234, 3)).toBe('1.234 KB');
            expect(formatBytes(1024 * 1.234, 0)).toBe('1 KB');
        });

        test('should handle trailing zeros correctly', () => {
            expect(formatBytes(1024 * 1.5, 2)).toBe('1.5 KB');
            expect(formatBytes(1024 * 2.0, 2)).toBe('2 KB');
        });
    });
});
