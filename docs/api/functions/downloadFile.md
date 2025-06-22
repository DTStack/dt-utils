[dt-utils](../globals.md) / downloadFile

# Function: downloadFile()

> **downloadFile**(`url`, `data`, `options`): `Promise`\<`Response`\>

Defined in: [downloadFile/index.ts:49](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/downloadFile/index.ts#L49)

Downloads a file from the specified URL using a POST request

## Parameters

### url

`string`

The URL to download the file from

### data

`RequestData` = `{}`

The data to be sent in the request body (optional)

### options

`DownloadOptions` = `{}`

Request options including optional fileName

## Returns

`Promise`\<`Response`\>

Promise that resolves with the fetch Response object

## Description

This function sends a POST request to the specified URL with the provided data.
The response is expected to be a file. If the response is successful, the file is downloaded
with the specified filename. If the response is not successful, an error is thrown.

Note: This function assumes that the server responds with a file. If the server responds
with a different content type, an error will be thrown.

## Example

```typescript
import { downloadFile } from 'dt-utils';

// Basic usage
await downloadFile('https://api.example.com/download', { id: 123 });

// With custom filename
await downloadFile('https://api.example.com/download',
  { id: 123 },
  { fileName: 'custom.pdf' }
);

// With additional fetch options
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
