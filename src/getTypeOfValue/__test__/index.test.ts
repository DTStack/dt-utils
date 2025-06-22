import getTypeOfValue from "..";


describe('getTypeOfValue', () => {
    it('should return "number" for numeric values', () => {
        expect(getTypeOfValue(1)).toBe('number');
        expect(getTypeOfValue(0)).toBe('number');
        expect(getTypeOfValue(-1)).toBe('number');
    });

    it('should return "string" for string values', () => {
        expect(getTypeOfValue('')).toBe('string');
        expect(getTypeOfValue('hello')).toBe('string');
    });

    it('should return "null" for null values', () => {
        expect(getTypeOfValue(null)).toBe('null');
    });

    it('should return "array" for array values', () => {
        expect(getTypeOfValue([])).toBe('array');
        expect(getTypeOfValue([1, 2, 3])).toBe('array');
        expect(getTypeOfValue(['a', 'b', 'c'])).toBe('array');
    });

    it('should return "object" for object values', () => {
        expect(getTypeOfValue({})).toBe('object');
        expect(getTypeOfValue({ key: 'value' })).toBe('object');
    });

    it('should return "function" for function values', () => {
        expect(getTypeOfValue(function () {})).toBe('function');
        expect(getTypeOfValue(() => {})).toBe('function');
    });

    it('should return "symbol" for symbol values', () => {
        expect(getTypeOfValue(Symbol(''))).toBe('symbol');
    });

    it('should return "bigint" for bigint values', () => {
        expect(getTypeOfValue(123456789012345678901234567890n)).toBe('bigint');
    });

    it('should return "undefined" for undefined values', () => {
        expect(getTypeOfValue(undefined)).toBe('undefined');
    });

    it('should return "object" for date objects', () => {
        expect(getTypeOfValue(new Date())).toBe('date');
    });

    it('should return "object" for regex objects', () => {
        expect(getTypeOfValue(/abc/)).toBe('regexp');
    });
});
