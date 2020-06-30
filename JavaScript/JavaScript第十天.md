## JavaScript 事件

## 目标
* 理解什么是事件
* 事件流
* 事件类型


## 事件的概念

#### JavaScript
面向对象语言的三大特征：封装 继承 多态
Js是一门基于对象和事件驱动的脚本语言，专门为网页交互，主要应用在客户端(浏览器)
基于对象：注意不是面向对象，没有面向对象语言的特征(没有编译过程，一边解释一边执行,JS没有编译的过程也没有类的概念，JS用函数来模拟类),但是js可以通过一些机制来模拟面向对象语言的特征，所以不能称之为是面向对象，我们称js是基于对象的。
事件驱动：在js中，很多地方都是通过事件触发来驱动函数执行，从而实现某些功能。
脚本语言：在网络前端开发环境下，能够嵌入在浏览器端中的一段小程序叫做脚本语言。

#### 事件的概念
JavaScript使我们有能力创建动态页面，网页中的每一个元素都可以产生某些触发JavaScript函数的事件。我们可以认为事件是可以被JavaScript侦测到的一种行为。

####  事件流
事件流描述的是从页面中接收事件的顺序，也可理解为事件的轨迹。一般地，将事件流分为三个阶段：捕获阶段，目标阶段和冒泡阶段。

##### 事件模型分类
事件模型分类：
* 基本事件模型 
* 标准事件模型 
* IE事件模型 
基本事件模型：通过简单的事件属性，为指定的标签绑定事件处理函数，获得所有浏览器支持，但对标签依赖太重，不利于独立开发，面对复杂的Web应用会束手无策，因此不建议使用
标准事件模型：由W3C指定，包含DOM1.0、DOM2.0、DOM3.0  ，目前大部分浏览器都支持DOM2.0，但现代浏览器对DOM3.0支持还不统一、不完善
IE事件模型：由于IE4.0以及以上版本浏览器支持，它具有标准事件的高级特性，但用法略有不同

#### 事件冒泡
冒泡：事件从最特定的的目标到最不特定的目标（Document对象）的顺序触发，即事件从下向上（从里到外，从子到父）传递，象冒泡一样上升到顶端
```JavaScript
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>标准事件流(冒泡事件)</title>
        <script type="text/javascript">
            function show(sText){
                var oDiv=document.getElementById("display");
                oDiv.innerHTML+=sText;
            }
        </script>
    </head>
    <body onclick="show('body<br>')">
        <div onclick="show('div<br>')">
            <p onclick="show('p<br>')">click me</p><!--用此方法为通用型事件，HTML和js脚本混在一起，没有隔离开来。-->
        </div>
        <div id="display"></div>
    </body>
</html>
```
#### 阻止事件冒泡
####  事件捕捉
事件捕获的思想时不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。事件捕获的意义在于在在事件到达预定目标之前捕获它。

## DOM事件流
DOM标准采用捕获+冒泡。两种事件流都会触发DOM的所有对象，从document对象开始，也在document对象结束
![](https://images2015.cnblogs.com/blog/315302/201606/315302-20160621155328756-279009443.png)


addEventListener是DOM2级事件新增的指定事件处理程序的操作，这个方法接收3个参数：要处理的事件名，作为事件处理程序的函数和一个布尔值，最后这个布尔值如果是true，表示在捕获阶段调用事件处理程序；如果是false，表示在冒泡阶段调用事件处理程序。



addEventListener('String：表示事件的类型',事件的处理函数,boolean：true 处于事件捕获阶段 false：处于时间的冒泡阶段)



#### DOM0级事件处理程序

分为2个：一是在标签内写onclick事件

　　　　  二是在JS写onlicke=function（）{}函数
#### DOM2级事件处理程序
只有一个：监听方法，有两个方法用来添加和移除事件处理程序：addEventListener()和removeEventListener()。

它们都有三个参数：第一个参数是事件名（如click）；

　　　　　　　　　第二个参数是事件处理程序函数；

　　　　　　　　   第三个参数如果是true则表示在捕获阶段调用，为false表示在冒泡阶段调用。

addEventListener():可以为元素添加多个事件处理程序，触发时会按照添加顺序依次调用。
removeEventListener():不能移除匿名添加的函数。
#### IE事件处理程序
IE中采用的事件流是事件冒泡，先从具体的接收元素，然后逐步向上传播到不具体的元素。
## 事件类型
#### UI事件
追踪用户在页面中的各种行为，如监听表单的输入  focus（获得焦点）  blur（失去焦点）,与表单的各种交互，submit  change select
#### 焦点事件
onfocus 事件在对象获得焦点时发生。
onblur 事件会在对象失去焦点时发生。
#### 鼠标事件
跟踪鼠标当前定位（mouseover  mouseout）,跟踪鼠标单击（mouseup  mousedown  click）

######  click
用户单击鼠标主按钮（一般为左边按钮）或者在获得焦点的前提下按回车键时触发。
click()方法也可以触发click 事件。

###### dblclick
dblclick用户双击鼠标主按钮（一般为左边按钮）时触发。
mousedown：按下任意鼠标按钮时触发。
mouseup：释放鼠标按钮时触发。

###### mouseenter
鼠标光标从元素外部首次移动到元素范围之内时触发，这个事件不冒泡，而且在光标移动到后代元素上不会重复触发。通常和mouseleave搭配使用。
mousemove：鼠标光标在元素内部移动时重复地触发。
mouseover：鼠标光标位于一个元素外部，首次移动到另一个元素边界之内（包括后代元素）时触发。


#### 键盘事件
keyup  keydown keypress                          
