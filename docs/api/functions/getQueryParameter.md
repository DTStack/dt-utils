[dt-utils](../globals.md) / getQueryParameter

# Function: getQueryParameter()

> **getQueryParameter**(`name`, `url?`): `undefined` \| `null` \| `string` \| `number` \| `boolean`

Defined in: [getQueryParameter/index.ts:35](https://github.com/DTStack/dt-utils/blob/master/src/getQueryParameter/index.ts#L35)

从给定的 URL 中获取指定查询参数的值。

## Parameters

### name

`string`

要获取的查询参数名

### url?

`string`

目标 URL，若未提供则使用当前页面的 window.location.href

## Returns

`undefined` \| `null` \| `string` \| `number` \| `boolean`

- 解析后的查询参数值

## Description

解析目标 URL 的查询字符串，提取并转换指定名称的查询参数值。
支持处理特殊字符串值：
- 'null' 会被转换为 null
- 'undefined' 会被转换为 undefined
- 可以被 JSON 解析的字符串会被自动解析（例如数字、布尔值）
- 其他值保持字符串形式

## Example

```typescript
import getQueryParameter from 'dt-utils';

// 基本用法
getQueryParameter('name', 'https://example.com?name=john&age=25'); // => "john"

// 处理特殊值
getQueryParameter('isActive', 'https://example.com?isActive=true&count=null'); // => true
getQueryParameter('count', 'https://example.com?isActive=true&count=null'); // => null

// 不传入 url 时使用当前页面 URL
// 若当前页面 URL 为 https://current.com?page=home&limit=10
getQueryParameter('limit'); // => 10
```
