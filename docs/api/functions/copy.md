[dt-utils](../globals.md) / copy

# Function: copy()

> **copy**(`text`): `Promise`\<`boolean`\>

Defined in: [copy/index.ts:46](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/copy/index.ts#L46)

A robust cross-browser clipboard utility function.

## Parameters

### text

`string`

The text content to copy

## Returns

`Promise`\<`boolean`\>

Copy operation result
  - Resolves to true if copy succeeds
  - Resolves to false if copy fails

## Description

This function provides a consistent and reliable way to copy text to the clipboard across different browsers.
It leverages the modern Clipboard API when available, falling back to the execCommand('copy') method for legacy browsers.

## Example

```typescript
import { copy } from 'dt-utils';

// Simple copy
const text = "Hello, clipboard!";
const success = await copy(text);
console.log(success ? "Copied!" : "Copy failed");

// Copy with error handling
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

// Copy in button click handler
button.addEventListener('click', async () => {
  const success = await copy('Click to copy text');
  button.textContent = success ? 'Copied!' : 'Try again';
  setTimeout(() => {
    button.textContent = 'Copy';
  }, 2000);
});
```
