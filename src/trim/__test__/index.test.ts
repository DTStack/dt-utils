import trim from '../index';

describe('trim', () => {
    it('should remove whitespace from both ends of a string', () => {
        expect(trim('  hello  ')).toBe('hello');
        expect(trim('\t\nhello\n\t')).toBe('hello');
        expect(trim('   hello world   ')).toBe('hello world');
    });

    it('should handle strings with no whitespace', () => {
        expect(trim('hello')).toBe('hello');
        expect(trim('hello world')).toBe('hello world');
    });

    it('should handle empty string', () => {
        expect(trim('')).toBe('');
        expect(trim('    ')).toBe('');
        expect(trim('\n\t\r')).toBe('');
    });

    it('should handle special Unicode whitespace characters', () => {
        expect(trim('\uFEFF hello \uFEFF')).toBe('hello');
        expect(trim('\xA0 hello \xA0')).toBe('hello');
    });

    it('should return the original value for non-string inputs', () => {
        const obj = { key: 'value' };
        const arr = [1, 2, 3];
        const num = 42;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: testing non-string inputs
        expect(trim(obj)).toBe(obj);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: testing non-string inputs
        expect(trim(arr)).toBe(arr);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: testing non-string inputs
        expect(trim(num)).toBe(num);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: testing non-string inputs
        expect(trim(null)).toBe(null);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: testing non-string inputs
        expect(trim(undefined)).toBe(undefined);
    });
});
