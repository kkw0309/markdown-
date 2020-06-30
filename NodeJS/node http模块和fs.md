# Node http模块和fs

## 目标
* 掌握 REPL
* 掌握 node 服务器搭建
* 掌握fs


## REPL
REPL(Read Eval Print Loop:交互式解释器) ，可交互式运行环境。开发者可以在该运行环境中输入任何JavaScript表达式，REPL运行环境将显示该表达式的运行结果。
可以执行以下任务：
* 读取 - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。
* 执行 - 执行输入的数据结构
* 打印 - 输出结果
* 循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出。

#### 进入 REPL
```javascript
node
>
```

#### 表达式运算
```javascript
$ node
> 1 +4
5
> 5 / 2
2.5
> 3 * 6
18
> 4 - 1
3
> 1 + ( 2 * 3 ) - 4
3
>
```

#### 使用变量
你可以将数据存储在变量中，并在你需要的时候使用它。
变量声明需要使用 var 关键字，如果没有使用 var 关键字变量会直接打印出来。
使用 var 关键字的变量可以使用 console.log() 来输出变量。

```javascript
$ node
> x = 10
10
> var y = 10
undefined
> x + y
20
> console.log("Hello World")
Hello World
undefined
> console.log("www.runoob.com")
www.runoob.com
undefined
```

#### 多行表达式
```javascript
$ node
> var x = 0
undefined
> do {
... x++;
... console.log("x: " + x);
... } while ( x < 5 );
x: 1
x: 2
x: 3
x: 4
x: 5
undefined
>
```

#### 下划线 `_`变量
你可以使用下划线`_`获取上一个表达式的运算结果：
```javascript
$ node
> var x = 10
undefined
> var y = 20
undefined
> x + y
30
> var sum = _
undefined
> console.log(sum)
30
undefined
>
```

#### REPL 命令
* ctrl + c - 退出当前终端。
* ctrl + c 按下两次 - 退出 Node REPL。
* ctrl + d - 退出 Node REPL.
* 向上/向下 键 - 查看输入的历史命令
* tab 键 - 列出当前命令
* .help - 列出使用命令
* .break - 退出多行表达式
* .clear - 退出多行表达式
* .save filename - 保存当前的 Node REPL 会话到指定文件
* .load filename - 载入当前 Node REPL 会话的文件内容。
* 停止 REPL
按下两次 ctrl + c 键就能退出 REPL:
```javascript
$ node
>
(^C again to quit)
>
```

## http 模块
node.js当中的http内置模块可以用于创建http服务器与http客户端。http.Server是一个基于事件的http服务器。
```javascript
var http=require("http");

http.createServer(function(req,res){
    res.writeHead(200,{
        "content-type":"text/plain"
    });
    res.write("hello nodejs");
    res.end();
}).listen(3000);
```

###### 引入
```JavaScript
const http = require("http");
```
###### 创建 http 服务器
request response
```JavaScript
const server = http.createServer((req,res)=>{

});
```

http的.createServer()方法可以用于返回一个http服务器实例，用自定义的server变量来接收。
当该服务器每次接收到客户端的请求时触发调用其内部的回调函数，客户端每访问一次，都会触发调用一次。
该回调函数有两个参数，req和res,顺序不可颠倒，req表示请求request,res表示响应response。

* 设置响应
###### 设置响应头
```javascript
res.writeHead(状态码,{});
```

参数1:
###### 常用的HTTP状态码
* 200 成功返回
* 404 找不到该页面，返回错误

状态代码有三位数字组成，第一个数字定义了响应的类别，且有五种可能取值：

* 1xx：指示信息–表示请求已接收，继续处理
* 2xx：成功–表示请求已被成功接收、理解、接受
* 3xx：重定向–信息不完整需要进一步补充
* 4xx：客户端错误–请求有语法错误或请求无法实现
* 5xx：服务器端错误–服务器未能实现合法的请求

参数2:
第二个参数传入一个对象，用于设置响应文本的渲染解析类型。

