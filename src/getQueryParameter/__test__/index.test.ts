import getQueryParameter from '..';

describe('getQueryParameter', () => {
    it('should return the string value for a parameter from the provided url', () => {
        expect(getQueryParameter('name', 'https://example.com?name=john&age=25')).toBe('john');
        expect(getQueryParameter('age', 'https://example.com?name=john&age=25')).toBe(25);
        expect(getQueryParameter('enabled', 'https://example.com?enabled=true')).toBe(true);
    });

    it('should return undefined when the parameter does not exist', () => {
        expect(getQueryParameter('missing', 'https://example.com?name=john')).toBeUndefined();
    });

    it('should use window.location.href when url is not provided', () => {
        const originalLocation = window.location;

        Object.defineProperty(window, 'location', {
            configurable: true,
            value: {
                href: 'https://current.com?page=home&limit=10',
            },
        });

        expect(getQueryParameter('page')).toBe('home');
        expect(getQueryParameter('limit')).toBe(10);

        Object.defineProperty(window, 'location', {
            configurable: true,
            value: originalLocation,
        });
    });

    it('should preserve special parsed values from the query string', () => {
        expect(getQueryParameter('empty', 'https://example.com?empty=null')).toBeNull();
        expect(getQueryParameter('unset', 'https://example.com?unset=undefined')).toBeUndefined();
    });

    it('should parse query parameters from hash fragment', () => {
        expect(getQueryParameter('token', 'https://example.com#hash?token=abc123')).toBe('abc123');
    });

    it('should prioritize search params over hash params', () => {
        expect(getQueryParameter('key', 'https://example.com?key=search#hash?key=hash')).toBe(
            'search'
        );
    });

    it('should return hash param when search param does not exist', () => {
        expect(
            getQueryParameter('hashOnly', 'https://example.com?page=1#hash?hashOnly=value')
        ).toBe('value');
    });

    it('should return undefined when hash has no query string', () => {
        expect(getQueryParameter('name', 'https://example.com/#/path/to/page')).toBeUndefined();
    });

    it('should return undefined when hash has question mark but no params', () => {
        expect(getQueryParameter('name', 'https://example.com/#/path?')).toBeUndefined();
    });

    it('should decode encoded characters in hash params', () => {
        expect(getQueryParameter('name', 'https://example.com/#/path?name=hello%20world')).toBe(
            'hello world'
        );
    });
});
