import copy from '../index';

describe('copy function', () => {
    let mockClipboard: jest.Mock;
    let mockExecCommand: jest.Mock;
    let originalClipboard: any;
    let originalIsSecureContext: boolean;

    beforeEach(() => {
        // Save original values
        originalClipboard = navigator.clipboard;
        originalIsSecureContext = window.isSecureContext;

        // Mock clipboard API
        mockClipboard = jest.fn().mockResolvedValue(undefined);
        Object.defineProperty(navigator, 'clipboard', {
            value: { writeText: mockClipboard },
            configurable: true,
        });

        // Mock execCommand
        mockExecCommand = jest.fn().mockReturnValue(true);
        document.execCommand = mockExecCommand;

        // Mock console.warn
        jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterEach(() => {
        // Restore original values
        Object.defineProperty(navigator, 'clipboard', {
            value: originalClipboard,
            configurable: true,
        });
        Object.defineProperty(window, 'isSecureContext', {
            value: originalIsSecureContext,
            configurable: true,
        });
        jest.clearAllMocks();
    });

    test('should use Clipboard API in modern browsers', async () => {
        window.isSecureContext = true;
        const text = 'test text';

        const result = await copy(text);

        expect(result).toBe(true);
        expect(mockClipboard).toHaveBeenCalledWith(text);
        expect(mockExecCommand).not.toHaveBeenCalled();
    });

    test('should fallback to execCommand when Clipboard API fails', async () => {
        window.isSecureContext = true;
        mockClipboard.mockRejectedValue(new Error('Clipboard API failed'));
        const text = 'test text';

        const result = await copy(text);

        expect(result).toBe(true);
        expect(mockClipboard).toHaveBeenCalledWith(text);
        expect(mockExecCommand).toHaveBeenCalledWith('copy');
        expect(console.warn).toHaveBeenCalled();
    });

    test('should use execCommand in non-secure context', async () => {
        window.isSecureContext = false;
        const text = 'test text';

        const result = await copy(text);

        expect(result).toBe(true);
        expect(mockClipboard).not.toHaveBeenCalled();
        expect(mockExecCommand).toHaveBeenCalledWith('copy');
    });

    test('should handle execCommand failure', async () => {
        window.isSecureContext = false;
        mockExecCommand.mockReturnValue(false);
        const text = 'test text';

        const result = await copy(text);

        expect(result).toBe(false);
        expect(mockExecCommand).toHaveBeenCalledWith('copy');
    });

    test('should handle execCommand error', async () => {
        window.isSecureContext = false;
        mockExecCommand.mockImplementation(() => {
            throw new Error('execCommand failed');
        });
        const text = 'test text';

        const result = await copy(text);

        expect(result).toBe(false);
        expect(console.warn).toHaveBeenCalled();
    });

    test('should create and remove fake element correctly', async () => {
        window.isSecureContext = false;
        const text = 'test text';
        const appendChildSpy = jest.spyOn(document.body, 'appendChild');
        const removeSpy = jest.spyOn(Element.prototype, 'remove');

        await copy(text);

        expect(appendChildSpy).toHaveBeenCalled();
        expect(removeSpy).toHaveBeenCalled();

        appendChildSpy.mockRestore();
        removeSpy.mockRestore();
    });
});
