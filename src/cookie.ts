const cookie = {
    /**
     * 原生 JavaScript 获取 cookie 值
     * @param name
     */
    getCookie(name: string) {
        const arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
        if (arr != null) {
            try {
                return unescape(decodeURI(arr[2]));
            } catch (error) {
                return arr[2];
            }
        }
        return null;
    },

    // 获取全部 cookie
    getAllCookies() {
        const cookies: {
            [key in string]: string;
        } = {};
        try {
            document.cookie.split('; ').forEach((item) => {
                const msg = item.split('=');
                cookies[msg[0]] = msg[1];
            });
        } catch {
            throw new Error('Cookie解析失败，请检查Cookie格式！');
        }
        return cookies;
    },

    deleteCookie(name: string, domain?: string, path?: string) {
        const d = new Date(0);
        const domainTemp = domain ? `; domain=${domain}` : '';
        const pathTemp = path || '/';
        document.cookie =
            name + '=; expires=' + d.toUTCString() + domainTemp + '; path=' + pathTemp;
    },

    deleteAllCookies(domain: string, path: string) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i]) {
                this.deleteCookie(cookies[i].split('=')[0], domain, path);
            }
        }
    },

    setCookie(
        name: string,
        value: string | number | object | boolean,
        days?: number,
        domainStr?: string
    ) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        let domain = '';
        if (domainStr) {
            domain = '; domain=' + domainStr;
        }
        document.cookie = name + '=' + value + expires + domain + '; path=/';
    },
};

export default cookie;
