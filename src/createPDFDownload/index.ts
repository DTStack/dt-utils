export interface CreatePDFDownloadOptions {
    /**
     * 导出根节点宽度。默认使用原始节点的 getBoundingClientRect().width。
     */
    width?: number | string;
    /**
     * 导出根节点最大宽度。默认移除 max-width 限制，避免离屏截图时内容被再次收窄。
     */
    maxWidth?: string;
}

const SCROLL_OVERFLOW_REGEXP = /auto|scroll/;

function isScrollContainer(element: HTMLElement) {
    const { overflow, overflowX, overflowY } = window.getComputedStyle(element);
    return [overflow, overflowX, overflowY].some((value) => SCROLL_OVERFLOW_REGEXP.test(value));
}

function expandScrollContainer(element: HTMLElement) {
    element.style.setProperty('height', 'auto', 'important');
    element.style.setProperty('max-height', 'none', 'important');
    element.style.setProperty('overflow', 'visible', 'important');
    element.style.setProperty('overflow-x', 'visible', 'important');
    element.style.setProperty('overflow-y', 'visible', 'important');
}

/**
 * 创建用于 PDF 下载的 DOM 副本，并移除报告内容中的滚动条。
 *
 * @category Utils
 * @description
 * PDF 导出通常会将页面 DOM 转成图片再写入 PDF。如果直接复用预览区域，
 * 内部组件的固定高度和 `overflow: auto/scroll` 会被一起截图，导致导出的 PDF
 * 出现滚动条。该函数会 clone 一份独立 DOM，展开其中的滚动容器，并保留原始节点宽度。
 *
 * @param {HTMLElement | null | undefined} container - 需要导出的报告根节点
 * @param {CreatePDFDownloadOptions} options - 导出 DOM 配置
 * @returns {HTMLElement | null} 可交给 PDF 导出工具的 DOM 副本
 *
 * @example
 * ```typescript
 * import { createPDFDownload } from '@dtinsight/dt-utils';
 *
 * exportPDF({
 *   filename: '分析报告',
 *   getExportDom: () => createPDFDownload(reportRef.current),
 * });
 * ```
 */
const createPDFDownload = (
    container?: HTMLElement | null,
    options: CreatePDFDownloadOptions = {}
): HTMLElement | null => {
    if (!container) return null;

    const exportDom = container.cloneNode(true) as HTMLElement;
    const sourceElements = [container].concat(
        Array.from(container.querySelectorAll<HTMLElement>('*'))
    );
    const exportElements = [exportDom].concat(
        Array.from(exportDom.querySelectorAll<HTMLElement>('*'))
    );

    sourceElements.forEach((sourceElement, index) => {
        const exportElement = exportElements[index];
        if (!exportElement || !isScrollContainer(sourceElement)) return;

        expandScrollContainer(exportElement);
    });

    const width =
        options.width === undefined ? container.getBoundingClientRect().width : options.width;
    if (typeof width === 'number') {
        exportDom.style.width = `${width}px`;
    } else if (width) {
        exportDom.style.width = width;
    }

    exportDom.style.maxWidth = options.maxWidth || 'none';

    return exportDom;
};

export default createPDFDownload;
