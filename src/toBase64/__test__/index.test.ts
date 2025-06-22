import toBase64 from '../index';

describe('toBase64', () => {
    it('should return a resolved promise with undefined when input is undefined', async () => {
        await expect(toBase64(undefined)).resolves.toBeUndefined();
    });

    it('should return a resolved promise with null when input is null', async () => {
        await expect(toBase64(null)).resolves.toBeNull();
    });

    it('should encode a string to Base64 using js-base64', async () => {
        await expect(toBase64('hello')).resolves.toBe('aGVsbG8=');
    });

    it('should encode a number to Base64 using js-base64', async () => {
        await expect(toBase64(12345)).resolves.toBe('MTIzNDU=');
    });

    it('should encode a Blob to Base64', async () => {
        const blob = new Blob(['hello world'], { type: 'text/plain' });
        const base64Result = await toBase64(blob);
        expect(base64Result.startsWith('data:text/plain;base64,')).toBe(true);
    });

    it('should encode a File to Base64', async () => {
        const file = new File(['file content'], 'test.txt', { type: 'text/plain' });
        const base64Result = await toBase64(file);
        expect(base64Result.startsWith('data:text/plain;base64,')).toBe(true);
    });

    it('should reject when FileReader encounters an error', async () => {
        const mockBlob = new Blob(['test'], { type: 'text/plain' });
        jest.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(function () {
            setTimeout(() => this.onerror && this.onerror(new Error('FileReader error')));
        });
        await expect(toBase64(mockBlob)).rejects.toThrow('FileReader error');
    });
});
