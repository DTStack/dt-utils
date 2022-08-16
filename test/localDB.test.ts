// storage.test.js

import LocalDB from '../src/localDB';

const fakeLocalStorage = (function () {
    let store = {};

    return {
        store,
        getItem: function (key) {
            return this[key] || null;
        },
        setItem: function (key, value) {
            this[key] = value.toString();
        },
        removeItem: function (key) {
            delete this[key];
        },
        clear: function () {
            store = {};
        },
    };
})();

describe('utils.LocalDB', () => {
    beforeAll(() => {
        const localSProxy = new Proxy(fakeLocalStorage, {
            get: function (target, property) {
                if (target.store[property]) {
                    return target.store[property];
                }
                return target[property];
            },
        });
        Object.defineProperty(window, 'localStorage', {
            value: localSProxy,
        });
    });

    test('get the key to the string storage', () => {
        window.localStorage.setItem('loglevel:webpack-dev-server', 'SILENT');
        const value = LocalDB.get('loglevel:webpack-dev-server');
        const expected = 'SILENT';
        expect(value).toEqual(expected);
    });
    test('get the key to the json string storage', () => {
        window.localStorage.setItem('jsonStr', '{"string":1}');
        const value = LocalDB.get('jsonStr');
        const expected = {
            string: 1,
        };
        expect(value).toEqual(expected);
    });
    test('remove the key', () => {
        window.localStorage.setItem('name', 'Tom');
        LocalDB.remove('name');
        const value = LocalDB.get('name');
        expect(value).toEqual('');
    });
});
