/**
 * 浅比较两个对象是否相等
 *
 * @private
 * @description 用于比较两个对象是否相等，它会检查对象的键值对是否完全匹配。
 * @param a - 待比较的第一个对象
 * @param b - 待比较的第二个对象
 * @returns {boolean} 如果两个对象的所有属性值都相等则返回 true，否则返回 false
 * @example
 * ```ts
 * _isEqual({a: 1}, {a: 1}) // true
 * _isEqual({a: 1}, {a: 2}) // false
 * _isEqual({a: {b: 1}}, {a: {b: 1}}) // false
 * ```
 */
const _isEqual = (a: any, b: any): boolean => {
    if (a === b) return true;
    if (a == null || b == null) return false;

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
        if (!Object.prototype.hasOwnProperty.call(b, key) || a[key] !== b[key]) {
            return false;
        }
    }

    return true;
};

/**
 * 一个类装饰器，通过对 props 和 state 进行深度相等性检查，
 * 自动为 React 组件实现 shouldComponentUpdate。
 *
 * @category Utils
 * @deprecated 该装饰器已废弃。建议使用 React.memo() 或 React.PureComponent 代替。
 *
 * @param {any} target - 要被装饰的目标类
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
        return !_isEqual(this.state, nextState) || !_isEqual(this.props, nextProps);
    };
};

export default shouldRender;
