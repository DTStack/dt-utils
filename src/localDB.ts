import Utils from './utils';
/**
 * 封装localStorage
 * 增加对JSON对象的转换
 * @author: Ziv
 * @return {[type]} [description]
 */
const localDb = {
    /**
     * 按key存贮数据value到localStorage
     * @param {String} key   存贮数据的唯一标识
     * @param {String, Object} value 所要存贮的数据
     */
    set (key: string|number, value: any) {
        if (!value) delete window.localStorage[key];
        else {
            const val = typeof value === 'object'
                ? JSON.stringify(value) : value;
            window.localStorage[key] = val;
        }
    },

    /**
     * 通过key从localStorage获取数据
     * @param  {String} key  获取数据的可以标识
     * @return {String, Object}  返回空，字符串或者对象
     */
    get (key: string|number) {
        const str = window.localStorage[key] || '';
        return Utils.isJSONStr(str) ? JSON.parse(str) : str;
    },
    /**
     * 清空localStorage
     * @return 无返回NULL
     */
    clear () {
        window.localStorage.clear();
    },
};

export default localDb;
