# 浏览器对象模型（BOM）

## 目标
* 掌握BOM相关的5大对象
* 熟悉iframe框架


## BOM
浏览器对象模型BOM，提供了访问浏览器的接口。这些功能大多和网页内容无关，多年来，由于缺乏规范导致BOM中的不同方法在不同浏览器中的实现有所差异，直到html5，才将BOM的主要方面纳入规范。
* 浏览器对象模型（Browser Object Model）
* BOM提供了独立于内容而与浏览器窗口进行交互的对象。
* 由于BOM主要用于管理窗口与窗口之间的通讯，因此其核心对象是window
* BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性
* BOM缺乏标准，javaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C


##  window对象
window对象在浏览器中具有双重角色：它既是ECMAscript规定的全局global对象，又是javascript访问浏览器窗口的一个接口。
* 所有浏览器都支持 window 对象。它表示浏览器窗口，是BOM的顶层（核心）对象，所有对象都是通过她延伸来的！
* 所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。
* 全局变量是 window 对象的属性。全局函数是 window 对象的方法。
* 由于window对象是顶层对象，因此调用他的子对象时可以不显示的指明window对象，例如下面这俩行代码是一样的：
```javascript
document.write(“今天天气真不错”);
window. document.write(“今天天气真不错”);
```

####   window尺寸
两个属性可用用于确定浏览器窗口的尺寸。
这两个属性都以像素返回尺寸：
window.innerHeight - 浏览器窗口的内高度（以像素计）
window.innerWidth - 浏览器窗口的内宽度（以像素计）
浏览器窗口（浏览器视口）不包括工具栏和滚动条。
对于 Internet Explorer 8, 7, 6, 5：
```javascript
document.documentElement.clientHeight
document.documentElement.clientWidth
```
或
```javascript
document.body.clientHeight
document.body.clientWidt
```
】

#### window方法
###### 窗体控制函数：
* moveBy( )        //window.moveBy(60,50);相对
* moveTo( ) 	//window.moveTo(60,50);绝对
* resizeBy( ) 	//window.resizeBy(60,50);相对
* resizeTo( ) 	//window.resizeTo(60,50);绝对
###### 窗体滚动轴控制函数：
* scrollTo( )	//绝对
* scrollBy( )        //相对
###### 新建窗体函数：
* close( )
* 0pen( )

```javascript
语法：
window.open(url,name,feature,replace);
```
url -- 要载入窗体的URL
name -- 新建窗体的名称(也可以是HTML target属性的取值，目标)
features -- 代表窗体特性的字符串，字符串中每个特性使用逗号分隔
replace -- 一个布尔值，说明新载入的页面是否替换当前载入的页面，此参数通常不用指定

###### 系统输入框
alert()、confirm()、prompt()
1.alert()
用于显示带有一条指定消息和一个确定按钮的警告框。
2.confirm()
用于显示一个带有指定消息和确定及取消按钮的对话框。
语法：confirm(message)
如果用户点击确定按钮，则 confirm() 返回 true。如果点击取消按钮，则 confirm() 返回 false。


## Location 对象
Location 对象包含有关当前 URL(统一资源定位符) 的信息。（Uniform Resource Location）
Location 对象是 Window 对象的一个部分，可通过 window.location 属性来访问。
location.hostname   返回当前 URL 的主机名。
location.pathname  返回当前 URL 的路径部分。
location.protocol   返回当前 URL 的协议。
location.href      返回完整的 URL。

## Navigator 对象
Navigator 对象包含有关浏览器的信息。
appName  返回浏览器的名称。
appCodeName 返回浏览器的代码名称的字符串。
cookieEnabled 指明浏览器中是否启用 cookie 的布尔值。
platform  返回运行浏览器的操作系统平台。
appVersion 返回浏览器的平台和版本信息。
userAgent-- 用户代理头的字符串表示

>注意：
     navigator中最重要的是userAgent属性，返回浏览器版本等信息的字符串。cookieEnabled可以判断用户浏览器是否开启了cookie

## Screen 对象
Screen 对象包含有关客户端显示屏幕的信息。
height   返回显示屏幕的高度。
width   返回显示器屏幕的宽度。
availHeight  显示屏幕的可用高度 (除 Windows 任务栏之外)。
availWidth  显示屏幕的可用宽度 (除 Windows 任务栏之外)。

## History 对象
History 对象包含用户(在浏览器窗口中)访问过的 URL。
history.back()  后退（如果存在）。
history.forward()   前进。

5.7 iframe框架

5.8 cookie
