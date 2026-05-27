import Cookies from '..';

describe('Cookies utils', () => {
    beforeEach(() => {
        // 清空测试 cookie
        document.cookie.split(';').forEach((cookie) => {
            const name = cookie.split('=')[0]?.trim();

            if (name) {
                document.cookie = `${name}=; expires=${new Date(0).toUTCString()}; path=/`;
            }
        });
    });

    afterEach(() => {
        window.history.replaceState({}, '', '/app');
        Cookies.remove('scopedToken', { path: '/app' });
        Cookies.remove('scopedKeep', { path: '/app' });
        window.history.replaceState({}, '', '/');
    });

    it('should expose cookie methods as static members on class-like export', () => {
        expect(typeof Cookies).toBe('function');
        expect(typeof Cookies.get).toBe('function');
        expect(typeof Cookies.set).toBe('function');
        expect(typeof Cookies.remove).toBe('function');
        expect(typeof Cookies.clear).toBe('function');
    });

    describe('get', () => {
        it('should get cookie value', () => {
            document.cookie = 'token=123; path=/';

            expect(Cookies.get('token')).toBe('123');
        });

        it('should get all cookies when no name is provided', () => {
            Cookies.set('token', '123');
            Cookies.set('user', 'tom');

            const result = Cookies.get();

            expect(result).toEqual({
                token: '123',
                user: 'tom',
            });
        });

        it('should return undefined when cookie does not exist', () => {
            expect(Cookies.get('not-exist')).toBeUndefined();
        });
    });

    describe('set', () => {
        it('should set cookie', () => {
            Cookies.set('token', '123');

            expect(document.cookie).toContain('token=123');
            expect(Cookies.get('token')).toBe('123');
        });

        it('should set cookie with custom path', () => {
            Cookies.set('user', 'tom', {
                path: '/',
            });

            expect(Cookies.get('user')).toBe('tom');
        });

        it('should set cookie with expires as number', () => {
            Cookies.set('token', '123', { expires: 7 });

            expect(Cookies.get('token')).toBe('123');
        });

        it('should set cookie with expires as Date', () => {
            const futureDate = new Date();
            futureDate.setDate(futureDate.getDate() + 7);

            Cookies.set('token', '123', { expires: futureDate });

            expect(Cookies.get('token')).toBe('123');
        });

        it('should set cookie with secure option without throwing', () => {
            expect(() => Cookies.set('token', '123', { secure: true })).not.toThrow();
        });

        it('should set cookie with sameSite option', () => {
            Cookies.set('token', '123', { sameSite: 'Lax' });

            expect(Cookies.get('token')).toBe('123');
        });

        it('should set cookie with domain option', () => {
            Cookies.set('token', '123', { domain: 'localhost' });

            expect(Cookies.get('token')).toBe('123');
        });

        it('should set cookie with multiple options', () => {
            const futureDate = new Date();
            futureDate.setDate(futureDate.getDate() + 7);

            Cookies.set('token', '123', {
                path: '/',
                expires: futureDate,
                sameSite: 'Strict',
            });

            expect(Cookies.get('token')).toBe('123');
        });

        it('should override default path option with custom path', () => {
            window.history.replaceState({}, '', '/app');

            Cookies.set('token', '123', { path: '/app' });

            expect(Cookies.get('token')).toBe('123');
            expect(document.cookie).toContain('token=123');
        });

        it('should set multiple cookies from a record', () => {
            Cookies.set({ token: '123', user: 'tom' });

            expect(Cookies.get('token')).toBe('123');
            expect(Cookies.get('user')).toBe('tom');
        });

        it('should set multiple cookies from a record with shared options', () => {
            Cookies.set({ token: '123', user: 'tom' }, { sameSite: 'Lax' });

            expect(Cookies.get('token')).toBe('123');
            expect(Cookies.get('user')).toBe('tom');
        });

        it('should set multiple cookies from a record with expires option', () => {
            const futureDate = new Date();
            futureDate.setDate(futureDate.getDate() + 7);

            Cookies.set({ token: '123', user: 'tom' }, { expires: futureDate });

            expect(Cookies.get('token')).toBe('123');
            expect(Cookies.get('user')).toBe('tom');
        });
    });

    describe('remove', () => {
        it('should remove cookie', () => {
            Cookies.set('token', '123');

            expect(Cookies.get('token')).toBe('123');

            Cookies.remove('token');

            expect(Cookies.get('token')).toBeUndefined();
        });

        it('should remove cookie with custom path option', () => {
            window.history.replaceState({}, '', '/app');

            Cookies.set('token', '123', { path: '/app' });

            expect(Cookies.get('token')).toBe('123');

            Cookies.remove('token', { path: '/app' });

            expect(Cookies.get('token')).toBeUndefined();
        });

        it('should remove cookie with domain option', () => {
            Cookies.set('token', '123', { domain: 'localhost' });

            expect(Cookies.get('token')).toBe('123');

            Cookies.remove('token', { domain: 'localhost' });

            expect(Cookies.get('token')).toBeUndefined();
        });

        it('should remove multiple cookies by array', () => {
            Cookies.set('token', '123');
            Cookies.set('user', 'tom');

            expect(Cookies.get('token')).toBe('123');
            expect(Cookies.get('user')).toBe('tom');

            Cookies.remove(['token', 'user']);

            expect(Cookies.get('token')).toBeUndefined();
            expect(Cookies.get('user')).toBeUndefined();
        });

        it('should remove multiple cookies with shared options', () => {
            Cookies.set('token', '123', { path: '/app' });
            Cookies.set('user', 'tom', { path: '/app' });

            Cookies.remove(['token', 'user'], { path: '/app' });

            expect(Cookies.get('token')).toBeUndefined();
            expect(Cookies.get('user')).toBeUndefined();
        });
    });

    describe('clear', () => {
        it('should clear all cookies except specified keys', () => {
            Cookies.set('token', '123');
            Cookies.set('userInfo', 'tom');
            Cookies.set('permission', 'admin');

            Cookies.clear?.(['userInfo']);

            expect(Cookies.get('token')).toBeUndefined();
            expect(Cookies.get('userInfo')).toBe('tom');
            expect(Cookies.get('permission')).toBeUndefined();
        });

        it('should clear cookies with custom path only when matching options are provided', () => {
            window.history.replaceState({}, '', '/app');

            Cookies.set('scopedToken', '123', { path: '/app' });
            Cookies.set('scopedKeep', 'tom', { path: '/app' });

            Cookies.clear?.(['scopedKeep']);

            expect(Cookies.get('scopedToken')).toBe('123');
            expect(Cookies.get('scopedKeep')).toBe('tom');

            Cookies.clear?.(['scopedKeep'], { path: '/app' });

            expect(Cookies.get('scopedToken')).toBeUndefined();
            expect(Cookies.get('scopedKeep')).toBe('tom');
        });

        it('should clear all cookies when no keys are provided', () => {
            Cookies.set('token', '123');
            Cookies.set('userInfo', 'tom');
            Cookies.set('permission', 'admin');

            Cookies.clear?.([]);

            expect(Cookies.get('token')).toBeUndefined();
            expect(Cookies.get('userInfo')).toBeUndefined();
            expect(Cookies.get('permission')).toBeUndefined();
        });

        it('should pass domain option through to remove when clearing', () => {
            Cookies.set('token', '123', { domain: 'localhost' });
            Cookies.set('userInfo', 'tom', { domain: 'localhost' });

            Cookies.clear?.([], { domain: 'localhost' });

            expect(Cookies.get('token')).toBeUndefined();
            expect(Cookies.get('userInfo')).toBeUndefined();
        });

        it('should preserve specified keys while passing options through', () => {
            window.history.replaceState({}, '', '/app');

            Cookies.set('token', '123', { path: '/app' });
            Cookies.set('keep', 'keep', { path: '/app' });
            Cookies.set('info', 'tom', { path: '/app' });

            Cookies.clear?.(['keep'], { path: '/app' });

            expect(Cookies.get('token')).toBeUndefined();
            expect(Cookies.get('keep')).toBe('keep');
            expect(Cookies.get('info')).toBeUndefined();
        });
    });
});
