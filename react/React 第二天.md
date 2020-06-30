# React 第二天

## 目标
* 了解组件以及组件的封装
* 组件通信
* children
* defaultProps

什么是组件*****
3.1.1 组件的概念****（15’）
3.2 	组件的好处*****
3.2.1 组件的特点 ****（15’）
3.3 	组件的封装*****
3.3.1 函数组件 ****（10’）
3.3.2  class组件****（10’）
3.3.3 函数组件、class组件的区别****（10’）
3.3 	组件的三大属性*****
3.3.1  state 属性****（10’）
3.3.2  props属性****（10’）
3.3.3  state属性和props属性的区别****（10’）
3.34  refs属性值****（10’）
3.5 	组件通信*****
3.5.1 父传子****（10’）
3.5.2 子传父****（10’）
3.5.3 兄弟组件****（10’）
3.5.4 跨组件通信（context）****（10’）
3.5.5 数据类型校验 ****（10’）
3.6 	Children****（5’）
3.7 	defaultProps***（15’）

## React
React.js 是一个帮助你构建页面 UI 的库。React.js 将帮助我们将界面分成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，就成了我们的页面。

一个组件的显示形态和行为有可能是由某些数据决定的。而数据是可能发生改变的，这时候组件的显示形态就会发生相应的改变。而 React.js 也提供了一种非常高效的方式帮助我们做到了数据和组件显示形态之间的同步。

React.js 不是一个框架，它只是一个库。它只提供 UI （view）层面的解决方案。在实际的项目当中，它并不能解决我们所有的问题，需要结合其它的库，例如 Redux、React-router 等来协助提供完整的解决方法。

* 模块化：从 代码 的角度，去分析问题，把我们编程时候的业务逻辑，分割到不同的模块中来进行开发，这样能够方便代码的重用；

* 组件化：从 UI 的角度，去分析问题，把一个页面，拆分为一些互不相干的小组件，随着我们项目的开发，我们手里的组件会越来越多，最后，我们如果要实现一个页面，可能直接把现有的组件拿过来进行拼接，就能快速得到一个完整的页面， 这样方便了UI元素的重用；组件是元素的集合体。


#### vue 组件化与 React组件化
1、Vue是如何实现组件化的：.vue 组件模板文件，浏览器不识别这样的.vue文件，所以，在运行前，会把 .vue 预先编译成真正的组件；
* template： UI结构
* script： 业务逻辑和数据
* style： UI的样式

2、React如何实现组件化：在React中实现组件化的时候，根本没有像 .vue 这样的模板文件，而是，直接使用JS代码的形式，去创建任何你想要的组件；
* React中的组件，都是直接在 js 文件中定义的；
* React的组件，并没有把一个组件 拆分为 三部分（结构、样式、业务逻辑），而是全部使用JS来实现一个组件的；（也就是说：结构、样式、业务逻辑是混合在JS里面一起编写出来的）

#### React中的核心概念
* 虚拟DOM（Virtual Document Object Model）
 + DOM的本质是什么：就是用JS表示的UI元素
 + DOM和虚拟DOM的区别：
   - DOM是由浏览器中的JS提供功能，所以我们只能人为的使用 浏览器提供的固定的API来操作DOM对象；
   - 虚拟DOM：并不是由浏览器提供的，而是我们程序员手动模拟实现的，类似于浏览器中的DOM，但是有着本质的区别；
 - 为什么要实现虚拟DOM：
 - 什么是React中的虚拟DOM：
 - 虚拟DOM的目的：


 ```JavaScript

 DOM      DOM


 {
   html:
   head:
   body:{
     Navigation:na
     content:content
   }

 }

 class  Navigation {
   constructor() {

   }

   render(){
     <img />
     <p></p>
   }
 }

 var na = new Navigation();
 ```

