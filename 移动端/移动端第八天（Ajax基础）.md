# 移动端第八天 Ajax

## 目标
* 掌握Ajax原理
* 了解服务器

## Ajax基础

### 什么是服务器
Linux

Unix
服务器是一种高性能计算机，作为网络的节点，存储、处理网络上80％的数据、信息，因此也被称为网络的灵魂。也可以这样讲，服务器指一个管理资源并为用户提供服务的计算机软件，通常分为文件服务器、数据库服务器和应用程序服务器。运行以上软件的计算机或计算机系统也被称为服务器。相对于普通PC来说，服务器在稳定性、安全性、性能等方面都要求更高，因此CPU、芯片组、内存、磁盘系统、网络等硬件和普通计算机有所不同，在质量与处理器数据性能上更出色。

## 网络模型
#### OSI七层网络模型
* 物理层

type-c

作用：负责最后将信息编码成电流脉冲或其它信号用于网上传输。它由计算机和网络介质之间的实际界面组成，可定义电气信号、符号、线的状态和时钟要求、数据编码和数据传输用的连接器。所有比物理层高的层都通过事先定义好的接口而与它通话。

协议：如最常用的RS-232规范、10BASE-T的曼彻斯特编码以及RJ-45就属于第一层。

* 数据链路层

作用：数据链路层通过物理网络链路提供可靠的数据传输。

协议：ATM，FDDI等。 

* 网络层

作用：这层对端到端的包传输进行定义，他定义了能够标识所有结点的逻辑地址，还定义了路由实现的方式和学习的方式。为了适应最大传输单元长度小于包长度的传输介质，网络层还定义了如何将一个包分解成更小的包的分段方法。

协议：IP,IPX等

* 传输层

作用：传输层向高层提供可靠的端到端的网络数据流服务。传输层的功能一般包括流控、多路传输、虚电路管理及差错校验和恢复。流控管理设备之间的数据传输，确保传输设备不发送比接收设备处理能力大的数据；多路传输使得多个应用程序的数据可以传输到一个物理链路上；虚电路由传输层建立、维护和终止；差错校验包括为检测传输错误而建立的各种不同结构；而差错恢复包括所采取的行动（如请求数据重发），以便解决发生的任何错误。

协议：TCP，UDP，SPX。

* 会话层

作用：会话层建立、管理和终止表示层与实体之间的通信会话。通信会话包括发生在不同网络应用层之间的服务请求和服务应答，这些请求与应答通过会话层的协议实现。它还包括创建检查点，使通信发生中断的时候可以返回到以前的一个状态。

协议：RPC，SQL等

* 表示层

作用：这一层的主要功能是定义数据格式及加密。

协议：FTP,加密

* 应用层

作用：应用层是最接近终端用户的OSI层，这就意味着OSI应用层与用户之间是通过应用软件直接相互作用的。注意，应用层并非由计算机上运行的实际应用软件组成，而是由向应用程序提供访问网络资源的API（Application Program Interface，应用程序接口）组成，这类应用软件程序超出了OSI模型的范畴。应用层的功能一般包括标识通信伙伴、定义资源的可用性和同步通信。因为可能丢失通信伙伴，应用层必须为传输数据的应用子程序定义通信伙伴的标识和可用性。定义资源可用性时，应用层为了请求通信而必须判定是否有足够的网络资源。在同步通信中，所有应用程序之间的通信都需要应用层的协同操作。
协议：telnet，HTTP,FTP,WWW,NFS,SMTP等。
 

#### OSI分层的优点： 

* 人们可以很容易的讨论和学习协议的规范细节。 
* 层间的标准接口方便了工程模块化。 
* 创建了一个更好的互连环境。 
* 降低了复杂度，使程序更容易修改，产品开发的速度更快。 
* 每层利用紧邻的下层服务，更容易记住个层的功能。 



## 网页浏览过程分析
#### 第一步：浏览器解析url

浏览器会对我们输入的url进行解析，主要将其分为下部分：协议、网络地址、资源路径。其中网络地址指示该连接网络上哪一台计算机，可以是域名或者IP地址，可以包括端口号；协议是从该计算机获取资源的方式，常见的是HTTP，HTTPS，FTP等。不同协议有不同的通讯内容格式；资源路径指示从服务器上需要获取资源的具体路径。
这里浏览器对输入的url解析为如下内容：

* url：http://www.baidu.com:8080/blog/2016/08/http.html
* 协议：http
* 网络地址（网站名）：www.ruanyifeng.com
* 资源路径：/blog/2016/08/http
当然，浏览器还知道端口信息和参数信息，但这一步还用不上。另外网络地址由服务器名：www和域名ruanyifeng.com组成。

#### 第二步： DNS域名解析
浏览器理解用户输入的信息，知道用户想要用http访问一个网络地址是“www.baidu.com”的网站。网站服务器的门牌号就是IP地址。所有浏览器首先要确认的是域名所对应的服务器在哪里。将域名解析成对应的服务器IP地址这项工作，是由DNS服务器来完成的。
客户端收到你输入的域名地址后，它首先去找本地的hosts文件，检查在该文件中是否有相应的域名、IP对应关系，如果有，则向其IP地址发送请求，如果没有，再去找DNS服务器。一般用户很少去编辑修改hosts文件。



