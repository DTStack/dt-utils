#### HOC 基础概念
1. HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用
2. 通过将不同的 Component 中相同的逻辑提取出来，在一个 function 实现这些通用逻辑，之后接受 Component 输入，“注入”通用逻辑，实现对 component 的增强，减少代码冗余，提高组件的复用性。这种通用逻辑的注入可以是向 Component 注入新的 prop，可以是对 Component 的 prop 进行某种检查，进行条件渲染等。
3. 被包装组件接收来自容器组件的所有 prop，同时也接收一个新的用于 render 的 data prop。HOC 不需要关心数据的使用方式或原因，而被包装组件也不需要关心数据是怎么来的。

##### 两种形式：
- 　　　　属性代理（Props Proxy）
- 　　　　反向继承 (Inheritance Inversion)

##### 属性代理
常见的是form
**form**

```
import React,{Component } from 'react';
 
export default class Login extends Component { 
	render(){
		return (
			<div>
				<div>
					<label id="username">账户</label>
					<input type="text" name="username" {...this.props.getField('username')}/>
				</div>
				<div>
					<label id="password">密码</label>
					<input type="text" name="password" {...this.props.getField('password')}/>
				</div>	
				<div onClick={this.props.handleSubmit}>
					提交
				</div>
			</div>
		)
	}
}
```
抽离组件state
```
import React,{Component } from 'react';
 
const formCreate = WrapComponent => class extends Component {
 
	constructor(){
		super();
		this.state={fields:{}}
	}
 
	onChange = key => e =>{
		const { fields } = this.state;
		fields[key] = e.target.value;
		this.setState({
			fields,
		});
	}
 
	handleSubmit=()=>{
		console.log(this.state.fields)
	}
 
	getField = fieldName =>{
		return {
			onChange:this.onChange(fieldName)
		}
	}
 
	render(){
		const props = {
			...this.props,
			handleSubmit:this.handleSubmit,
			getField:this.getField,
		}
 
		return(<WrapComponent {...props}/>)
	}
}
 
export default formCreate;
```
##### 反向继承（也称控制反转）

 本来是一种嵌套的关系，结果高阶组件返回的组件却继承了WrappedComponent，这看起来是一种反转的关系。

通过继承WrappedComponent，除了一些静态方法，包括生命周期，state，各种function，我们都可以得到。
```
import React , { Component } from 'react';
 
export default class User extends Component {
 
	constructor(){
		super();
		this.state = {
			cuout : 0
		}
	}
 
	componentDidMount(){
	    console.log('cuout'+this.state.cuout)
	}
	render(){
		return (
			<div>
				{this.state.cuout}
			</div>
		)
	}
}
```
高阶组件
```
import React from 'react';
 
const HocComponent = WrapedComponent => class extends WrapedComponent {
 
	componentDidMount(){
		console.log(this.state.cuout)
		this.setState({
			cuout:1
		})
 
		setInterval(()=>{
			this.setState({cuout:this.state.cuout+1})
		}, 1000)
	}
 
	render(){
		return super.render();
	}
}
 
export default HocComponent;

```

**最常见的 HOC**

```
// React Redux 的 `connect` 函数
const ConnectedComment = connect(commentSelector, commentActions)(CommentList);
```
分开写就是：
```
// connect 是一个函数，它的返回值为另外一个函数。
const enhance = connect(commentListSelector, commentListActions);
// 返回值为 HOC，它会返回已经连接 Redux store 的组件
const ConnectedComment = enhance(CommentList);
```
最大化可组合性
并不是所有的 HOC 都一样。有时候它仅接受一个参数，也就是被包裹的组件
connect 是一个返回高阶组件的高阶函数！



###### 可能的应用场景：
1. addEventListener事件监听，如果你添加了许多事件监听，那你可能需要考虑将这些逻辑封装成一个通用的高阶组件或者封装成一个通用的hook。
2. lockBodyScroll,有时候当一些特别的组件在我们的页面中展示时，你想要阻止用户滑动你的页面（想一想modal框或者移动端的全屏菜单)。
3. checkOnScreen,检测一个元素是否在屏幕上可见，或者判断那些元素应该在屏幕中显示，你也可以对元素做权限相关的扩展。
4. Persistent data持久化数据，将state中的数据同步到localstorage，以便页面刷新的时候保存状态，以便在页面加载时默认使用该值，而不是指定的初始值。
5. 元素hover
6. onClickOutside 是否在组件外面点击
7. windowSize
8. useMedia 组件使用媒体查询
9. themes
###### 营养快线
1. js函数柯里化

> 柯里化，英语：Currying(果然是满满的英译中的既视感)，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。


1. 装饰器
```js
//开始定义装饰器
const setTitle = (title) => (WrappedComponent) => {
   return class extends React.Component {
      componentDidMount() {
          document.title = title
      }
      render() {
         return <WrappedComponent {...this.props} />
      }
   }
}

setTitle('Profile Page')(Profile)
@setTitle('Profile Page')
class Profile extends React.Component {
    //....
}
```
