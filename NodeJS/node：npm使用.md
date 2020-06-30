# 模块和npm 使用

## 目标
* 核心模块和文件模块
* 掌握 npm 的基本使用
* 发布 npm


## /favicon.ico
favicon.ico 图标用于收藏夹图标和浏览器标签上的显示，如果不设置，浏览器会请求网站根目录的这个图标，如果网站根目录也没有这图标会产生 404。
出于优化的考虑，要么就有这个图标，要么就禁止产生这个请求。


## 核心模块
在Node中，模块主要分两大类：核心模块和文件模块。
核心模块部分在 Node 源代码的编译过程中，编译进了二进制执行文件。在 Node 进启动时，部分核心模块就被直接加载进内存中，所以这部分核心模块引入时，文件定位和编译执行这两个步骤可以省略掉，并且在路径分析中优先判断，所以它的加载速度是最快的。如：HTTP 模块 、URL 模块、Fs 模块都是 nodejs 内置的核心模块，可以直接引入使用。

#### http模块
作用：
处理客户端的网络请求

代码步骤：
* 导入 HTTP 核心模块
* 监听客户端的请求
* 处理客户端的请求
* 开启服务器


#### URL模块
作用：
处理客户端请求过来的URL

代码步骤：
* 导入 URL 核心模块
* 导入 HTTP 核心模块
* 监听客户端的请求（在这中间处理客户端请求过来的URL）
* 处理客户端的请求
* 开启服务器


www.baidu.com/image/1.jpg?username=kj&password=123456
#### Query Strings模块
作用：
querystring从名字就可以看出是一个和参数相关的帮助类,node.js原生自带,直接 require('querystring') 即可使用.处理客户端通过get/post请求传递过来的参数

代码步骤：
* 需要导入 ‘querystring’ 这个核心模块
* get请求时 querystring 一般是配合 url 核心模块一起使用的
* get/post请求最终都需要调用 querystring.parse方法，将请求传递过来的键值对字符串转成js对象，方便操作。

此类一共包括4个方法:
```javascript
querystring.stringify(obj, [sep], [eq])

querystring.parse(str, [sep], [eq], [options])

querystring.escape

querystring.unescape

```
[内参数]表示可选参数, [sep]指分隔符 默认& , [eq]指分配符 默认=

###### querystring.stringify(obj,[sep],[eq])
对象格式化成参数字符串 ,obj就是要格式化的对象,必选参数.

```javascript
var obj={name:"一介布衣",url:"http://yijiebuyi.com"};
var param= querystring.stringify(obj);
//没有指定分隔符和分配符,并且自动编码汉字
console.log(param);
param=querystring.stringify(obj,'|','*');
//指定了分隔符和分配符
console.log(param);
```

###### querystring.parse(str, [sep], [eq], [options])
参数字符串格式化成对象
```javascript
var obj={name:"我是一段中文",url:"http://yijiebuyi.com"};
var param= querystring.stringify(obj);

var newobj=querystring.parse(param);
console.log(typeof newobj,newobj);
```

###### querystring.escape
参数编码
```javascript
var param="这是一段中文汉字"
console.log(querystring.escape(param));
```

###### querystring.unescape
参数解码

```JavaScript
var param="一介布衣&http://yijiebuyi.com";
console.log(querystring.escape(param));
console.log(querystring.unescape(querystring.escape(param)));
```

>注意：
get/post的请求方式是不一样的，客户端传递过来时，参数放在的地方是不一样的，所以服务器端处理方式也不太一样。


#### File System模块
以后的所有静态资源（html、css、js、图片等）都是放在服务端的，如果浏览器需要这些html、css、js、图片等资源，则需要先将其读取到node.exe的内容中，然后再返回给浏览器。
作用：
在服务端来操作文件，可能是需要将浏览器上传的图片保存到服务器，也可能是需要将服务器的资源读取之后返回给浏览器。

代码步骤：
* 导入 fs 核心模块
* 使用相应的方法来写入文件、读取文件等操作

>注意点：
目录 fs它是不会自动帮我们创建的需要我们自己手工创建文件如果不存在，调用 writeFile 与 appendFile 方法会自动帮我们创建。

#### Path模块
作用：
操作文件的路径，为文件操作服务。

常用的几个函数：
```javascript
path.join(第一个路径,第二个路径) : 拼接路径
```

#### Global模块
作用：
全局共享的，不需要导入模块即可以使用

常用的属性：

* `__dirname` : 文件所在的文件夹路径
* `__filename` : 文件所在的路径
* `require()` : 导入需要的模块
* `module` : 自定义模块时用到
* `exports` : 自定义模块时用到


#### console模块
作用：
console（控制台）模块是Node.js最有用的模块之一，该模块提供了大量的功能，用来把调试和信息内容写到控制台。

