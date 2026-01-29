[dt-utils](../globals.md) / getTypeOfValue

# Function: getTypeOfValue()

> **getTypeOfValue**(`value`): `string`

Defined in: [getTypeOfValue/index.ts:36](https://github.com/DTStack/dt-utils/blob/master/src/getTypeOfValue/index.ts#L36)

以小写字符串形式返回值的类型。

## Parameters

### value

`any`

需要检查类型的值

## Returns

`string`

小写的类型字符串

## Description

用于确定 JavaScript 值的精确类型，返回该值类型的小写字符串表示。

## Example

```typescript
import { getTypeOfValue } from 'dt-utils';

// 基本类型
getTypeOfValue(42);           // => 'number'
getTypeOfValue('hello');      // => 'string'
getTypeOfValue(true);         // => 'boolean'
getTypeOfValue(undefined);    // => 'undefined'
getTypeOfValue(null);         // => 'null'

// 复杂类型
getTypeOfValue([1, 2, 3]);    // => 'array'
getTypeOfValue({});           // => 'object'
getTypeOfValue(() => {});     // => 'function'

// 内置对象
getTypeOfValue(new Date());   // => 'date'
getTypeOfValue(/regex/);      // => 'regexp'
getTypeOfValue(new Error());  // => 'error'
getTypeOfValue(Symbol());     // => 'symbol'
getTypeOfValue(new Map());    // => 'map'
getTypeOfValue(new Set());    // => 'set'
```
