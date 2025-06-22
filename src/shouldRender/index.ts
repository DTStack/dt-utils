import { isEqual } from 'lodash-es';

/**
 * A class decorator that automatically implements shouldComponentUpdate for React components
 * by performing deep equality checks on props and state.
 *
 * @category Utils
 * @deprecated This decorator is deprecated. Consider using React.memo() or React.PureComponent instead.
 *
 * @param {any} target - The target class to be decorated
 *
 * @example
 * ```typescript
 * import { shouldRender } from 'dt-utils';
 *
 * @shouldRender
 * class MyComponent extends React.Component {
 *   render() {
 *     return <div>{this.props.data}</div>;
 *   }
 * }
 * ```
 */
const shouldRender = (target: any) => {
    target.prototype.shouldComponentUpdate = function (nextProps: any, nextState: any) {
        return !isEqual(this.state, nextState) || !isEqual(this.props, nextProps);
    };
};

export default shouldRender;
