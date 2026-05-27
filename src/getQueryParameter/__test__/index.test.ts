import getQueryParameter from '..';

describe('getQueryParameter', () => {
    it('should return the parsed value for a parameter from the provided url', () => {
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
});
