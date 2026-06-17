import toBase64 from '../index';

describe('toBase64', () => {
    it('should return undefined when input is undefined', () => {
        expect(toBase64(undefined)).toBeUndefined();
    });

    it('should return undefined when input is null', () => {
        expect(toBase64(null)).toBeUndefined();
    });

    it('should encode a string to Base64 synchronously', () => {
        expect(toBase64('hello')).toBe('aGVsbG8=');
    });

    it('should encode a Blob to Base64', async () => {
        const blob = new Blob(['hello world'], { type: 'text/plain' });
        const base64Result = await toBase64(blob);
        expect(String(base64Result).startsWith('data:text/plain;base64,')).toBe(true);
    });

    it('should encode a File to Base64', async () => {
        const file = new File(['file content'], 'test.txt', { type: 'text/plain' });
        const base64Result = await toBase64(file);
        expect(String(base64Result).startsWith('data:text/plain;base64,')).toBe(true);
    });

    it('should reject when FileReader encounters an error', async () => {
        const mockBlob = new Blob(['test'], { type: 'text/plain' });
        jest.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(function (
            this: FileReader
        ) {
            setTimeout(() => {
                if (this.onerror) {
                    this.onerror(
                        new ProgressEvent('error') as unknown as ProgressEvent<FileReader>
                    );
                }
            });
        });
        await expect(toBase64(mockBlob)).rejects.toBeDefined();
    });
});
