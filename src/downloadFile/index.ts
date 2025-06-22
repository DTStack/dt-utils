type RequestData = Record<string, unknown>;

export interface DownloadOptions extends Omit<RequestInit, 'body' | 'method'> {
    fileName?: string;
}

/**
 * Downloads a file from the specified URL using a POST request
 *
 * @category Utils
 * @description
 * This function sends a POST request to the specified URL with the provided data.
 * The response is expected to be a file. If the response is successful, the file is downloaded
 * with the specified filename. If the response is not successful, an error is thrown.
 *
 * Note: This function assumes that the server responds with a file. If the server responds
 * with a different content type, an error will be thrown.
 *
 * @param {string} url - The URL to download the file from
 * @param {RequestData} data - The data to be sent in the request body (optional)
 * @param {DownloadOptions} options - Request options including optional fileName
 * @returns {Promise<Response>} Promise that resolves with the fetch Response object
 *
 * @example
 * ```typescript
 * import { downloadFile } from 'dt-utils';
 *
 * // Basic usage
 * await downloadFile('https://api.example.com/download', { id: 123 });
 *
 * // With custom filename
 * await downloadFile('https://api.example.com/download',
 *   { id: 123 },
 *   { fileName: 'custom.pdf' }
 * );
 *
 * // With additional fetch options
 * await downloadFile('https://api.example.com/download',
 *   { id: 123 },
 *   {
 *     fileName: 'report.xlsx',
 *     headers: {
 *       'Authorization': 'Bearer token123'
 *     }
 *   }
 * );
 * ```
 */
const downloadFile = async (
    url: string,
    data: RequestData = {},
    options: DownloadOptions = {}
): Promise<Response> => {
    const { fileName, ...restOptions } = options;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        ...restOptions,
    });
    const cloneResponse = response.clone();

    if (!response.ok) {
        throw cloneResponse;
    }

    const contentType = response.headers.get('Content-Type') || '';
    if (contentType.includes('application/json')) {
        throw cloneResponse;
    }

    let finalFileName = fileName as string;
    if (!fileName) {
        const disposition = response.headers.get('Content-Disposition') || '';
        const fileNameMatch = disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        finalFileName = fileNameMatch
            ? decodeURIComponent(fileNameMatch[1]?.replace(/['"]/g, '') || '')
            : 'download_file';
    }

    try {
        const blob = await response.blob();
        const href = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = href;
        link.download = finalFileName;
        link.style.display = 'none';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(href);
        return cloneResponse;
    } catch (error) {
        console.warn('Failed to download file:', error);
        throw cloneResponse;
    }
};

export default downloadFile;
