[dt-utils](../globals.md) / copy

# Function: copy()

> **copy**(`text`): `Promise`\<`boolean`\>

Defined in: [copy/index.ts:46](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/copy/index.ts#L46)

浏览器剪贴板复制工具函数。

## Parameters

### text

`string`

要复制的文本内容

## Returns

`Promise`\<`boolean`\>

复制操作结果
  - 复制成功时返回 true
  - 复制失败时返回 false

## Description

提供一个一致且可靠的方式来在不同浏览器中复制文本到剪贴板。
它优先使用现代的 Clipboard API，当不可用时会降级使用 execCommand('copy') 方法来支持旧版浏览器。

## Example

```typescript
import { copy } from 'dt-utils';

// 简单复制
const text = "Hello, clipboard!";
const success = await copy(text);
console.log(success ? "Copied!" : "Copy failed");

// 带错误处理的复制
try {
  const text = "Sensitive data";
  if (await copy(text)) {
    showSuccessToast("Content copied!");
  } else {
    showErrorToast("Copy failed");
  }
} catch (error) {
  handleError(error);
}

// 在按钮点击处理程序中复制
button.addEventListener('click', async () => {
  const success = await copy('Click to copy text');
  button.textContent = success ? 'Copied!' : 'Try again';
  setTimeout(() => {
    button.textContent = 'Copy';
  }, 2000);
});
```
