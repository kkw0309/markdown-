# 移动端第三天

##目标
* meta 定义


## PC端常见的mata定义
#### author
声明网页的作者信息
```HTML
 <meta name="author" content="zhaotianwei@gmail.com"/>
```


#### description
网站内容描述
```HTML
<meta name="description" content="某维是中国前端开发知名品牌，JS前端培训，以专注立身；70%的同学来自老学员推荐，以诚信立业。"/>
```

#### keywords
关键字
用来告诉搜索引擎你网页的关键字是什么(这个关键字的设定对于整个页面的SEO优化非常的重要)。一般来说我们会根据当前页面所展示的内容来设定一组关键词语，这样用户在网上进行搜索的时候，搜索引擎会把拥有或者靠近相关关键词的页面呈现给用户，以达到产品推广的作用(当然这个需要长期的SEO/SEM等运营推广才会让自己的网页在搜索出的结果中靠前)。关键字内容太短，搜索引擎可能不会认为和这些内容有关，但是关键字的设定不能超过874个字符。
```HTML
<meta name="keywords" content="javascript培训,js培训,HTML5培训,css培训,前端开发培训,node.js培训,nodeJS培训"/>
```


#### generator
网页制作软件
```HTML
<meta name="generator" content="Sublime Text3">
```

#### revised
revised	网页文档的修改时间
```HTML
<meta name="revised" content="积云, 8/22/2019"/>
```

#### 字符编码：声明文档使用的字符编码
相对于这种方式，更推荐你（推荐使用HTML5的声明方式）。
```HTML
<meta http-equiv="content-type" content="text/html; charset=utf-8;"/>
```


#### 最高ie版本打开
```HTML
<meta http-equiv="x-ua-compatible" content="IE=Edge, chrome=1"/>

```

#### Expires（期限）
该声明用来指定页面的过期时间，一旦网页过期，从服务器上重新请求，其中时间必须使用GMT格式，或者直接是0（即不缓存）
```HTML
<meta http-equiv="expires" content="Thu Jan 01 1970 00:00:00 GMT 或者 0"/>
```


#### Pragma(cache模式）
禁止浏览器从本地计算机的缓存中访问页面内容。
```HTML
<meta http-equiv="pragma" content="cache"/>     
<meta http-equiv="cache-control" content="no-cache"/>
```

#### Refresh（刷新）
该声明用来指定页面自刷新或者跳转到其它页面，其中的时间单位是s。第一种写法是10s后刷新本页面，第二种写法是10s后跳转到新的页面。
```HTML
<meta http-equiv="refresh" content="10"/>     
<meta http-equiv="refresh" content="10; url=..."/>
```

#### Set-Cookie(cookie设定）
如果网页过期，那么存盘的cookie将被删除。

```HTML
 <meta http-equiv="set-cookie" content="[cookie名字]=[cookie值]; expires=[cookie过期时间];path=/;"/>
```


#### Window-target（显示窗口的设定）
强制页面在当前窗口以独立页面显示。用来防止别人在框架里调用自己的页面。
```HTML
  <meta http-equiv="window-target" content="_top"/>
```


#### robots（机器人向导）
robots用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。
content的参数有 all(默认值),none,index,noindex,follow,nofollow。
all：文件将被检索，且页面上的链接可以被查询；
none：文件将不被检索，且页面上的链接不可以被查询；
index：文件将被检索；
follow：页面上的链接可以被查询；
noindex：文件将不被检索；
nofollow：页面上的链接不可以被查询。

```HTML
<meta name="robots" content="index,follow"/>    
<meta name="google" content="index,follow"/>

<!-- 下面是声明其它搜索引擎的搜索模式      -->
<meta name="googlebot" content="index,follow"/>    
 <meta name="verify" content="index,follow"/>
```


#### 声明搜索引擎抓取间隔
有时候你可能并不希望站点一直被搜索引擎抓取，而是每间隔一段时间才来访问一次，这时，可以声明revisit-after meta
```HTML
<meta name="revisit-after" content="10 days"/>
```


## 移动端Meta定义

#### http-equiv

http-equiv顾名思义，相当于http的文件头作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为content，content中的内容其实就是各个参数的变量值。

http-equiv属性语法格式是：
```HTML
<meta http-equiv="参数" content="参数变量值">;
```
###### 其中http-equiv属性主要有以下几种参数：
http-equiv属性

* refresh：定义文档自动刷新的时间间隔。
```HTML
<meta http-equiv="refresh" content="300">
```

* content-type：规定文档的字符编码。

```HTML
 <meta http-equiv="content-type" content="text/html; charset=UTF-8">
```