* Diff算法
 - tree diff:新旧DOM树，逐层对比的方式，就叫做 tree diff,每当我们从前到后，把所有层的节点对比完后，必然能够找到那些 需要被更新的元素；
 - component diff：在对比每一层的时候，组件之间的对比，叫做 component diff;当对比组件的时候，如果两个组件的类型相同，则暂时认为这个组件不需要被更新，如果组件的类型不同，则立即将旧组件移除，新建一个组件，替换到被移除的位置；
 - element diff:在组件中，每个元素之间也要进行对比，那么，元素级别的对比，叫做 element diff；
 - key：key这个属性，可以把 页面上的 DOM节点 和 虚拟DOM中的对象，做一层关联关系；

#### 配置和安装 React

##### 使用 create-react-app 脚手架安装 React 开发环境
用 React 官网提供的 create-react-app 来搭建非常简单：

1、配置安装 npm
```
npm -v
```

2、安装 create-react-app
```
npm install -g create-react-app
```

3、创建 React 项目
```
//cd 创建项目的目录
cd 项目路径

//创建
create-react-app 项目名称
```

这条命令会帮我们构建一个叫 react_test 的工程，并且会自动地帮助我们安装所需要的依赖，现在只需要安静地等待它安装完。

4、启动工程开始项目

```
//cd 到项目路径
cd react_test

//npm 启动工程
npm start
```




##### 手动创建 React 开发环境
面对复杂的项目, 入门级的构建工具, 是远远不够的, 我们这里从零开始, 用webpack, 手动配置一个独立的React开发环境, 开发环境完成后, 支持自动构建, 自动刷新, sass语法 等功能

1、创建项目路径

```
//cd 项目路径

mkdir react_test

// 使用 npm 初始化项目
cd react_test
npm init
```

2、安装相关的依赖和软件包
```
//这里主要示例安装 react react-dom react-scripts
npm install react react-dom react-scripts
```
3、配置 package.json 文件和 webpack.config.js文件

## 组件
组件是 React 的核心，组件机制允许你将UI切分成独立、可复用的部分，并针对每个部分单独去做一定的处理。

#### 组件的好处
1、标记鲜明，容易维护，易与复用

2、块状化结构，减少css 的书写，并且方便扩展


## React 中的组件

### React 构建组件的两种方式

#### 构造函数构建组件
在React中，构造函数，就是一个最基本的组件，如果想要把组件放到页面中，可以把 构造函数的名称，当作组件的名称，以 HTML 标签形式引入页面中即可。

>注意：React在解析所有的标签的时候，是以标签的首字母来区分的，如果标签的首字母是小写，那么就按照普通的 HTML 标签来解析，如果首字母是大写，则按照组件的形式去解析渲染

```JavaScript
// 结论：组件的首字母必须是大写
 function HelloMessage(props) {
  // 在组件中，如果想要使用外部传递过来的数据，必须，显示的在 构造函数参数列表中，定义 props 属性来接收；
  // 通过 props 得到的任何数据都是只读的，不能从新赋值
    props.name = '000'
    return(
        <div>
            <h1>这是在Hello组件中定义的元素 --- {props.name}</h1>
        </div>
    )
 }
```



#### Class 关键字构建组件
```JavaScript
class HelloMessage extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```


* 区别
 1. 用构造函数创建出来的组件：专业的名字叫做“无状态组件”
 2. 用class关键字创建出来的组件：专业的名字叫做“有状态组件”

### JSX 语法
JSX是一种 JavaScript 的语法扩展，是 React 官方推出的一套语法规范。他可以在 JavaScript 写 HTML 标签，JSX 这种语法，就是为了把HTML模板直接嵌入到JS代码里面，这样就做到了模板和组件关联，但是 JS 不支持这种包含 HTML 的语法，所以需要通过工具将 JSX 编译输出成 JS 代码才能使用。

```
// 如果要直接使用 JSX 语法，需要先安装相关的 语法转换工具
npm i babel-preset-react -D

```

