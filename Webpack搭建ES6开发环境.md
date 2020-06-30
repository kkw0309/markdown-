

# 1、什么是Webpack

 本质上，Webpack 是一个现代 JavaScript 应用程序的静态模块打包器（static module bundler）。在 Webpack 处理应用程序时，它会在内部创建一个依赖图（dependency graph），用于映射到项目需要的每个模块，然后将所有这些依赖生成到一个或多个 bundle。 

### webpack 解决什么问题？

Webpack 可以做到按需加载。像 Grunt、Gulp 这类构建工具，打包的思路是：`遍历源文件`→`匹配规则`→`打包`，这个过程中做不到按需加载，即对于打包起来的资源，到底页面用不用，打包过程中是不关心的。

Webpack 跟其他构建工具本质上不同之处在于：**Webpack 是从入口文件开始，经过模块依赖加载、分析和打包三个流程完成项目的构建**。在加载、分析和打包的三个过程中，可以针对性的做一些解决方案，达到按需加载的目的，比如`code split`（拆分公共代码等）。

当然，Webpack 还可以轻松的解决传统构建工具解决的问题：

- 模块化打包，一切皆模块，JS 是模块，CSS 等也是模块；
- 语法糖转换：比如 ES6 转 ES5、TypeScript；
- 预处理器编译：比如 Less、Sass 等；
- 项目优化：比如压缩、CDN；
- 解决方案封装：通过强大的 Loader 和插件机制，可以完成解决方案的封装，比如 PWA；
- 流程对接：比如测试流程、语法检测等。



# 2、为什么要使用 webpack ？

- **解耦需要：**
  - 使用SPA（Single-page Application，单页面应用）开发大型项目时，解决模块之间的解耦和维护问题；
- **前端工程化需要：**
  - 前端开发逐渐向工程化演进，理解前端框架的项目构建的流程（如React、Vue、Angular）；
- **项目扩展需要：**
  - 理解Webpack核心概念（如Babel加载器、Plugin插件），便于项目协同开发与项目整合；
- **面试需要：**
  - 进入一线互联网公司的必备技能；



# 3、Webpack搭建ES6开发环境步骤

首先要有node环境，进入[Node.js的官网]( https://nodejs.org/zh-cn/download/ )，选择对应系统下载安装包。安装node后集成了npm管理器

> **设置默认`npm`使用淘宝镜像**

```
npm config set registry https://registry.npm.taobao.org
```

> **安装`cnpm`包，安装成功后`npm`命令更换为`cnpm`命令**

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
## 安装成功之后，直接像使用npm一样使用cnpm即可，例如：安装某个包就变成了
cnpm i packageName
```

> **设置环境变量**

创建项目文件夹，以 `myapp` 文件为例，该文件即为项目根目录。打开命令提示符，执行：

```
cd myapp
```

依次完成以下操作：

#### 第一步 安装模块

创建package.json文件

```javascript
# 手动配置
npm init
# 自动配置
npm init -y
```

安装webpack工具

```javascript
# 安装webpack和webpack-cli
cnpm install webpack webpack-cli --save-dev
```

安装babel相关

```javascript
# 安装 babel和react相关加载器
cnpm i babel-loader @babel/core @babel/preset-env -D
```

安装css加载器

```
cnpm i css-loader style-loader -D
```

安装HTML插件

```
cnpm i html-webpack-plugin -D
```



> **PS：**【依赖安装到 开发环境与生产环境的区别】
>
> - 开发环境，即项目的编码阶段需要的依赖，上线后不需要引用，例如：webpack构建工具、babel加载器等，使用 `--save` 或 `-S` 命令安装；
>
> - 生产环境，项目上线后开始正式提供对外服务的阶段仍然需要依赖支持，例如：jQuery库、路由等，使用 `--save-dev` 或 `-D` 命令安装；



#### 第二步 创建目录结构

项目的目录结构为：

> myapp
>
> ​		--  public  [静态资源文件目录]
>
> ​		--  src [ 项目源文件目录 ]
>
> ​		--  dist [ 打包文件目录 ]
>
> ​		--  webpack.config.js [ webpack配置文件 ]
>
> ​		-- package.json [ NPM包管理配置文件 ]
>
> ​		-- node_modules [ 项目中的依赖存放目录 ]



在public目录下，创建index.html，该文件为项目的默认首页

```html
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8" />
        <title>Hello React Webpack</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

在src目录下，创建index.js，该文件为项目的入口文件，在此文件中可以编写ES6代码

```javascript
[1,2,3,4,5].map(item=> console.log(item))
```

在项目的根目录下创建webpack.config.js配置文件，依次完成以下配置：

**（1）配置入口（entry）**

```javascript
module.exports = {
	entry:'./src/index.js'
}
```

**（2）配置出口（output）**

```javascript
const path = require('path');
module.exports = {
	// ...
	output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'main.js'
	}
}
```

**（3）配置加载器（loader）**

```javascript
module.exports = {
	// ...
	module:{
		rules:[
			{
				test: /\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test: /\.js?$/, // jsx/js文件的正则
				exclude: /node_modules/, // 排除 node_modules 文件夹
				use:{
                    // loader 是 babel
                    loader: 'babel-loader',
                    options: {
                        // babel 转义的配置选项
                        babelrc: false,
                        presets: [
                            [require.resolve('@babel/preset-env'), {modules: false}]
                        ],
                        cacheDirectory: true
                    }
                }
			}
		]
	}
}
```

**（4）配置插件（plugin）**

```javascript
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
	// ...
	plugins:[
		new HtmlWebPackPlugin({
			template: 'public/index.html',
			filename: 'index.html',
			inject: true
		})
	]
}
```

执行打包命令

```
npx webpack --mode development
```

配置 `npm run build` 命令执行打包操作：

```json
//在 package.json 文件添加 build 项
{
    "scripts": {
        "build": "webpack --mode production"
    }
}
```

执行打包命令：

```
npm run build
```



#### 第三步 搭建本地服务

安装依赖

```
cnpm i webpack-dev-server -D
```

在webpack.config.js文件中配置本地服务相关信息

```javascript
module.exports = {
	// ...
	devServer: {
		contentBase: './dist',
		host: 'localhost',
		port: 3000
	}
}
```

在package.json文件中配置启动命令

```json
{
    "scripts": {
        "start": "webpack-dev-server --mode development --open"
    }
}
```

执行启动服务命令

```
npm start
```

