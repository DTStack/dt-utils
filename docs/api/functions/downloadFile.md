[dt-utils](../globals.md) / downloadFile

# Function: downloadFile()

> **downloadFile**(`url`, `data`, `options`): `Promise`\<`Response`\>

Defined in: [downloadFile/index.ts:54](https://github.com/DTStack/dt-utils/blob/master/src/downloadFile/index.ts#L54)

从指定 URL 下载文件

## Parameters

### url

`string`

下载文件的目标 URL

### data

`RequestData` = `{}`

POST 请求携带的数据对象（可选）

### options

`DownloadOptions` = `{}`

下载配置项，可包含自定义文件名和其他 fetch 选项

## Returns

`Promise`\<`Response`\>

返回原始响应对象的 Promise

## Description

通过向指定 URL 发送 HTTP 请求（默认为 POST 方法）来下载文件。

主要功能：
- 支持自定义请求数据和下载文件名
- 自动从响应头获取文件名（如果未指定）
- 处理下载失败的错误情况

注意事项：
- 服务端必须返回文件流，若返回 JSON 格式将抛出错误
- 下载失败时会返回原始响应对象以便进一步处理
- 仅支持浏览器环境，依赖 document API

## Example

```typescript
import { downloadFile } from 'dt-utils';

// 基本用法
await downloadFile('https://api.example.com/download', { id: 123 });

// 使用自定义文件名
await downloadFile('https://api.example.com/download',
  { id: 123 },
  { fileName: 'custom.pdf' }
);

// 使用额外的 fetch 选项
await downloadFile('https://api.example.com/download',
  { id: 123 },
  {
    fileName: 'report.xlsx',
    headers: {
      'Authorization': 'Bearer token123'
    }
  }
);
```
