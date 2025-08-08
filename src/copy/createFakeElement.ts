/**
 * 创建一个用于剪贴板操作的临时文本区域元素
 *
 * @private
 * @param {string} value - 要复制到剪贴板的文本内容
 * @returns {HTMLTextAreaElement} 一个配置好的、可用于剪贴板操作的文本区域元素
 */
function createFakeElement(value: string): HTMLTextAreaElement {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    const fakeElement = document.createElement('textarea');

    /**
     * 防止在iOS上缩放并重置盒模型
     * 将元素水平移出屏幕
     */
    Object.assign(fakeElement.style, {
        visibility: 'hidden',
        opacity: '0',
        position: 'absolute',
        top: `${window.pageYOffset || document.documentElement.scrollTop}px`,
        [isRTL ? 'right' : 'left']: '-9999px',
        padding: '0',
        margin: '0',
        fontSize: '12pt',
        border: '0',
    });

    fakeElement.setAttribute('readonly', '');
    fakeElement.value = value;

    return fakeElement;
}

export default createFakeElement;
