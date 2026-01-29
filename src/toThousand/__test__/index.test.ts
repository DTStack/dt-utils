import toThousand from '../index';

describe('toThousand', () => {
    it('should format a number with thousand separators', () => {
        expect(toThousand(1000)).toBe('1,000');
        expect(toThousand(1000000)).toBe('1,000,000');
    });

    it('should format a string representation of a number with thousand separators', () => {
        expect(toThousand('2500')).toBe('2,500');
        expect(toThousand('123456789')).toBe('123,456,789');
    });

    it('should handle numbers with decimal parts', () => {
        expect(toThousand(1234.56)).toBe('1,234.56');
        expect(toThousand('98765.4321')).toBe('98,765.4321');
    });

    it('should return "0" for null, undefined, or empty string', () => {
        expect(toThousand(null as any)).toBe('0');
        expect(toThousand(undefined as any)).toBe('0');
        expect(toThousand('')).toBe('0');
    });

    it('should handle negative numbers', () => {
        expect(toThousand(-1000)).toBe('-1,000');
        expect(toThousand('-2500.75')).toBe('-2,500.75');
    });

    it('should handle very large numbers', () => {
        expect(toThousand(12345678901234)).toBe('12,345,678,901,234');
        expect(toThousand('9876543210987654321')).toBe('9,876,543,210,987,654,321');
    });

    it('should return the same string if it is already formatted', () => {
        expect(toThousand('1,234')).toBe('1,234');
    });
});
