import getQueryParameters from '..';

describe('getQueryParameters', () => {
    test('parses basic query parameters correctly', () => {
        const search = '?a=1&b=2&c=hello';
        expect(getQueryParameters(search)).toEqual({
            a: 1,
            b: 2,
            c: 'hello',
        });
    });

    test('handles null and undefined values', () => {
        const search = '?a=null&b=undefined&c=value';
        expect(getQueryParameters(search)).toEqual({
            a: null,
            b: undefined,
            c: 'value',
        });
    });

    test('parses JSON values correctly', () => {
        const search = '?obj={"name":"John","age":30}&arr=[1,2,3]';
        expect(getQueryParameters(search)).toEqual({
            obj: { name: 'John', age: 30 },
            arr: [1, 2, 3],
        });
    });

    test('handles invalid JSON gracefully', () => {
        const search = '?invalid={not:json}&valid=string';
        expect(getQueryParameters(search)).toEqual({
            invalid: '{not:json}',
            valid: 'string',
        });
    });

    test('handles URL encoded characters', () => {
        const search = '?name=John%20Doe&email=john%40example.com';
        expect(getQueryParameters(search)).toEqual({
            name: 'John Doe',
            email: 'john@example.com',
        });
    });

    test('handles empty search string', () => {
        expect(getQueryParameters('')).toEqual({});
        expect(getQueryParameters('?')).toEqual({});
    });

    test('handles duplicate parameters', () => {
        const search = '?key=first&key=second';
        expect(getQueryParameters(search)).toEqual({
            key: 'second',
        });
    });

    test('handles boolean values', () => {
        const search = '?isActive=true&isDeleted=false';
        expect(getQueryParameters(search)).toEqual({
            isActive: true,
            isDeleted: false,
        });
    });

    test('handles numeric values', () => {
        const search = '?integer=42&float=3.14&scientific=1e-10';
        expect(getQueryParameters(search)).toEqual({
            integer: 42,
            float: 3.14,
            scientific: 1e-10,
        });
    });
});