常用的几个函数：
* console.log([data], [...])：把data输出写入控制台，额外的参数也可以被发送
* console.info([data], [...])：与console.log相同
* console.error([data], [...])：与console.log相同，同时输出也被发送到stderr
* console.warn([data], [...])：与console.log相同
* console.dir(obj)：把一个JavaScript对象的字符串表示形式写到控制台
* console.time(label)：把一个精度为毫秒的当前时间戳赋给一个字符串label
* console.timeEnd(label)：创建当前时间与赋给label的时间戳之间的差值，并输出结果
* console.trace(label)：把代码当前位置的栈跟踪的信息写到stderr
* console.assert(expression, [message])：如果表达式计算结果为false，就把消息和栈跟踪信息写到控制台


## 文件模块
为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。
模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。


#### Node.js 中 exports 和 module.exports 的区别
* 每个模块中都有一个 module 对象
* module 对象中有一个 exports 对象
* 我们可以把需要导出的成员都挂载到 module.exports 接口对象中也就是：moudle.exports.xxx = xxx 的方式,但是每次都 moudle.exports.xxx = xxx 很麻烦，点儿的太多了;所以 Node 为了你方便，同时在每一个模块中都提供了一个成员叫：exports这个exports === module.exports 结果为 true
* 多个成员导出：moudle.exports.xxx = xxx 的方式 完全可以
* 单个成员导出：expots.xxx = xxx当一个模块需要导出单个成员的时候，这个时候必须使用：module.exports = xxx 的方式 不要使用 exports = xxx不管用因为每个模块最终向外 return 的是 module.exports
* 而 exports 只是 module.exports 的一个引用所以即便你为 exports = xx 重新赋值，也不会影响 module.exports
* 但是有一种赋值方式比较特殊：exports = module.exports 这个用来重新建立引用关系的

#### 创建模块
在 Node.js 中，创建一个模块非常简单
代码如下:
```javascript
var hello = require('./hello');
hello.world();
```
代码 require('./hello') 引入了当前目录下的 hello.js 文件（./ 为当前目录，node.js 默认后缀为 js）。

Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

创建 hello.js 文件，代码如下：
 ```javascript
 exports.world = function() {
   console.log('Hello World');
 }
 在以上示
 ```
hello.js 通过 exports 对象把 world 作为模块的访问接口，在 main.js 中通过 require('./hello') 加载这个模块，然后就可以直接访 问 hello.js 中 exports 对象的成员函数了。
有时候我们只是想把一个对象封装到模块中，格式如下：
```javascript
module.exports = function() {
  // ...
}
```

##### 将模块定义为类
```javascript
//hello.js
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;
```
使用：
```javascript
var Hello = require('./hello');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();
```
//main.js

模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。

## npm 基本使用
包管理器(Package Manager)
npm 最初它只是被称为 Node Package Manager，用来作为Node.js的包管理器。但是随着其它构建工具(webpack、browserify)的发展，npm已经变成了 "the package manager for JavaScript"，它用来安装、管理和分享JavaScript包，同时会自动处理多个包之间的依赖。
npm 包管理器本身是 node 应用，用于安装 JavaScript 库。

#### 安装npm
新版的nodejs已经集成了npm
Node.js：nodejs分为了长期支持版和当前版本。
```command
npm install npm -g
```

#### 更换 npm 镜像站点
对于国内的情形，在使用npm安装JS包之前建议先更改npm的镜像。
配置 npm 的国内镜像站点为：https://registry.npm.taobao.org 。

* 方法一：在系统的HOME目录新建.npmrc文件并添加 registry = https://registry.npm.taobao.org
* 方法二：你可以使用淘宝定制的 cnpm 命令行工具代替默认的 npm:

```command
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
可使用cnpm来安装包

```command
cnpm install <包>
```

#### 本地安装(默认)
npm 的包安装分为本地安装（local）、全局安装（global）两种。

```command
npm install <包>      # 本地安装
npm i <包>
```
将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
可以通过 require() 来引入本地安装的包。

#### 全局安装
```command
npm install <包> -g   # 全局安装
```
将安装包放在 /usr/local 下或者你 node 的安装目录。可以直接在命令行里使用。这是使用全局安装的主要原因。

使用下面的命令来查看全局的包安装的位置：
```command
npm prefix -g
```

#### 创建全局链接

如果你希望具备两者功能（本地安装和全局安装的功能），则需要在两个地方安装它或使用 npm link。
npm link的功能是在本地包和全局包之间创建符号链接。我们说过使用全局模式安装的包不能直接通过 require 使用,但通过 npm link 命令可以打破这一限制。
比如我们将 express安装到了全局环境，使用下面的命令可以将其链接到本地环境：

```command
npm link express
```
使用 npm link命令还可以将本地的包链接到全局。使用方法是在包目录( package.json 所在目录)中运行 npm link 命令。
如果你的项目不再需要该模块，可以在项目目录内使用npm unlink命令，删除符号链接。

#### 常用命令
* 查看命令帮助

```command
npm help <某命令>
```

* 列出各命令
```command
npm -l
```

* 查看安装信息

安装信息和它们的依赖

```command
//全局安装信息
npm ls -g

//列出当前项目中的包
npm ls
```

#### 卸载包
```command
npm uninstall <包名>
```

#### 更新包
```command
//更新当前项目中安装的某个包
npm update <包名>

