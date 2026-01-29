type RequestData = Record<string, unknown>;

export interface DownloadOptions extends Omit<RequestInit, 'body' | 'method'> {
    fileName?: string;
}

/**
 * 从指定 URL 下载文件
 *
 * @category Utils
 * @description
 * 通过向指定 URL 发送 HTTP 请求（默认为 POST 方法）来下载文件。
 *
 * 主要功能：
 * - 支持自定义请求数据和下载文件名
 * - 自动从响应头获取文件名（如果未指定）
 * - 处理下载失败的错误情况
 *
 * 注意事项：
 * - 服务端必须返回文件流，若返回 JSON 格式将抛出错误
 * - 下载失败时会返回原始响应对象以便进一步处理
 * - 仅支持浏览器环境，依赖 document API
 *
 * @param {string} url - 下载文件的目标 URL
 * @param {RequestData} data - POST 请求携带的数据对象（可选）
 * @param {DownloadOptions} options - 下载配置项，可包含自定义文件名和其他 fetch 选项
 * @returns {Promise<Response>} 返回原始响应对象的 Promise
 *
 * @example
 * ```typescript
 * import { downloadFile } from 'dt-utils';
 *
 * // 基本用法
 * await downloadFile('https://api.example.com/download', { id: 123 });
 *
 * // 使用自定义文件名
 * await downloadFile('https://api.example.com/download',
 *   { id: 123 },
 *   { fileName: 'custom.pdf' }
 * );
 *
 * // 使用额外的 fetch 选项
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
