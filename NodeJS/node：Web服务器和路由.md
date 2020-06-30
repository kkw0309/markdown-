# Web服务器和路由

## 目标
* Node静态文件托管
* 路由
* GET与POST


## Node 服务器静态文件托管
#### `__filename`
`__filename` 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
实例:
创建文件 main.js:
```javascript
// 输出全局变量 __filename 的值
console.log( __filename );
```
执行 main.js 文件，代码如下所示:
```command
$ node main.js
/web/com/runoob/nodejs/main.js
```

#### `__dirname`
`__dirname` 表示当前执行脚本所在的目录。
实例:
创建文件 main.js:
```javascript
// 输出全局变量 __dirname 的值
console.log( __dirname );
```
执行 main.js 文件，代码如下所示:
```command
$ node main.js
/web/com/runoob/nodejs
```

## 路由
* 路由，是指我们要针对不同的URL有不同的处理方式。例如处理/start的“业务逻辑”就应该和处理/upload的不同。
* 路由是指如何定义应用的端点（URIs）以及如何响应客户端的请求。
* 路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成。
* 我们要为路由提供请求的 URL 和其他需要的 GET 及 POST 参数，随后路由需要根据这些数据来执行相应的代码。因此，我们需要查看 HTTP 请求，从中提取出请求的 URL 以及 GET/POST 参数。
* 每一个路由都可以有一个或者多个处理器函数，当匹配到路由时，这个函数将被执行。

## 路由的配置与使用
## 封装路由模块


4.3.1 超文本传输协议介绍（***）（5’）
4.3.2 GET与POST介绍（***）（10’）
4.3.3 获取GET传值（***）（15’）
4.3.4 获取POST传值（***）（15’）
