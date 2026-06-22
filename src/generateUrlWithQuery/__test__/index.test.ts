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
        } as Record<string, any>;
        expect(generateUrlWithQuery('/api/users', params)).toBe('/api/users?id=1');
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
        expect(
            generateUrlWithQuery('/api/users', { obj: circularObj } as Record<string, any>)
        ).toBe('/api/users');
    });

    test('handles array type parameters', () => {
        const params = {
            ids: [1, 2, 3],
            tags: ['a', 'b'],
        } as Record<string, any>;
        expect(generateUrlWithQuery('/api/users', params)).toBe(
            '/api/users?ids=1%2C2%2C3&tags=a%2Cb'
        );
    });

    test('handles empty array', () => {
        const params = {
            ids: [],
            name: 'test',
        } as Record<string, any>;
        // Empty array converts to empty string, which gets filtered out
        expect(generateUrlWithQuery('/api/users', params)).toBe('/api/users?name=test');
    });

    test('handles nested array', () => {
        const params = {
            matrix: [
                [1, 2],
                [3, 4],
            ],
            tags: [
                ['a', 'b'],
                ['c', 'd'],
            ],
        } as Record<string, any>;
        expect(generateUrlWithQuery('/api/data', params)).toBe(
            '/api/data?matrix=1%2C2%2C3%2C4&tags=a%2Cb%2Cc%2Cd'
        );
    });

    test('handles mixed type array', () => {
        const params = {
            mixed: [1, 'two', true, null, undefined],
            numbers: [1, 2.5, -3],
        } as Record<string, any>;
        expect(generateUrlWithQuery('/api/data', params)).toBe(
            '/api/data?mixed=1%2Ctwo%2Ctrue%2C%2C&numbers=1%2C2.5%2C-3'
        );
    });

    test('handles complex type array', () => {
        // Create objects with custom toString for predictable output
        class CustomObj {
            value: number;
            constructor(value: number) {
                this.value = value;
            }
            toString() {
                return `Custom(${this.value})`;
            }
        }

        const params = {
            objects: [new CustomObj(1), new CustomObj(2)],
            simpleObjects: [{ a: 1 }, { b: 2 }],
        } as Record<string, any>;

        // Expected URL encoding:
        // Custom(1) -> Custom%281%29
        // Custom(2) -> Custom%282%29
        // comma -> %2C
        // [object Object] -> %5Bobject+Object%5D
        expect(generateUrlWithQuery('/api/data', params)).toBe(
            '/api/data?objects=Custom%281%29%2CCustom%282%29&simpleObjects=%5Bobject+Object%5D%2C%5Bobject+Object%5D'
        );
    });
});