* 对于html代码设置为，res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
* 对于css文件的设置为res.writeHead(200,{"Content-Type":"text/css"});
* 对于图片的设置为res.writeHead(200,{"Content-Type":"image/jpg"});
* 对于纯文本的设置为res.writeHead(200,{"Content-Type":"text/plain"});
* 对于JSON的设置为 res.writeHead{"Content-Type": "application/json" }；

###### 设置返回的内容
```javascript
res.write();
```

###### 响应数据
```javascript
res.end();
```
一定要有res.end();，因为如果没有，浏览器会认为一直没有得到服务器的响应，则浏览器一直会处于被挂起的状态，此时浏览器内部有一个超时机制，一旦超时，则会报告错误。

###### 服务器监听特定端口号
用server这个自定义的变量来表示创建的服务器来监听某个指定的端口号：
```javascript
server.listen(3000,'192.168.155.1');
```
外界客户端可以通过这个ip地址和端口号来访问这个服务器。

代码示例
```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "application/json" });
    var otherArray = ["item1", "item2"];
    var otherObject = { item1: "item1val", item2: "item2val" };
    var json = JSON.stringify({
        anObject: otherObject,
        anArray: otherArray
    });

    var json = JSON.stringify(otherArray);


    res.write(json);

    res.end();

}).listen(port, hostname, () => {
    // console.log(`Server running at http://${hostname}:${port}/`);
});
```

## fs模块 文件系统（File System）
fs模块用于对系统文件及目录进行读写操作。

提供同步异步两种选择
* 同步导致阻塞
* 异步操作完成通过回调返回结果


#### 读取
###### 简单文件读取
sync
async


* 异步：fs.readFile(path[,option],callback)
* 同步：fs.readFileSync(path[,options])

```javascript
 var fs = require('fs');
//异步读取
       fs.readFile('要读取的文件的路径', function (err, data) {
           // 判断 如果有错 打印错误
           if (err) {
               console.log('读取错误!')
           }
           // 否则 打印读取到的数据
           console.log(data);
       })

// 同步读取
// 直接读取 返回读取的结果 保存在data变量里面
var data = fs.readFileSync('被读取的文件的路径');
```

###### 同步读取
方法：
```javascript
fs.readSync(fd, buffer, offset, length, position)
```
参数描述：
* fd：文件描述符
* buffer：读取文件的缓冲区
* offset：buffer 的开始写入的位置
* length：要读取的字节数
* position：开始读取文件的位置


###### 异步读取
方法：
```javascript
fs.read(fd, buffer, offset, length, position, callback)
```

示例；
```javascript
// 同步文件写入
var fs = require('fs');
var fd = fs.openSync('hello.txt');
// r 只读
// w 只写

```

## 写入
###### 简单文件的写入
简单文件写入
* 异步：fs.writeFile(file, data, [options], callback)
* 同步：fs.writeFileSync(file, data, [options])

参数：
path - 文件的路径。
flags - 文件打开的行为。具体值详见下文。
mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
callback - 回调函数，带有两个参数如：callback(err, fd)。

```javascript
var fs = require('fs'); // 引入fs模块

