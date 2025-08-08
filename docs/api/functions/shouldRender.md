[dt-utils](../globals.md) / shouldRender

# Function: ~~shouldRender()~~

> **shouldRender**(`target`): `void`

Defined in: [shouldRender/index.ts:55](https://github.com/jin-sir/dt-utils/blob/c80bde9fd6bdabc77e6c76035f655925caf5e8af/src/shouldRender/index.ts#L55)

一个类装饰器，通过对 props 和 state 进行深度相等性检查，
自动为 React 组件实现 shouldComponentUpdate。

## Parameters

### target

`any`

要被装饰的目标类

## Returns

`void`

## Deprecated

该装饰器已废弃。建议使用 React.memo() 或 React.PureComponent 代替。

## Example

```typescript
import { shouldRender } from 'dt-utils';

@shouldRender
class MyComponent extends React.Component {
  render() {
    return <div>{this.props.data}</div>;
  }
}
```