#### 第三步：浏览器获取端口号
端口号之于计算机就像窗口号之于银行，一家银行有多个窗口，每个窗口都有个号码，不同窗口可以负责不同的服务。端口只是一个逻辑概念，和计算机硬件没有关系。http协议默认端口号是80。

#### 第四步：TCP建立连接
在http消息发送前，需要建立客户端与服务器的TCP链接，也就是进行所谓的三次握手。
TCP是因特网中的传输层协议，使用三次握手协议建立连接。当主动方发出SYN连接请求后，等待对方回答SYN+ACK，并最终对对方的 SYN 执行 ACK 确认。这种建立连接的方法可以防止产生错误的连接，TCP使用的流量控制协议是可变大小的滑动窗口协议。

https/http
socket


TCP三次握手的过程如下：

客户端发送SYN（SEQ=x）报文给服务器端，进入SYN_SEND状态。

服务器端收到SYN报文，回应一个SYN （SEQ=y）ACK(ACK=x+1）报文，进入SYN_RECV状态。

客户端收到服务器端的SYN报文，回应一个ACK(ACK=y+1）报文，进入Established状态。

三次握手完成，TCP客户端和服务器端成功地建立连接，可以开始传输数据了。

#### 第五步: 发送HTTP请求

#### 第六步：服务器处理请求

服务器需要响应浏览器的请求。
服务器端收到请求后的由web服务器（准确说应该是http服务器）处理请求，诸如Apache、Ngnix、IIS等。web服务器解析用户请求，知道了需要调度哪些资源文件，再通过相应的这些资源文件处理用户请求和参数，并调用数据库信息，最后将结果通过web服务器返回给浏览器客户端。下面以静态渲染的页面为例，ajax渲染不需要在服务器做页面数据写入。

#### 第七步：返回响应结果
在HTTP里，有请求就会有响应

#### 第八步: 关闭TCP连接

#### 第九步：浏览器加载解析渲染

#### 第十步:浏览器发送嵌入在HTML中的对象的请求

随着浏览器渲染HTML，浏览器会注意到有些标签需要请求其他URLs的资源，浏览器将会发送一个GET请求来重新获取每个文件 。比如js文件，css文件，图片资源等。
每个URLs会像获取HTML页面的过程一样获取相应资源。所以，浏览器会在DNS中查询域名，并向URL发送请求，进行重定向（其实以上步骤我是省略了重定向这一步的）等等以上步骤

当然，静态文件和动态网站不一样，它们允许被浏览器缓存。一些文件可能会根本不经过服务器，直接被从缓存中取出。因为响应结果中返回一个包含着Expires头的文件，所以浏览器知道要缓存一个文件多久。另外每个响应可能包含着ETag头，其作用类似版本号，如果浏览器发现已经拥有了一个文件的ETag，那么就会立即停止此文件传输。

#### 第十一步：浏览器发送异步请求



## 如何配置自己的服务器程序（AMP）
## 什么是Ajax
Ajax 全称是 asynchronous javascript and xml，并不是新的编程语言，可以说是已有技术的组合，主要用来实现客户端与服务器端的异步通信效果，实现页面的局部刷新，从而创建快速动态网页的技术。
无刷新数据读取



```javascript
// 1、创建XMLHttpRequest对象,也就是创建一个异步调用对象
// 2、创建一个新的HTTP请求,并指定其请求的方法、URL及验证信息
// 3、设置响应 HTTP 请求状态变化的函数
// 4、发送 HTTP 请求
// 5、获取异步调用返回的数据
// 6、使用 JavaScript 和 DOM 实现局部刷新

http://localhost:4000/test?name=刘萍&height=150&weight=110

{
  {
    'xxx':{
      sss：7575&%，
      www:997ew%^&$^
    }
  }
}

var xhr = null; // 创建异步对象
if(window.XMLHttpRequest){
  xhr = new XMLHttpRequest(); // ie7+等现代浏览器
}else if(window.ActiveXObject){ // ie6，老版Opera
  xhr = new ActiveXObject('Microsft.XMLHTTP');
}
xhr.open('get','http://localhost:4000/test',true); // true是异步，可省略
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"); // post 必须设置
xhr.onreadystatechange = function(){ // 若为同步，此代码不用写，直接在send后，用`xhr.responseText`即可。
    if(xhr.readyState==4 && xhr.status==200){
    /*
    readyState
        0: 请求未初始化
        1: 服务器连接已建立
        2: 请求已接收
        3: 请求处理中
        4: 请求已完成，且响应已就绪
    status
        200 OK
        404 Not Found
    */
      // xhr.responseText;

      xhr.responseXML.children[0].children;
      JSON.parse(xhr.responseText);
    }
}
xhr.send(String,function(){

}); // 用于post传参，形式："a=1&b=2"，而get传参就在url后面用“?”拼接



$(".className")


. 确定：class  getElementByClassName('className')

```



异步、同步

Ajax基础(2)
使用Ajax
基础：请求并显示静态TXT文件
字符集编码
动态数据：请求JS（或json）文件
eval的使用
DOM创建元素
局部刷新：请求并显示部分网页文件

Ajax原理
HTTP请求方法
GET——用于获取数据（如：浏览帖子）
POST——用于上传数据（如：用户注册）
GET、POST的区别
get是在url里传数据：安全性、容量
缓存
本课知识点
什么是Ajax，同步和异步有什么区别
http请求方法中，get和post方式有什么区别
