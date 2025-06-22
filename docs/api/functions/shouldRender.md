[dt-utils](../globals.md) / shouldRender

# Function: ~~shouldRender()~~

> **shouldRender**(`target`): `void`

Defined in: [shouldRender/index.ts:24](https://github.com/jin-sir/dt-utils/blob/f5e2bf17c0444dcdd22c5806b287ffaa85e9e0ca/src/shouldRender/index.ts#L24)

A class decorator that automatically implements shouldComponentUpdate for React components
by performing deep equality checks on props and state.

## Parameters

### target

`any`

The target class to be decorated

## Returns

`void`

## Deprecated

This decorator is deprecated. Consider using React.memo() or React.PureComponent instead.

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
