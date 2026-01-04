import sessionDB from '../index';

describe('sessionDB', () => {
    beforeEach(() => {
        window.sessionStorage.clear();
    });

    test('set and get string value', () => {
        sessionDB.set('testKey', 'testValue');
        expect(sessionDB.get('testKey')).toBe('testValue');
    });

    test('set and get object value', () => {
        const obj = { name: 'John', age: 30 };
        sessionDB.set('user', obj);
        expect(sessionDB.get('user')).toEqual(obj);
    });

    test('set adds multiple keys to localStorage', () => {
        sessionDB.set({
            key1: 'value1',
            key2: { name: 'Bob', age: 30 },
            key3: true,
        });

        expect(sessionDB.get('key1')).toBe('value1');
        expect(sessionDB.get('key2')).toEqual({ name: 'Bob', age: 30 });
        expect(sessionDB.get('key3')).toBe(true);
    });

    test('get non-existent key returns null', () => {
        expect(sessionDB.get('nonExistentKey')).toBeNull();
    });

    test('set null value removes the key', () => {
        sessionDB.set('testKey', 'testValue');
        sessionDB.set('testKey', null);
        expect(sessionDB.get('testKey')).toBeNull();
    });

    test('remove key', () => {
        sessionDB.set('testKey', 'testValue');
        sessionDB.remove('testKey');
        expect(sessionDB.get('testKey')).toBeNull();
    });

    test('remove multiple keys', () => {
        sessionDB.set('token', 'abc123');
        sessionDB.set('lastLogin', '2024-01-01');

        sessionDB.remove(['token', 'lastLogin']);

        expect(sessionDB.get('token')).toBeNull();
        expect(sessionDB.get('lastLogin')).toBeNull();
    });

    test('should do nothing when removing non-existing keys', () => {
        sessionDB.set('userProfile', 'test');

        expect(() => {
            sessionDB.remove(['not-exist-1', 'not-exist-2']);
        }).not.toThrow();

        expect(sessionDB.get('userProfile')).toBe('test');
    });
    test('should safely handle empty array input', () => {
        sessionDB.set('token', 'abc123');

        expect(() => {
            sessionDB.remove([]);
        }).not.toThrow();

        expect(sessionDB.get('token')).toBe('abc123');
        expect(sessionDB.get('token')).toBe('abc123');
    });

    test('clear removes all keys', () => {
        sessionDB.set('key1', 'value1');
        sessionDB.set('key2', 'value2');
        sessionDB.clear();
        expect(sessionDB.get('key1')).toBeNull();
        expect(sessionDB.get('key2')).toBeNull();
    });

    test('clear keeps specified keys', () => {
        sessionDB.set('key1', 'value1');
        sessionDB.set('key2', 'value2');
        sessionDB.set('key3', 'value3');
        sessionDB.clear(['key1']);

        expect(sessionDB.get('key1')).toBe('value1');
        expect(sessionDB.get('key2')).toBeNull();
        expect(sessionDB.get('key3')).toBeNull();
    });

    test('get returns original string if JSON parsing fails', () => {
        sessionDB.set('invalidJson', 'not a json');
        expect(sessionDB.get('invalidJson')).toBe('not a json');
    });

    test('set and get undefined value', () => {
        sessionDB.set('testKey', undefined);
        expect(sessionDB.get('testKey')).toBeNull();
    });
});
