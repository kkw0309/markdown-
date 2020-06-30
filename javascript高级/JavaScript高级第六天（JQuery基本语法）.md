# JavaScript 高级第六天

## 目标
* 掌握 JQuery 基本语法
* 对象转换和基本选择器
* JQuery 基本DOM操作

var element = $('#id') <==> var element = document.getElementById('id')

## JQuery基本语法
 jQuery是一个快速、简洁的JavaScript框架，它让我们的代码变得更简捷，大大减少了我们的工作量。



### JQuery 引入
关键：独立的js文件不需要引用任何jquery.js文件，只需要在相应的html网页中引用jquery.js和.js文件，jquery文件引用必须在.js文件之前。
示例
```HTML
<script src="JavaScript/jquery-3.4.1.min.js"></script>
<script src="JavaScript/main.js"></script>
```

### jQuery 版本
目前最新版本 3.4.1
其中jquery-3.4.1.min.js 表示的是压缩版，在实际的项目开发中使用，将其中的空格换行都清除了
而jquery-3.4.1.js 是未压缩版，里面有很好的格式，便于学习和阅读。
两个版本实际使用没有区别

### 基本语法
$是jQuery的缩写，同时为jQuery标识符

#### JQuery 文档就绪函数
```javascript
$(document).ready(function(){
　　　// JQuery代码
　　　console.log(jQuery(":input:disabled"));
　});

$(function(){});　//简写形式
```
###### ready() οnlοad() load方法
等待元素加载时，我们一般会使用onload或者load元素，但是这两种方法必须等DOM元素中的元素（例如图片，第三方网站等等）完全加载完毕时才能执行下面的方法。这时我们就可以使用ready（）方法，这个方法只要等DOM元素加载出来即可执行下面的语句.
```javascript
window.οnlοad=function(){
		console.log('onload');
	}
$(window).load(function(){
		 console.log('load');
});
$(document).ready(function(){
		console.log('ready');
})
```
控制台先打印出来“ready”，等图片完全加载出来时之后，再加载出来“load”“onload”。

区别：
* window.onload必须等待网页资源（包括图片等）全部加载完成后，才能执行；
　　 文档就绪函数只需等到网页DOM结构加载完成后，即可执行。

* window.onload在一个页面中，只能写一次；
　　　文档就绪函数在一个页面中，可以有N个。


## 对象转换
### JS对象和jQuery对象：

* 使用$("")取到的节点为jQuery对象，只能调用JQuery方法，不能调用原生JS方法。

```javascript
$("#div").click(function(){}); 　　　　// √
$("#div").onclick = function(){};　　 // × JQuery对象不能调用原生JS方法
```
　
* 同理，使用getElement系列函数取到的为JS对象，也不能调用JQuery函数。

### jQuery对象与JS对象的相互转换

* jQuery转JS：使用.get(index) 或 [index] 选中的就是JS对象；

```javascript
$("div").get(0).onclick = function(){}
$(".div1")[0].onclick = function(){}
```

* JS转jQuery：使用$()包裹JS对象。
```javascript
var div = document.getElementsByTagName("div");
$(div).click(function(){});
```
　

## 选择器

###	基本选择器

#### id选择器

返回值：JQuery 对象 而不是JavaScript对象，所以使用的时候不能使用原生JS的方法和属性
```javascript
var element1 = $('#box1');		//根据id
var element2 = $('#box1,#box2'); //通过逗号分隔选择多个元素

```
#### 元素选择器
```javascript
var element = $('div');

```
#### class 选择器
```javascript
var element = $('.box1');
```
#### 选中页面的所有元素
```javascript
$("*")：//选取所有元素
```

#### 多个选择器
```javascript
$('div,span,p')
```

```javascript
("*")：//选取所有元素。

$(this)：//选取当前 window 。

$("p.intro")：//选取 class 为 intro 的 <p> 元素。

$("p:first")：//选取第一个 <p> 元素。

$("ul li:first")：//选取第一个 <ul> 元素的第一个 <li> 元素。

$("ul li:first-child")：//选取每个 <ul> 元素的第一个 <li> 元素。

$("[href]")：//选取带有 href 属性的元素。

$("a[target='_blank']")：//选取所有 target 属性值等于 "_blank" 的 <a> 元素。

$("a[target！='_blank']")：//选取所有 target 属性值不等于 "_blank" 的 <a> 元素。

$(":button")：//选取所有 type = "button" 的 <input> 元素和 <button> 元素。
```