>1、如要要使用 JSX 语法，必须先运行 `cnpm i babel-preset-react -D`，然后再 `.babelrc` 中添加 语法配置；</br>
2、JSX语法的本质：还是以 React.createElement 的形式来实现的，并没有直接把 用户写的 HTML代码，渲染到页面上；</br>
3、 当 编译引擎，在编译JSX代码的时候，如果遇到了`<`那么就把它当作 HTML代码去编译，如果遇到了 `{}` 就把 花括号内部的代码当作 普通JS代码去编译；</br>
4、在JSX创建DOM的时候，所有的节点，必须有唯一的根元素进行包裹；



#### JSX 原理
JSX 其实就是 JavaScript 对象,JSX内部在运行的时候，也是先把 类似于HTML 这样的标签代码，
转换为了 React.createElement 的形式；也就是说：我们写了 JSX 这样的标签，也并不是直接把 我们的 HTML 标签渲染到页面上，而是先转换成 React.createElement 这样的JS代码，再渲染到页面中；

![JSX](https://huzidaha.github.io/static/assets/img/posts/44B5EC06-EAEB-4BA2-B3DC-325703E4BA45.png)

```JavaScript
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends Component {
  render () {
    return (
      <div>
        <h1 className='title'>React 学习</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
)

```
```JavaScript
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends Component {
  render () {
    return (
     React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          { className: 'title' },
          "React 学习"
        )
      )
    )
  }
}

ReactDOM.render(
  React.createElement(Header, null),
  document.getElementById('root')
);

```

### 组件嵌套
返回多个 JSX 元素必须要用一个外层的 JSX 元素把所有内容包裹起来。返回并列多个 JSX 元素是不合法的。

![组件嵌套](https://huzidaha.github.io/static/assets/img/posts/19BBE4E2-A12E-4657-BA6A-61484F67FA60.png)

复用性非常强，我们可以把组件的内容封装好，然后灵活在使用在任何组件内。另外这里要注意的是，自定义的组件都必须要用大写字母开头，普通的 HTML 标签都用小写字母开头。


## 组件state
React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。
React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。

```JavaScript
import React from 'react';

class CollectButton extends React.Component{
  constructor(){
    super();
    this.state = {
      collect:false,
      collectPrompt:"未收藏"
    }
  }

  handleClick(){
    var status = !this.state.collect
    var text = status?"收藏":"未收藏";
    this.setState({
      collect:status,
      collectPrompt:text      
    });
  }

  render(){
    return(
      <button onClick={()=>{
        this.handleClick()
      }}>{this.state.collectPrompt}</button>
    );
  }
}

export default CollectButton;
```


## 组件通信
#### React Props
state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。

### 父传子
子组件定义接受数据属性名称
父组件向该属性赋值

```JavaScript
//父组件
class  Father extends React.Component {
  constructor() {
    super();
    this.state = {
      属性名称：属性值
    }
  }

  render(){
    return({
      <子组件 子组件属性名称={this.state.属性名称}/>
    });
  }
}

//子组件接受
class Son extends React.Component{
  constructor(props){
    super();
    this.state = props;
  }

  render(){
    return(
      <子元素标签>{this.state.子组件属性名称}</子元素标签>
    );
  }

}
```


### 子传父

回调函数的方式
```JavaScript
//父组件
class  Father extends React.Component {
  constructor() {
    super();
    this.state = {
      属性名称：属性值
    }
  }

  // 父组件接受数据定于函数
  getData = (需要传递给父组件的值)=>{
    //拿到子组件传递给父组件的值
  }

  render(){
    return({
      <子组件 子组件属性名称={this.state.属性名称} 父组件接受数据函数名称={this.getData}/>
    });
  }
}

//子组件接受
class Son extends React.Component{
  constructor(props){
    super();
    this.state = props;
  }

  handleClick(需要传递给父组件的值){
    this.props.父组件接受数据函数名称(需要传递给父组件的值)
  }

  render(){
    return(
      <子元素标签 onClick={()=>{
        this.handleClick(需要传递给父组件的值);
      }}>{this.state.子组件属性名称}</子元素标签>


    );
  }

}
```
### 兄弟组件
通过父组件进行数据交互

### 跨组件通信

### 数据类型校验

### children

### defaultProps
