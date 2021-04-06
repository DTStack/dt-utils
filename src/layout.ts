/**
 * 树形布局计算
 */
const layout = {
    /**
   * 获取页面宽度
   * @return {[type]} [description]
   */
    pageWidth () {
        return Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0
        );
    },

    /**
* 获取页面高度
* @return {[type]} [description]
*/
    pageHeight () {
        return Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
        );
    },
};
export default layout;


