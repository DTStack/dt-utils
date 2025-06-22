import generateUrlWithQuery from '../index';

describe('generateUrlWithQuery', () => {
    test('generates basic URL query string', () => {
        expect(generateUrlWithQuery('/api/users', { id: 1, name: 'test' })).toBe(
            '/api/users?id=1&name=test'
        );
    });

    test('removes trailing slashes from path', () => {
        expect(generateUrlWithQuery('/api/users/', { id: 1 })).toBe('/api/users?id=1');
        expect(generateUrlWithQuery('/api/users////', { id: 1 })).toBe('/api/users?id=1');
    });

    test('filters empty value parameters', () => {
        const params = {
            id: 1,
            name: '',
            age: null,
            city: undefined,
            status: 'active',
        };
        expect(generateUrlWithQuery('/api/users', params)).toBe('/api/users?id=1&status=active');
    });

    test('handles object type parameters', () => {
        const params = {
            filter: { status: 'active', type: 'user' },
            id: 1,
        };
        expect(generateUrlWithQuery('/api/users', params)).toBe(
            '/api/users?filter=%7B%22status%22%3A%22active%22%2C%22type%22%3A%22user%22%7D&id=1'
        );
    });

    test('returns original path when no query parameters', () => {
        expect(generateUrlWithQuery('/api/users')).toBe('/api/users');
        expect(generateUrlWithQuery('/api/users', {})).toBe('/api/users');
    });

    test('handles special characters', () => {
        const params = {
            name: 'John Doe',
            email: 'john@example.com',
            tag: '#user',
        };
        expect(generateUrlWithQuery('/api/users', params)).toBe(
            '/api/users?name=John+Doe&email=john%40example.com&tag=%23user'
        );
    });

    test('handles error cases', () => {
        const circularObj = { self: null };
        circularObj.self = circularObj as any;
        // Test circular reference object, should return original path
        expect(generateUrlWithQuery('/api/users', { obj: circularObj })).toBe('/api/users');
    });
});