//更新当前项目中安装的所有包
npm update

//更新全局安装的包
npm update <包名> -g

```

#### 搜索包
```command
npm search <关键字>
```

#### 列出npm的配置
```command
npm config list -l
```

#### 列出bin目录
```command
npm bin
```

#### 使用 package.json

当你的项目需要依赖多个包时，推荐使用 package.json。其优点为：
它以文档的形式规定了项目所依赖的包
可以确定每个包所使用的版本
项目的构建可以重复，在多人协作时更加方便
创建package.json文件

手动创建
或者 通过 npm init 命令生成遵守规范的 package.json文件
文件中必须包含： name 和 version

#### 指定依赖包
两种依赖包：

* dependencies: 在生产环境中需要依赖的包。通过npm install <packge> --save命令自动添加依赖到文件（或者使用简写的参数 -S）。
* devDependencies：仅在开发和测试环节中需要依赖的包。通过npm install <packge> --save-dev命令自动添加依赖到文件（或者使用简写的参数 -D）。
当然你也可以在文件中手动添加依赖,如果其他人也需要这个项目，只需要把这个 package.json 文件给他，然后进行简单的 npm install 即可。

#### 设置默认配置
使用 npm set 命令用来设置环境变量。
也可以用它来为 npm init设置默认值，这些值会保存在 ~/.npmrc文件中。

```command
$ npm set init-author-name 'Your name'
$ npm set init-author-email 'Your email'
$ npm set init-author-url 'http://yourdomain.com'
$ npm set init-license 'MIT'
```

#### 更改全局安装目录

使用npm config命令可以达到此目的。
```command
npm config set prefix <目录>
```
或者手动在 ~/.npmrc文件中进行配置：
```command
prefix = /home/yourUsername/npm
```
更改目录后记得在系统环境变量 PATH中添加该路径：
```command
# .bashrc 文件
export PATH=~/npm/bin:$PATH
```

多版本管理器

Node.js 的社区开发了多版本管理器，用于在一台机器上维护多个版本的 Node.js 实例，方便按需切换。Node 多版本管理器(Node Version Manager，nvm)是一个通用的叫法，它目前有许多不同的实现。这里使用visionmedia/n。n 是一个十分简洁的 Node 多版本管理器。

如果已经安装好npm则可以简单的使用 npm install -g n来安装n。事实上，n 并不需要 Node.js 驱动，它只是 bash 脚本；我们可以在 https://github.com/visionmedia/n 下载它的代码，然后使用 make install 命令安装。

n的常用命令：

```command
# 查看帮助
n --help

# 安装 6.9.5版本的nodejs。
# 通过 n 获取的 Node.js 实例都会安装在 /usr/local/n/versions/ 目录中（看情况吧）
n 6.9.5

# 列出已经安装的 Node.js 。结果中 * 表示默认版本
n

# 版本切换，与安装node.js一样
n 6.9.5

# 指明使用某版本的 node.js 执行某脚本(比如 script.js)
n use 6.9.5 script.js
```


* PREFIX=$CUSTOM_LOCATION make install； 自定义 n 的安装路径（避免使用sudo）
* 自定义node.js的安装路径(通过n安装)；通过设置环境变量 export N_PREFIX=$HOME
* 自定义 source。（镜像站点）
* 自定义 架构(architecture)
* 如果使用n切换了node.js的版本后，npm没有正确运行，通过运行相关脚本解决。（见 n: working-with-npm）


注意：n 无法管理通过其他方式安装的 Node.js 版本实例(如官方提供的安装包、发行版软件源、手动编译)，也就说无法管理不是用 n 安装的node.js。

## 发布包

在发布之前,首先需要让我们的包符合 npm 的规范,npm 有一套以 CommonJS 为基础包规范,但与 CommonJS并不完全一致,其主要差别在于必填字段的不同。通过使用 npm init 可以根据交互问答产生一个符合标准的 package.json。

npm init 运行示例：

```command
$ npm init
name: (node) test
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /tmp/node/package.json:

{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Is this ok? (yes)
```

该文件就是一个符合 npm 规范的 package.json 文件。这里的 index.js 作为包的接口。

也可简单的使用 npm init -y。其中-y（代表yes）
创建帐号：

npm adduser
测试是否取得帐号：

npm whoami
发布

npm publish
更新包：修改 version字段，再重新发布

取消发布：

npm unpublish
npm 脚本

npm scripts 使用指南 - 阮一峰的网络日志

npm run

package.json文件有一个scripts字段，可以用于指定脚本命令，供npm直接调用。

```command
"scripts": {
  "lint": "jshint **.js",
  "test": "mocha test/"
}
```
npm run lint可以运行脚本中的 lint 命令。npm run test可以运行脚本中的 test 命令。

npm run命令会自动在环境变量$PATH添加node_modules/.bin目录，所以scripts字段里面调用命令时不用加上路径，这就避免了全局安装NPM模块。
start和test属于特殊命令，可以省略run：

npm start
npm test
如果仅仅使用npm run会列出scripts属性下所有的命令：

npm run
