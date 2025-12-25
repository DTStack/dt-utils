import formatSecond from '..';

describe('formatSecond', () => {
    // Test basic functionality
    test('should correctly format time containing hours, minutes and seconds', () => {
        expect(formatSecond(3661)).toBe('1h1m1s');
        expect(formatSecond(3600)).toBe('1h');
        expect(formatSecond(60)).toBe('1m');
        expect(formatSecond(1)).toBe('1s');
    });

    // Test hours only
    test('should correctly format time with hours only', () => {
        expect(formatSecond(7200)).toBe('2h');
        expect(formatSecond(3600)).toBe('1h');
    });

    // Test minutes only
    test('should correctly format time with minutes only', () => {
        expect(formatSecond(120)).toBe('2m');
        expect(formatSecond(60)).toBe('1m');
    });

    // Test seconds only
    test('should correctly format time with seconds only', () => {
        expect(formatSecond(59)).toBe('59s');
        expect(formatSecond(1)).toBe('1s');
    });

    // Test combinations
    test('should correctly format combination of hours and minutes', () => {
        expect(formatSecond(3720)).toBe('1h2m');
    });

    test('should correctly format combination of hours and seconds', () => {
        expect(formatSecond(3601)).toBe('1h1s');
    });

    test('should correctly format combination of minutes and seconds', () => {
        expect(formatSecond(121)).toBe('2m1s');
    });

    // Test edge cases
    test('should handle zero seconds correctly', () => {
        expect(formatSecond(0)).toBe('0s');
    });

    test('should handle undefined input with default value', () => {
        expect(formatSecond()).toBe('0s');
    });

    // Test large numbers
    test('should handle large numbers correctly', () => {
        expect(formatSecond(86400)).toBe('24h');
        expect(formatSecond(90061)).toBe('25h1m1s');
    });

    // Test negative numbers (if function should support negative numbers)
    test('should handle negative numbers correctly', () => {
        expect(formatSecond(-3661)).toBe('0s');
        expect(formatSecond(-60)).toBe('0s');
    });

    // Test padZero
    test('should correctly format time with zero-padded hours, minutes and seconds', () => {
        expect(formatSecond(3661, true)).toBe('01h01m01s');
        expect(formatSecond(3600, true)).toBe('01h');
        expect(formatSecond(60, true)).toBe('01m');
        expect(formatSecond(1, true)).toBe('01s');
        expect(formatSecond(0, true)).toBe('00s');
    });
});
