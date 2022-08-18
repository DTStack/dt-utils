import Utils from './utils';

/**
 * 封装 localStorage
 * 增加对 JSON 对象的转换
 * @return {[type]} [description]
 */
const localDB = {
    /**
     * 按 key 存贮数据 value 到 localStorage
     * @param {String} key   存贮数据的唯一标识
     * @param {String, Object} value 所要存贮的数据
     */
    set(key: string | number, value: any) {
        if (!value) delete window.localStorage[key];
        else {
            const val = typeof value === 'object' ? JSON.stringify(value) : value;
            window.localStorage[key] = val;
        }
    },

    /**
     * 通过 key 从 localStorage 获取数据
     * @param  {String} key  获取数据的唯一标识
     * @return {String, Object}  返回空、字符串或者对象
     */
    get(key: string | number) {
        const str = window.localStorage[key] || '';
        return Utils.isJSONStr(str) ? JSON.parse(str) : str;
    },

    /**
     * 通过 key 从 localStorage 删除数据
     * @param  {String} key  删除数据的唯一标识
     */
    remove(key: string | number) {
        delete window.localStorage[key];
    },

    /**
     * 清空 localStorage
     * @return 无返回 NULL
     */
    clear() {
        window.localStorage.clear();
    },
};

export default localDB;