// 写入文件内容（如果文件不存在会创建一个文件）
// 传递了追加参数 { 'flag': 'a' }
fs.writeFile('./try4.txt', 'HelloWorld', { 'flag': 'a' }, function(err) {
    if (err) {
        throw err;
    }

    console.log('Hello.');

    // 写入成功后读取测试
fs.readFile('./try4.txt', 'utf-8', function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });
});
```

###### 同步写入
* fs.openSync(path,flags[,mode])

path：要打开的文件路径
flags：打开文件要做的操作的类型
mode：设置文件的操作权限，一般不传
返回值：该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
* fs.writeSync(fd,string[,position[,encoding]])

fd：文件的描述符，需要传递要写入的文件的描述符
string：要写入的内容
position：写入的起始位置
encoding：写入的编码，默认为utf-8，一般也不传
* fs.closeSync(fd)

fd：要关闭的文件的描述符
```javascript
// 同步文件写入
var fs = require('fs');
var fd = fs.openSync('hello.txt','w');
// r 只读
// w 只写
fs.writeSync(fd,'Hello JavaScript');
fs.closeSync(fd);
```
要完成同步写入文件，先需要通过 openSync() 打开文件来获取一个文件描述符，然后在通过 writeSync() 写入文件。

###### 异步写入
* fs.open(path,flags[,mode],callback)

用来打开一个文件
异步调用的方法，结果都是通过回调函数返回的
回调函数需要两个参数：err 错误对象，如果没有错误，则为null，fd 文件的描述符

* fs.write(fd,string[,position[,encoding]],callback)

用来异步写入一个文件

* fs.close(fd,callback)

用来关闭文件

```javascript
// 异步文件写入
var fs = require('fs');
// 打开文件
fs.open('hello2.txt','w',function (err,fd) {
    // 判断是否出错
    if (!err){
       // 如何没有出错，则对文件执行写入操作
        fs.write(fd,'这是异步写入的内容',function (err) {
            if (!err){
                console.log('写入成功~~~');
            }
              fs.close(fd,function (err) {
                  if (!err){
                      console.log('文件已关闭~~~')
                  }
              });
        });
    }else{
        console.log(err);
    }
})
```
要使用异步写入文件，先需要通过 open() 打开文件，然后在回调函数中通过 write() 写入。


## 追加
######  同步追加
```javascript
fs.appendFileSync("./http/111.txt","1111");
```


###### 异步追加
```javascript
const fs = require("fs");

// fs.appendFile 追加文件内容
// 1, 参数1:表示要向那个文件追加内容,只一个文件的路径
// 2, 参数2:表示要追加的内容
// 3, 可选参数,表示追加文本内容的编码格式,如果省略,默认为utf-8
// 4, 参数4: 表示追加完成之后的回调[有一个参数err,是判断是否追加成功]
fs.appendFile("./http/111.txt","1111" , (error)  => {
  if (error) return console.log("追加文件失败" + error.message);
  console.log("追加成功");
});
```
https://wwww.baidu.com:8080/image/1.jpg?username=kj&password=123456


## URL模块
nodejs中用户url格式化和反格式化模块，用于url解析、处理等操作的解决方案

#### Url组成部分：
protocol：url的通信协议（http/https）
slashes：如果协议protocol冒号后跟的是两个斜杠字符（/）,那么值为true
auth：URL的用户名与密码部分
host：url的主机名 “baidu.com”
port: 端口号
hostname: hostname是host属性排除端口port之后的小写的主机名部分
hash：哈希#后面字符串包括#
search：URL的查询字符串部分，包括开头的问号字符（？）
query: 不包含问号（？）的search字符串
pathname：URL的整个路径部分。跟在host后面，截止问号（？）或者哈希字符（#）分隔
path：由pathname与search组成的串接,不包含hash字符后面的东西
href：解析后的完整的URL字符串，protocol和host都会被转换成小写。

#### 解析
url.parse() 方法会解析一个 URL 字符串并返回一个 URL 对象。如果urlString不是字符串将会抛出TypeError。

```javascript
url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
```

参数：
* urlString <string> 要解析的 URL 字符串。
* parseQueryString <boolean> 如果为 true，则 query 属性总会通过 querystring 模块的 parse() 方法生成一个对象。 如果为 false，则返回的 URL 对象上的 query 属性会是一个未解析、未解码的字符串。 默认为 false。
* slashesDenoteHost <boolean> 如果为 true，则 // 之后至下一个 / 之前的字符串会被解析作为 host。 例如，//foo/bar 会被解析为 {host: 'foo', pathname: '/bar'} 而不是 {pathname: '//foo/bar'}。 默认为 false。


示例：

```javascript
var url = require("url")

var myurl="http://www.nodejs.org/some/url/?with=query&param=that#about"

parsedUrl=url.parse(myurl)

// { protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.nodejs.org',
//   port: null,
//   hostname: 'www.nodejs.org',
//   hash: '#about',
//   search: '?with=query&param=that',
//   query: 'with=query&param=that',
//   pathname: '/some/url/',
//   path: '/some/url/?with=query&param=that',
//   href: 'http://www.nodejs.org/some/url/?with=query&param=that#about'
// }
```

当parse方法第二个参数为true时，结果如下
```javascript
parsedUrl=url.parse(myurl,true)
// { protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.nodejs.org',
//   port: null,
//   hostname: 'www.nodejs.org',
//   hash: '#about',
//   search: '?with=query&param=that',
//   query: { with: 'query', param: 'that' },
//   pathname: '/some/url/',
//   path: '/some/url/?with=query&param=that',
//   href: 'http://www.nodejs.org/some/url/?with=query&param=that#about'
// }
```


#### 格式化
```javascript
url.format(urlObject)
```

参数：
* urlObject <Object> | <string> 一个 URL 对象（就像 url.parse() 返回的）。 如果是一个字符串，则通过 url.parse() 转换为一个对象。
返回值：
* url.format() 方法返回一个从 urlObject 格式化后的 URL 字符串。
如果 urlObject 不是一个对象或字符串，则 url.format() 抛出 TypeError。

示例：
```javascript
var url=require('url');  
var obj1={ protocol: 'http:',      
  slashes: true,         
  auth: null,           
  host: 'calc.gongjuji.net',   
  port: null,                 
  hostname: 'calc.gongjuji.net',  
  hash: '#one#two',              
  search: '?name=zhangsan&age=18',  
  query: 'name=zhangsan&age=18',    
  pathname: '/byte/',              
  path: '/byte/?name=zhangsan&age=18',  
  href: 'http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two'   
};
var url1=url.format(obj1);  
console.log(url1);//http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two
```

```javascript
//请求参数为为json对象  
var obj2={ protocol: 'http:',  
slashes: true,  
auth: null,  
host: 'calc.gongjuji.net',  
port: null,  
hostname: 'calc.gongjuji.net',  
hash: '#one#two',  
search: '?name=zhangsan&age=18',  
query: { name: 'zhangsan', age: '18' }, //页面参数部分，已经解析成对象了  
pathname: '/byte/',  
path: '/byte/?name=zhangsan&age=18',  
href: 'http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two' };  
var url2=url.format(obj2);  
console.log(url2); //http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two  

```

```javascript
//缺少参数的情况  
var obj3={ protocol: null,  
slashes: true,  
auth: null,  
host: 'www.gongjuji.net',  
port: null,  
hostname: 'www.gongjuji.net',  
hash: '#one',  
search: '?name=zhangsan',  
query: { name: 'zhangsan' },  
pathname: '/byte/',  
path: '/byte/?name=zhangsan',  
href: '//www.gongjuji.net/byte/?name=zhangsan#one' };  
var url3=url.format(obj3);  
console.log(url3);//www.gongjuji.net/byte/?name=zhangsan#one  
```

#### 替换
url.resolve() 方法会以一种 Web 浏览器解析超链接的方式把一个目标 URL 解析成相对于一个基础 URL。
```javascript
url.resolve(from, to)
```
用来插入或替换URL内容

参数：
* from 源地址
* to 需要添加或替换的标签

from <string> 解析时相对的基本 URL。
to <string> 要解析的超链接 URL。

实例：
```javascript
url.resolve('/one/two/three', 'four')         // '/one/two/four'
url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two') // 'http://example.com/two'
```

## 服务器响应 HTML  CSS JavaScript

```JavaScript
var http = require('http');
var fs = require('fs');
var url = require('url');

 // 创建服务器
http.createServer( function (request, response) {
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   var postfix = pathname.match(/(\.[^.]+|)$/)[0];//取得后缀名
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");

   // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
        // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
      }else{            
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         console.log(postfix);
         if(postfix==='html'){
             response.writeHead(200, {'Content-Type': 'text/html'});   
         }else if(postfix==='css'){
            response.writeHead(200, {'Content-Type': 'text/css'});
         }
         else if(postfix==='js'){
            response.writeHead(200, {'Content-Type': 'application/javascript'});
         }else{
         }
         // 响应文件内容
         response.write(data.toString());       
      }
      //  发送响应数据
      response.end();
   });
}).listen(8080);
```


#### 流程
