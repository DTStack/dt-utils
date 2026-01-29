import localDB from '../index';

describe('localDB', () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    test('set and get string value', () => {
        localDB.set('testKey', 'testValue');
        expect(localDB.get('testKey')).toBe('testValue');
    });

    test('set and get object value', () => {
        const obj = { name: 'Alice', age: 25 };
        localDB.set('user', obj);
        expect(localDB.get('user')).toEqual(obj);
    });

    test('set adds multiple keys to localStorage', () => {
        localDB.set({
            key1: 'value1',
            key2: { name: 'Bob', age: 30 },
            key3: true,
        });

        expect(localDB.get('key1')).toBe('value1');
        expect(localDB.get('key2')).toEqual({ name: 'Bob', age: 30 });
        expect(localDB.get('key3')).toBe(true);
    });

    test('get non-existent key returns null', () => {
        expect(localDB.get('nonExistentKey')).toBeNull();
    });

    test('set null value removes the key', () => {
        localDB.set('testKey', 'testValue');
        localDB.set('testKey', null);
        expect(localDB.get('testKey')).toBeNull();
    });

    test('remove key', () => {
        localDB.set('testKey', 'testValue');
        localDB.remove('testKey');
        expect(localDB.get('testKey')).toBeNull();
    });

    test('remove multiple keys', () => {
        localDB.set('token', 'abc123');
        localDB.set('lastLogin', '2024-01-01');

        localDB.remove(['token', 'lastLogin']);

        expect(localDB.get('token')).toBeNull();
        expect(localDB.get('lastLogin')).toBeNull();
    });

    test('should do nothing when removing non-existing keys', () => {
        localDB.set('userProfile', 'test');

        expect(() => {
            localDB.remove(['not-exist-1', 'not-exist-2']);
        }).not.toThrow();

        expect(localDB.get('userProfile')).toBe('test');
    });
    test('should safely handle empty array input', () => {
        localDB.set('token', 'abc123');

        expect(() => {
            localDB.remove([]);
        }).not.toThrow();

        expect(localDB.get('token')).toBe('abc123');
        expect(localDB.get('token')).toBe('abc123');
    });

    test('clear removes all keys', () => {
        localDB.set('key1', 'value1');
        localDB.set('key2', 'value2');
        localDB.clear();
        expect(localDB.get('key1')).toBeNull();
        expect(localDB.get('key2')).toBeNull();
    });

    test('clear keeps specified keys', () => {
        localDB.set('key1', 'value1');
        localDB.set('key2', 'value2');
        localDB.set('key3', 'value3');
        localDB.clear(['key1']);

        expect(localDB.get('key1')).toBe('value1');
        expect(localDB.get('key2')).toBeNull();
        expect(localDB.get('key3')).toBeNull();
    });

    test('get returns original string if JSON parsing fails', () => {
        localDB.set('invalidJson', 'not a json');
        expect(localDB.get('invalidJson')).toBe('not a json');
    });

    test('set and get undefined value', () => {
        localDB.set('testKey', undefined);
        expect(localDB.get('testKey')).toBeNull();
    });
});
