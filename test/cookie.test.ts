import cookie from '../src/cookie';

type TCookie = {
    name?: string;
    value?: string;
    expires?: string;
    domain?: string;
    path?: string;
};

let cookies: TCookie[] = [];

Object.defineProperty(window.document, 'cookie', {
    get() {
        return cookies.map(({ name, value }) => `${name}=${value}`).join('; ');
    },
    set(value: string) {
        const innerAttrs = ['path', 'domain', 'expires'];
        const attrs = value.split(';').map((attr) => attr.trim());
        const cookie: TCookie = {};
        attrs.forEach((attrStr) => {
            const [key, val] = attrStr.split('=');
            if (!innerAttrs.includes(key.toLocaleLowerCase())) {
                cookie['name'] = key;
                cookie['value'] = val;
            } else {
                cookie[key.toLocaleLowerCase()] = val;
            }
        });
        cookie.path = cookie.path || '/';
        const oldCookieIndex = cookies.findIndex(
            ({ name, domain, path }) =>
                name === cookie.name && domain === cookie.domain && path === cookie.path
        );
        const isDelete = cookie.expires && new Date(cookie.expires).getTime() <= Date.now();
        if (oldCookieIndex !== -1) {
            isDelete
                ? cookies.splice(oldCookieIndex, 1)
                : cookies.splice(oldCookieIndex, 1, cookie);
        } else {
            !isDelete && cookies.push(cookie);
        }
    },
});

describe('test cookie utils', () => {
    beforeEach(() => {
        cookies = [];
    });

    test('should get cookie value with name', () => {
        document.cookie = 'a=1; domain=; path=/';
        expect(cookie.getCookie('a')).toBe('1');
        expect(cookie.getCookie('a', 'a=2; c=3;')).toBe('2');
    });

    test('should return all cookies object', () => {
        document.cookie = 'a=1; domain=; path=/';
        document.cookie = 'b=2; domain=; path=/';
        expect(cookie.getAllCookies()).toEqual({ a: '1', b: '2' });
    });

    test('should support set cookie', () => {
        cookie.setCookie('a', '1');
        expect(cookie.getCookie('a')).toBe('1');

        const day = 3;
        cookie.setCookie('b', '2', day, 'test');
        const foundCookie = cookies.find((item) => item.name === 'b' && item.domain === 'test');
        expect(foundCookie).not.toBeUndefined();

        const expires = new Date(foundCookie!.expires as string).getTime();
        const expiresNow = new Date(Date.now() + day * 24 * 60 * 60 * 1000).getTime();
        expect(expires).toBeLessThan(expiresNow);
    });

    test('should support delete cookie', () => {
        cookie.setCookie('a', 1);
        cookie.deleteCookie('a');
        expect(cookie.getCookie('a')).toBeNull();

        cookie.setCookie('b', 1, 3, 'test', '/test');
        cookie.deleteCookie('b');
        expect(cookie.getCookie('b')).not.toBeNull();
        cookie.deleteCookie('b', 'test', '/test');
        expect(cookie.getCookie('b')).toBeNull();
    });

    test('should suppport delete all cookies', () => {
        cookie.setCookie('a', 1, 3, 'test', '/');
        cookie.setCookie('b', 2, 3, 'test', '/');
        cookie.deleteAllCookies('', '/');
        expect(cookie.getAllCookies()).not.toEqual({});
        cookie.deleteAllCookies('test', '/');
        expect(cookie.getAllCookies()).toEqual({});
    });
});
