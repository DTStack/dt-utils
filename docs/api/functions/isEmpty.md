[dt-utils](../globals.md) / isEmpty

# Function: isEmpty()

> **isEmpty**(`value`): `boolean`

Defined in: [isEmpty/index.ts:33](https://github.com/DTStack/dt-utils/blob/master/src/isEmpty/index.ts#L33)

检查一个值是否为空。空值包括：null、undefined、空字符串、空数组和空对象。

## Parameters

### value

`unknown`

要检查的值

## Returns

`boolean`

- 如果值为空，则返回 true；否则返回 false

## Example

```typescript
import { isEmpty } from 'dt-utils';

isEmpty(null); // true
isEmpty(undefined); // true
isEmpty(''); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty('hello'); // false
isEmpty([1, 2, 3]); // false
isEmpty({ a: 1 }); // false
isEmpty(new Map()); // false
isEmpty(new Set()); // false
isEmpty(new WeakMap()); // false
isEmpty(new WeakSet()); // false
isEmpty(new Date()); // false
isEmpty(new RegExp()); // false
isEmpty(new Error()); // false
isEmpty(new Foo()); // false
```
