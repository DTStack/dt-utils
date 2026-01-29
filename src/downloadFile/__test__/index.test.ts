import downloadFile from '../index';

describe('downloadFile', () => {
    let mockFetch: jest.Mock;
    let mockCreateObjectURL: jest.Mock;
    let mockRevokeObjectURL: jest.Mock;
    let mockAppendChild: jest.SpyInstance;
    let mockRemoveChild: jest.SpyInstance;
    let mockClick: jest.SpyInstance;

    beforeEach(() => {
        // Mock fetch API
        mockFetch = jest.fn();
        global.fetch = mockFetch;

        // Mock URL methods
        mockCreateObjectURL = jest.fn(() => 'blob:test-url');
        mockRevokeObjectURL = jest.fn();
        global.URL.createObjectURL = mockCreateObjectURL;
        global.URL.revokeObjectURL = mockRevokeObjectURL;

        // Mock DOM methods
        mockAppendChild = jest.spyOn(document.body, 'appendChild');
        mockRemoveChild = jest.spyOn(document.body, 'removeChild');
        mockClick = jest.spyOn(HTMLElement.prototype, 'click');

        // Mock console.warn
        jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('successfully download file', async () => {
        const mockResponse = {
            ok: true,
            headers: new Headers({
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': 'attachment; filename="test.txt"',
            }),
            blob: jest.fn().mockResolvedValue(new Blob(['test content'])),
            clone: () => mockResponse,
        };
        mockFetch.mockResolvedValue(mockResponse);

        const response = await downloadFile('https://api.example.com/download', { id: '123' });

        expect(mockFetch).toHaveBeenCalledWith('https://api.example.com/download', {
            method: 'POST',
            body: JSON.stringify({ id: '123' }),
        });
        expect(mockCreateObjectURL).toHaveBeenCalled();
        expect(mockAppendChild).toHaveBeenCalled();
        expect(mockClick).toHaveBeenCalled();
        expect(mockRemoveChild).toHaveBeenCalled();
        expect(mockRevokeObjectURL).toHaveBeenCalled();
        expect(response).toBe(mockResponse);
    });

    test('use custom filename', async () => {
        const mockResponse = {
            ok: true,
            headers: new Headers({ 'Content-Type': 'application/octet-stream' }),
            blob: jest.fn().mockResolvedValue(new Blob(['test content'])),
            clone: () => mockResponse,
        };
        mockFetch.mockResolvedValue(mockResponse);

        await downloadFile('https://api.example.com/download', {}, { fileName: 'custom.txt' });

        const linkElement = mockAppendChild.mock.calls[0][0];
        expect(linkElement.download).toBe('custom.txt');
    });

    test('extract filename from Content-Disposition', async () => {
        const mockResponse = {
            ok: true,
            headers: new Headers({
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': 'attachment; filename="server-file.txt"',
            }),
            blob: jest.fn().mockResolvedValue(new Blob(['test content'])),
            clone: () => mockResponse,
        };
        mockFetch.mockResolvedValue(mockResponse);

        await downloadFile('https://api.example.com/download');

        const linkElement = mockAppendChild.mock.calls[0][0];
        expect(linkElement.download).toBe('server-file.txt');
    });

    test('handle unsuccessful response', async () => {
        const mockResponse = {
            ok: false,
            status: 404,
            clone: () => mockResponse,
        };
        mockFetch.mockResolvedValue(mockResponse);

        await expect(downloadFile('https://api.example.com/download')).rejects.toEqual(
            mockResponse
        );
    });

    test('handle JSON response (should throw error)', async () => {
        const mockResponse = {
            ok: true,
            headers: new Headers({ 'Content-Type': 'application/json' }),
            clone: () => mockResponse,
        };
        mockFetch.mockResolvedValue(mockResponse);

        await expect(downloadFile('https://api.example.com/download')).rejects.toEqual(
            mockResponse
        );
    });

    test('handle blob() failure', async () => {
        const mockResponse = {
            ok: true,
            headers: new Headers({ 'Content-Type': 'application/octet-stream' }),
            blob: jest.fn().mockRejectedValue(new Error('Blob error')),
            clone: () => mockResponse,
        };
        mockFetch.mockResolvedValue(mockResponse);

        await expect(downloadFile('https://api.example.com/download')).rejects.toEqual(
            mockResponse
        );
        expect(console.warn).toHaveBeenCalledWith('Failed to download file:', expect.any(Error));
    });
});