* content-language（显示语言的设定）
```html
<meta http-equiv=“content-language” content=“zh-cn”/>

```

* X-UA-Compatible
要为网页指定文件兼容性模式，需要在网页的meta标签中的http-equiv设置为X-UA-Compatible。
如果优先使用 IE 最新版本和 Chrome，则对应的content值为“IE=edge，chrome=1”

```HTML
<meta http-equiv=“X-UA-Compatible” content=“IE=edge,chrome=1”>
```

* name属性
name 属性来定义一个 HTML 文档的描述、关键词、作者

description
description：规定页面的描述。搜索引擎会把这个描述显示在搜索结果中。
实例：
```HTML
<meta name="description" content="Free web tutorials">
```
SEO 搜索

keywords
keywords：规定一个逗号分隔的关键词列表 - 相关的网页（告诉搜索引擎页面是与什么相关的）。
提示：总是规定关键词（对于搜索引擎进行页面分类是必要的）

```HTML
<meta name="keywords" content="HTML, meta tag, tag reference">
```


#### Viewport(移动端)
viewport
viewport 是用户网页的可视区域。
viewport 翻译为中文可以叫做"视区"。
手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。
一个常用的针对移动网页优化过的页面的 viewport meta 标签大致如下：

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, user-scalable=no">
```
>友情提示：我们在开发移动设备的网站时，最常见的一个动作就是把上面的这段代码复制到我们的head标签中。
该meta标签的作用是让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放。也许允不允许用户缩放不同的网站有不同的要求，但让viewport的宽度等于设备的宽度，这个应该是大家都想要的效果，如果你不这样设定的话，那就会使用那个比屏幕宽的默认viewport，也就是会出现横行滚动条。

#### width
控制 viewport 的大小，可以指定的一个值，如果 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
height：和 width 相对应，指定高度。
initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
maximum-scale：允许用户缩放到的最大比例。
minimum-scale：允许用户缩放到的最小比例。
user-scalable：用户是否可以手动缩放。
yes:可以手动
no:不可以

<!-- format-detection
format-detection翻译成中文的意思是“格式检测”，顾名思义，它是用来检测html里的一些格式的，那关于meta的format-detection属性主要是有以下几个设置：

meta name="format-detection" content="telephone=no"
meta name="format-detection" content="email=no"
meta name=“format-detection” content="adress=no"

也可以连写：meta name="format-detection" content="telephone=no,email=no,adress=no"
 -->

<!-- 下面具体说下每个设置的作用：
一、telephone
你明明写的一串数字没加链接样式，而iPhone会自动把你这个文字加链接样式、并且点击这个数字还会自动拨号！想去掉这个拨号链接该如何操作呢？这时我们的meta又该大显神通了，代码如下：
telephone=no就禁止了把数字转化为拨号链接！
telephone=yes就开启了把数字转化为拨号链接，要开启转化功能，这个meta就不用写了,在默认是情况下就是开启！


幻灯片16
二、email
告诉设备不识别邮箱，点击之后不自动发送
email=no禁止作为邮箱地址！
email=yes就开启了把文字默认为邮箱地址，这个meta就不用写了,在默认是情况下就是开启！
三、adress
adress=no禁止跳转至地图！
adress=yes就开启了点击地址直接跳转至地图的功能,在默认是情况下就是开启！


幻灯片17
CSS3属性：
禁止选中文本
-webkit-user-select：none | text
默认值：text
none：文本不能被选择
text：可以选择文本


幻灯片18
去掉webkit默认的表单样式
例：
button,input,optgroup,select,textarea {
-webkit-appearance:none; /*去掉webkit默认的表单样式*/
}

幻灯片19
当用户轻按一个链接或者JavaScript可点击元素时给元素覆盖一个高亮色

a{-webkit-tap-highlight-color:blue;}
//点击时a标签会被高亮显示
再移动端上才有效果

幻灯片20
修改webkit中input的planceholder样式
例：
input::-webkit-input-placeholder {
color:#ccc; /*修改webkit中input的planceholder样式*/
} -->


## em rem
#### em  
相对于其⽗元素来设置字体⼤⼩的，这样就会存在⼀个问题，进⾏任何元素设置，都有可能需要知道他⽗元素的⼤⼩，在我们多次使⽤时，就会带来⽆法预知的错误⻛险
#### rem
rem是CSS3新增的⼀个相对单位.仍然是相对⼤⼩，但相对的只是HTML根元素。这个单位可谓集相对⼤⼩和绝对⼤⼩的优点于⼀身，通过它既可以做到只修改根元素就成⽐例地调整所有字体⼤⼩，⼜可以避免字体⼤⼩逐层复合的连锁反应
