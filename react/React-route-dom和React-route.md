# React-router和React-router-dom

## 目标

## 单页面应用
单页Web应用（single page web application，SPA），就是只有一张Web页面的应用。
单页应用程序 (SPA) 是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。
浏览器一开始会加载必需的HTML、CSS和JavaScript，所有的操作都在这张页面上完成，都由JavaScript来控制。
因此，对单页应用来说模块化的开发和设计显得相当重要。

#### 单页面应用的优缺点：
优点：
* 1、用户操作体验好，用户不用刷新页面，整个交互过程都是通过Ajax来操作。
* 2、适合前后端分离开发，服务端提 供http接口，前端请求http接口获取数据，使用JS进行客户端渲染。

* 缺点：
* 1、首页加载慢
单页面应用会将js、 css打包成一个文件，在加载页面显示的时候加载打包文件，如果打包文件较大或者网速慢则用户体验不好。
页面每次切换跳转时，并不需要做html文件的请求，这样就节约了很多http发送时延，我们在切换页面的时候速度很快。
* 2、SEO不友好、首屏时间慢
SEO（Search Engine Optimization）为搜索引擎优化。它是一种利用搜索引擎的搜索规则来提高网站在搜索引擎排名的方法。目前各家搜索引擎对JS支持不好，所以使用单页面应用将大大减少搜索引擎对网站的收录。

单页应用的首屏时间慢，首屏时需要请求一次html，同时还要发送一次js请求，两次请求回来了，首屏才会展示出来。相对于多页应用，首屏时间慢。
SEO效果差，因为搜索引擎只认识html里的内容，不认识js的内容，而单页应用的内容都是靠js渲染生成出来的，搜索引擎不识别这部分内容，也就不会给一个好的排名，会导致单页应用做出来的网页在百度和谷歌上的排名差



## React-Router
React-Router 是完整的 React 路由解决方案。
React-Router 保持 UI 与 URL 同步。它拥有简单的 API 与强大的功能例如代码缓冲加载、动态路由匹配、以及建立正确的位置过渡处理。


#### 组成部分
* react-router  React Router 核心
* react-router-dom  web使用的版本（本文讨论和使用的对象）
* react-router-native  用于 React Native 的 React Router
* react-router-redux  React Router 和 Redux 的集成
* react-router-config  静态路由配置的小助手


## HashRouter包裹下访问根服务: 假设为localhost:3000/

```javaScript
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';  
// as的作用为将HashRouter重命名为Router,这样的好处是在反复测试HashRouter和BrowserRouter时,可以免去组件修改

import Home from './pages/Home/index';
import Hooks from './pages/Hooks/index';

export default function App() {
  return (
    <Router>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/hooks" component={Hooks} />
    </Router>
  )
}
```
* 操作一: 浏览器直接输入localhost:3000/
  结果: 路由自动变为localhost:3000/#/home,可正常访问.

* 操作二: 浏览器直接输入localhost:3000/#/hooks
  结果: 可正常访问

## 将HashRouter更改为BrowserRouter

```javaScript
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';  // 使用BrowserRouter
```
* 操作一: 浏览器直接输入localhost:3000/
 结果: 路由自动变为localhost:3000/home,可正常访问

* 操作二: 浏览器直接输入localhost:3000/hooks
  结果: 浏览器无法获得正确的结果,Cannot GET /hooks

* 操作二: 浏览器直接输入localhost:3000/home
  结果: 浏览器无法获得正确的结果,Cannot GET /home

* 操作三: 浏览器直接输入localhost:3000/成功后,点击内容<Link to="home">Home</Link>
  结果: 可成功跳转

> 服务器路由: browserRouter, 前端路由: hashRouter

browserRouter

如果前端使用了browserRouter,每次改变路由时，会向服务器发送请求，因为服务器未配置对应的路径指向对应的文件，自然导致出现404的情况.(对于初始化页面,即路由为/时,不会发送请求)

## Router.js
