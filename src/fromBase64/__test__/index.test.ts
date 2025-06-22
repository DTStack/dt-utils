import fromBase64 from '../index';

describe('fromBase64', () => {
    test('decode basic base64 string', () => {
        const encoded = 'SGVsbG8gV29ybGQ=';
        expect(fromBase64(encoded)).toBe('Hello World');
    });

    test('decode base64 string containing Unicode characters', () => {
        const encoded = '5L2g5aW977yB';
        expect(fromBase64(encoded)).toBe('你好！');
    });

    test('decode URL-safe base64 string', () => {
        const encoded = 'SGVsbG8_V29ybGQ';
        expect(fromBase64(encoded)).toBe('Hello?World');
    });

    test('decode empty string', () => {
        expect(fromBase64('')).toBe('');
    });

    test('decode base64 string containing special characters', () => {
        const encoded = '8J+RkvCfkZLwn5GS';
        expect(fromBase64(encoded)).toBe('👒👒👒');
    });
});