```javascript
$('.list > li').addClass('highLight');                  //后代选择器    //属性选择器
$('a[href*="www"]').addClass('highLight');              //选择a标签的href的属性包含“www”的
$('a[href^="http"]').addClass('highLight');             //选择a标签的href的属性以http开头的
$('a[href$="http"]').addClass('highLight');             //选择a标签的href的属性以http结尾的
$('a[href][target]').addClass('highLight');             //选择同时包含a标签的href的属性以target属性的
$('a[href][target]').addClass('highLight');             //选择同时包含a标签的href的属性以target属性的
$('a[href!="www.baidu.com"]').addClass('highLight');    //选择a标签的href的属性不等于“www”的（css中没有的选择方法）
$('p[data-id]="1"').addClass('highLight');   
```


## 改变对象的css样式方法
示例
```javascript
 $("选择器").css({css属性1:"值",css属性2:"值"});
```
>带"-"的css属性，要用驼峰写法 font-size 要写成 fontSize,如果不用驼峰写法，属性名要用引号引起来,属性值一定要加""引号

## 层次选择器
后代选择器
```javascript
 $("选择器 后选择器")
```
子代选择器  
```javascript
$("父选择器>子选择器")
```
下一个兄弟选择  
```javascript
$("选择器+next选择器")
```

## 基本过滤选择器
:first 查找第一个元素   
返回文档中第一次出现的元素
```javascript
$("选择器:first") 等同于 $("选择器").first()
```

last 查找最后一个元素  
返回文档中最后出现的元素
```javascript
$("选择器：last")等同于  $("选择器").last()
```

:not(选择器),排除括号内的选择器   
```javascript
$("选择器:not(选择器)")等同于 $("选择器").not("选择器")
```

:even 查找有索引值为偶数的元素
```javascript
$("tr:even")：//选取偶数位置的 <tr> 元素。

```
:odd  查找有索引值为奇数的元素
```javascripts
$("tr:odd")：//选取奇数位置的 <tr> 元素。
```
:eq(index) 查找给定索引值的元素
```javascript
$("选择器：eq(index)") 等价于  $("选择器").eq(index)  
```
这里index为索引值对应的数字 0-n

:gt(index) 查找大于给定索引值的元素  
```javascript
$("选择器:gt(index)")
```

:lt(index)  查找小于给定索引值的元素

```javascript
$("选择器:lt(index)")
```


	4.内容过滤选择器
		1) :contains(text)  查找包含给定文本的元素  $("选择器:contains(内容)")
		2):has(选择器)   查找包含给定选择器的元素

	5.属性过滤选择器

		1) [属性名] 用法 $("选择器[属性名]") 查找含有给定属性的元素
		2)[属性名=值] 查找给定的属性是特定值的元素  $("选择器[属性名=值]")

	6.子元素过滤选择器
		1):first-child 第一个子元素   $("选择器：first-child")
		2):last-child  最后一个子元素  
		3):nth-child(n) 匹配第n个元素
	7.表单选择器
		:text 匹配单选文本
		:checkbox 匹配复选框
		:checked 匹配被选中的复选框
    8.$(':empty') 匹配不包含子元素和文本的元素(空元素)
      $('div').empty() 将某一元素内元素全部清空;


内容过滤选择器（2个）
:contains(text)	$(‘p:contains(“张三”)’)
:has(selector)
属性过滤选择器（2个）
[attribute]		$(‘div[“name”])
	[attribute=value]
子元素过滤选择器（2个）
:first-child
	:last-child
表单选择器	（记住1个其余都能记住）
:input
表单属性过滤选择器（1个）
:checked

选择方法
后代选择器和 find()方法
子元素选择器和 children 方法
next 选择器和 next()方法
nextAll 选择器、prev 方法、prevAll 方法、siblings 方法
Eq()、index()、html()、text()、first()、last()等等

JQuery API
















作业：
创建一个六行的表格，包含学生的姓名、年龄、身高、爱好， 使用JQuery设置CSS属性，单行红色背景，双行黄色背景
