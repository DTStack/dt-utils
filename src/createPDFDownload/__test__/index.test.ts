import createPDFDownload from '../index';

describe('createPDFDownload', () => {
    test('return null when container is empty', () => {
        expect(createPDFDownload(null)).toBeNull();
        expect(createPDFDownload(undefined)).toBeNull();
    });

    test('clone dom without changing source element', () => {
        const container = document.createElement('div');
        container.innerHTML = '<section><p>报告内容</p></section>';

        const exportDom = createPDFDownload(container);

        expect(exportDom).not.toBe(container);
        expect(exportDom?.innerHTML).toBe(container.innerHTML);
        expect(container.getAttribute('style')).toBeNull();
    });

    test('expand scroll containers in cloned dom', () => {
        const container = document.createElement('div');
        container.innerHTML = `
            <section class="report-section" style="overflow: auto; height: 120px; max-height: 120px;">
                <div class="report-content" style="overflow-y: scroll; height: 80px;">报告内容</div>
            </section>
        `;

        const exportDom = createPDFDownload(container);
        const sourceSection = container.querySelector<HTMLElement>('.report-section');
        const exportSection = exportDom?.querySelector<HTMLElement>('.report-section');
        const exportContent = exportDom?.querySelector<HTMLElement>('.report-content');

        expect(sourceSection?.style.overflow).toBe('auto');
        expect(sourceSection?.style.height).toBe('120px');
        expect(exportSection?.style.height).toBe('auto');
        expect(exportSection?.style.maxHeight).toBe('none');
        expect(exportSection?.style.overflow).toBe('visible');
        expect(exportSection?.style.overflowX).toBe('visible');
        expect(exportSection?.style.overflowY).toBe('visible');
        expect(exportContent?.style.height).toBe('auto');
        expect(exportContent?.style.overflowY).toBe('visible');
    });

    test('set root width from container rect by default', () => {
        const container = document.createElement('div');
        jest.spyOn(container, 'getBoundingClientRect').mockReturnValue({
            width: 742,
            height: 100,
            top: 0,
            right: 742,
            bottom: 100,
            left: 0,
            x: 0,
            y: 0,
            toJSON: jest.fn(),
        });

        const exportDom = createPDFDownload(container);

        expect(exportDom?.style.width).toBe('742px');
        expect(exportDom?.style.maxWidth).toBe('none');
    });

    test('support custom root width and max width', () => {
        const container = document.createElement('div');

        const exportDom = createPDFDownload(container, {
            width: '100%',
            maxWidth: '960px',
        });

        expect(exportDom?.style.width).toBe('100%');
        expect(exportDom?.style.maxWidth).toBe('960px');
    });
});
