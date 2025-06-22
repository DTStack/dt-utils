/**
 * Creates a temporary textarea element for clipboard operations
 * This element is positioned off-screen and used as an intermediary for copying text
 * when the Clipboard API is not available
 *
 * @private
 * @param {string} value - Text content to be copied to clipboard
 * @returns {HTMLTextAreaElement} A configured textarea element ready for clipboard operations
 */
function createFakeElement(value: string): HTMLTextAreaElement {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    const fakeElement = document.createElement('textarea');

    /**
     * Prevent zooming on iOS and reset box model
     * Move element out of screen horizontally
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
