[dt-utils](../globals.md) / createPDFDownload

# Function: createPDFDownload()

> **createPDFDownload**(`container`, `options`): `HTMLElement` \| `null`

Defined in: [createPDFDownload/index.ts:50](https://github.com/DTStack/dt-utils/blob/master/src/createPDFDownload/index.ts#L50)

创建用于 PDF 下载的 DOM 副本，并移除报告内容中的滚动条。

## Parameters

### container

`HTMLElement` \| `null` \| `undefined`

需要导出的报告根节点

### options

`CreatePDFDownloadOptions` = `{}`

导出 DOM 配置

#### options.width

`number` \| `string`

导出根节点宽度。默认使用原始节点的 `getBoundingClientRect().width`。

#### options.maxWidth

`string`

导出根节点最大宽度。默认移除 `max-width` 限制，避免离屏截图时内容被再次收窄。

## Returns

`HTMLElement` \| `null`

可交给 PDF 导出工具的 DOM 副本

## Description

PDF 导出通常会将页面 DOM 转成图片再写入 PDF。如果直接复用预览区域，内部组件的固定高度和 `overflow: auto/scroll` 会被一起截图，导致导出的 PDF 出现滚动条。

该函数会 clone 一份独立 DOM，展开其中的滚动容器，并保留原始节点宽度。原始 DOM 不会被修改。

## Example

```typescript
import { createPDFDownload } from '@dtinsight/dt-utils';

exportPDF({
    filename: '分析报告',
    getExportDom: () => createPDFDownload(reportRef.current),
});
```
