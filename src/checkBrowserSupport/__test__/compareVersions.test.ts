import compareVersions from '../compareVersions';

describe('compareVersions', () => {
    test('should handle equal version numbers correctly', () => {
        expect(compareVersions('1.0.0', '1.0.0')).toBe(0);
        expect(compareVersions('1.2.3.4', '1.2.3.4')).toBe(0);
        expect(compareVersions('0.0.0', '0.0.0')).toBe(0);
    });

    test('should handle cases where first version is greater than second version', () => {
        expect(compareVersions('2.0.0', '1.0.0')).toBe(1);
        expect(compareVersions('1.2.0', '1.1.9')).toBe(1);
        expect(compareVersions('1.0.1', '1.0.0')).toBe(1);
        expect(compareVersions('137.0.1.0', '137.0.0.0')).toBe(1);
    });

    test('should handle cases where first version is less than second version', () => {
        expect(compareVersions('1.0.0', '2.0.0')).toBe(-1);
        expect(compareVersions('1.1.9', '1.2.0')).toBe(-1);
        expect(compareVersions('1.0.0', '1.0.1')).toBe(-1);
        expect(compareVersions('137.0.0.0', '137.0.1.0')).toBe(-1);
    });

    test('should handle version numbers of different lengths', () => {
        expect(compareVersions('1.0', '1.0.0')).toBe(0);
        expect(compareVersions('1.0.0.0', '1.0')).toBe(0);
        expect(compareVersions('1.1', '1.0.9')).toBe(1);
        expect(compareVersions('1.0.9', '1.1')).toBe(-1);
    });

    test('should handle version numbers with leading zeros', () => {
        expect(compareVersions('1.02.0', '1.2.0')).toBe(0);
        expect(compareVersions('01.0.0', '1.0.0')).toBe(0);
        expect(compareVersions('1.0.03', '1.0.3')).toBe(0);
    });

    test('should handle large version numbers', () => {
        expect(compareVersions('999.999.999', '999.999.998')).toBe(1);
        expect(compareVersions('1000.0.0', '999.999.999')).toBe(1);
        expect(compareVersions('10000.10000.10000', '9999.9999.9999')).toBe(1);
    });

    test('should handle edge cases', () => {
        expect(compareVersions('0.0.0', '0.0.0.0')).toBe(0);
        expect(compareVersions('', '')).toBe(0);
        expect(compareVersions('0', '0.0')).toBe(0);
    });
});
