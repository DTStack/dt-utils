import createFakeElement from './createFakeElement';
/**
 * A robust cross-browser clipboard utility function.
 *
 * @category Utils
 * @description
 * This function provides a consistent and reliable way to copy text to the clipboard across different browsers.
 * It leverages the modern Clipboard API when available, falling back to the execCommand('copy') method for legacy browsers.
 *
 * @param {string} text - The text content to copy
 * @returns {Promise<boolean>} Copy operation result
 *   - Resolves to true if copy succeeds
 *   - Resolves to false if copy fails
 *
 * @example
 * ```typescript
 * import { copy } from 'dt-utils';
 *
 * // Simple copy
 * const text = "Hello, clipboard!";
 * const success = await copy(text);
 * console.log(success ? "Copied!" : "Copy failed");
 *
 * // Copy with error handling
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
 * // Copy in button click handler
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
