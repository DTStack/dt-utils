import createFakeElement from './createFakeElement';
/**
 * 浏览器剪贴板复制工具函数。
 *
 * @category Utils
 * @description
 * 提供一个一致且可靠的方式来在不同浏览器中复制文本到剪贴板。
 * 它优先使用现代的 Clipboard API，当不可用时会降级使用 execCommand('copy') 方法来支持旧版浏览器。
 *
 * @param {string} text - 要复制的文本内容
 * @returns {Promise<boolean>} 复制操作结果
 *   - 复制成功时返回 true
 *   - 复制失败时返回 false
 *
 * @example
 * ```typescript
 * import { copy } from 'dt-utils';
 *
 * // 简单复制
 * const text = "Hello, clipboard!";
 * const success = await copy(text);
 * console.log(success ? "Copied!" : "Copy failed");
 *
 * // 带错误处理的复制
 * try {
 *   const text = "Sensitive data";
 *   if (await copy(text)) {
 *     showSuccessToast("Content copied!");
 *   } else {
 *     showErrorToast("Copy failed");
 *   }
 * } catch (error) {
 *   handleError(error);
 * }
 *
 * // 在按钮点击处理程序中复制
 * button.addEventListener('click', async () => {
 *   const success = await copy('Click to copy text');
 *   button.textContent = success ? 'Copied!' : 'Try again';
 *   setTimeout(() => {
 *     button.textContent = 'Copy';
 *   }, 2000);
 * });
 * ```
 */
async function copy(text: string): Promise<boolean> {
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.warn('copy error!', err);
        }
    }

    const fakeElement = createFakeElement(text);
    document.body.appendChild(fakeElement);

    try {
        fakeElement.focus();
        fakeElement.select();

        const succeeded = document.execCommand('copy');
        fakeElement.remove();
        return succeeded;
    } catch (err) {
        console.warn('copy error!', err);
        fakeElement.remove();
        return false;
    }
}

export default copy;
