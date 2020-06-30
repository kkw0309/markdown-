# JavaScript 第一天

## 目标
* JavaScript 和 JavaScript 核心和语言特点
* JavaScript 基础语法和基本数据类型
* JavaScript 第一个程序


## JavaScript 以及其发展
### web 三大标准
* 结构标准
* 表现标准
* 行为标准

JavaScript诞生于1995年。起初它的主要目的是处理以前由服务器端负责的一些表单验证。JavaScript 目前广泛应用于众多知名应用中，对于网页和移动开发者来说，深入理解 JavaScript 就尤有必要。

JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。

### JavaScript 简介
1、javascript是一种基于对象和事件驱动的客户端脚本语言。</br>
2、javascript最初的设计师为了检验HTML表单输入的正确性。</br>
3、javascript起源于Netscape公司的livescript语言。</br>

### JavaScript 历史
* 在1995 年 Netscape 一位名为 Brendan Eich 的工程师创造了 JavaScript；
* 随后在 1996 年初，JavaScript 首先被应用于 Netscape 2 浏览器上。
* 最初的 JavaScript 名为 LiveScript，后来因为 Sun Microsystem 的 Java 语言的兴起和广泛使用，Netscape 出于宣传和推广的考虑，将它的名字从最初的 LiveScript 更改为 JavaScript——尽管两者之间并没有什么共同点。这便是之后混淆产生的根源。
* 几个月后，Microsoft 随着 IE 3 推出了一个与之基本兼容的语言 JScript。又几个月后，Netscape 将 JavaScript 提交至 Ecma International（一个欧洲标准化组织）， ECMAScript 标准第一版便在 1997 年诞生了，
* 随后在 1999 年以 ECMAScript 第三版的形式进行了更新，从那之后这个标准没有发生过大的改动。由于委员会在语言特性的讨论上发生分歧，ECMAScript 第四版尚未推出便被废除，
* 但随后于 2009 年 12 月发布的 ECMAScript 第五版引入了第四版草案加入的许多特性。第六版标准已经于2015年六月发布。


### JavaScript 用来做什么
* 嵌入动态文本于HTML页面。
* 对浏览器事件做出响应。
* 读写HTML元素。
* 在数据被提交到服务器之前验证数据。
* 检测访客的浏览器信息。
* 控制cookies，包括创建和修改等。
* 基于Node.js技术进行服务器端编程。


## JavaScript 语言特点和定位
1、脚本编写语言
JavaScript 是一种脚本语言，它采用小程序段的方式实现编程。像其它脚本语言一样,JavaScript 同样已是一种解释性语言，它提供了一个简易的开发过程。</br>
2、基于对象的语言
JavaScript 是一种基于对象的语言，同时也可以看作一种面向对象的语言。这意味着它能运用自己已经创建的对象。因此，许多功能可以来自于脚本环境中对象的方法与脚本的相互作用。</br>
3、简单性
JavaScript是一种基于Java基本语句和控制流之上的简单而紧凑的设计，从而对于学习Java是一种非常好的过渡。它的变量类型是采用弱类型，并未使用严格的数据类型。</br>
4、动态性
JavaScript是动态的，它可以直接对用户或客户输入做出响应，无须经过Web服务程序。它对用户的反映响应，是采用以事件驱动的方式进行的。</br>
所谓事件驱动，就是指在主页（Home Page）中执行了某种操作所产生的动作，就称为“事件”（Event）。比如按下鼠标、移动窗口、选择菜单等都可以视为事件。当事件发生后，可能会引起相应的事件响应。</br>
5、安全性
JavaScript是一种安全性语言，它不允许访问本地的硬盘，并不能将数据存入到服务器上，不允许对网络文档进行修改和删除，只能通过浏览器实现信息浏览或动态交互。从而有效地防止数据的丢失。</br>
6、跨平台性
JavaScript 是依赖于浏览器本身，与操作环境无关，只要能运行浏览器的计算机，并支持 JavaScript 的浏览器就可正确执行。从而实现了“编写一次，走遍天下”的梦想。</br>
实际上 JavaScript 最杰出之处在于可以用很小的程序做大量的事。
综合所述 JavaScript 是一种新的描述语言，它可以被嵌入到 HTML 的文件之中。 JavaScript 语言可以做到回应使用者的需求事件 (如： form 的输入) ，而不用任何的网络来回传输资料。

## JavaScript 组成和核心
![JavaScript 组成](https://img-blog.csdn.net/2018051421035975?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2NjQ3MDM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

JavaScript由以下三个部分组成：

#### DOM（document object mode）文档（HTML文档）对象模型
为我们提供了一套操作页面元素的api（application programming interface） 应用程序编程接口
核心对象：document

			HTML
		head	 body
				div  div  

				write getElementById innerHTML

#### BOM（Browser object mode）浏览器对象模型
核心对象：window

alert
write


#### ECMAScript
ECMA（欧洲计算机制造商协会）
规定了javascript的语法标准（eg:关键字，类型，语句，结构）

## JavaScript 语法及基本数据类型
### 基本语法
```HTML
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>

	<body>
	</body>
</html>
<script>
	document.write("JavaScript 学习");
</script>
```

### 在 HTML 中使用 JavaScript
#### 嵌入 HTML 标记代码中
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
	    <button onclick="alert('开始学习 JavaScript 吧')">点我一下</button><br />
		<br />
		<a href="javascript:alert('我是一个链接')">链接</a>
	</body>
</html>
```

#### script 标签
```html
<!DOCTYPE html>
<html>
  <head>
    <title>JaveScript 学习</title>
  </head>
  <body>
    <button onclick="javascrtpt:button_onclick()">点击</button>
    <script>
        function button_onclick() {
          alert('点击按钮');
        }
    </script>
  </body>
</html>
```

#### 外部文件
##### HTML 文件
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>JaveScript 学习</title>
    <script src="index.js"></script>
  </head>
  <body>
    <button onclick="button_onclick()">点击</button>
  </body>
</html>
```

##### JavaScript 文件
```JavaScript
function button_onclick(){
  alert('按钮被点击了')；
}
```

### JavaScript 四种输出方式
JavaScript 没有任何打印或者输出的函数，但是可以通过不同的方式来输出数据：

1、使用 window.alert() 弹出警告框。
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>JaveScript 学习</title>
  </head>
  <body>
    <h1>用 window.alert 输出结果</h1>
    <script>
      window.alert("我是一个结果");
    </script>
  </body>
</html>
```
2、使用 document.write() 方法将内容写到 HTML 文档中。
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>JaveScript 学习</title>
  </head>
  <body>
    <h1>用 document.write 输出结果</h1>
    <script>
      document.write("我是一个结果");
    </script>
  </body>
</html>
```

3、使用 innerHTML 写入到 HTML 元素。
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>JaveScript 学习</title>
  </head>
  <body>
    <h1>用 innerHTML 输出结果</h1>
    <p id="demo"></p>
    <script>
      document.getElementById("demo").innerHTML="我是一个被更改的段落";
    </script>
  </body>
</html>
```

4、使用 console.log() 写入到浏览器的控制台。
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>JaveScript 学习</title>
  </head>
  <body>
    <h1>用 console.log 输出结果</h1>
    <script>
      console.log("我是输出结果");
    </script>
  </body>
</html>
```

## JavaScript 基础数据类型
### 标示符
>标示符：所谓标示符，就是指变量、函数、属性的名字，或者函数的参数。标示符可以按照下列格式规则组合起来的一个或者多个字符：
* 第一个字符必须是一个字母、下划线、或着一个美元符号；
* 其他字符可以是字母、下划线、美元符号或者数字；
* 按照惯例，ECMAScript 标示符采用驼峰大小写格式，也就是第一个字母小写，剩下的每个单词首字母大写：`studentName`、`myCar`


### 变量
变量：定义变量时要使用 var 操作符，后跟变量名（即一个标示符）：</br>
```JavaScript
var message;
```
变量可以用来保存任何值，未经初始化的变量，会保存一个特殊的值：undefined；ECMAScript 支持直接初始化变量，因此我们可以在定义变量的痛死也可以设置变量的值：
```JavaScript
var message = "hello";
var message = 100;
```
>注意：用 var 操作符定义的变量将成为定义该变量的作用域中的的局部变量，也就是说，如果在函数中使用 var 定义一个变量，那么这个变量在函数退出后就会被销毁：

```javascript
function test(){
	var mesage = "hello";
}
test();
alert(message); //错误
```
省略 var 操作 符，就可以创建一个全局变量：
```javascript
function test(){
	mesage = "hello";
}
test();
alert(message);  // 输出 "hello"
```
只要调用过一次 test 函数，变量 `message` 就会被定义，就可以在函数外部的任何地方被访问。</br>

同样可以一条语句定义多个变量：
```javascript
var message = "hello",
	name = "zhangwei",
	age = 21;
```

### 保留字
abstract	arguments	await*	boolean
break	byte	case	catch
char	class*	const	continue
debugger	default	delete	do
double	else	enum	eval
export	extends	false	final
finally	float	for	function
goto	if	implements	import*
in	instanceof	int	interface
let*	long	native	new
null	package	private	protected
public	return	short	static
super	switch	synchronized	this
throw	throws	transient	true
try	typeof	var	void
volatile	while	with	yield

### 数据类型
#### typeof 操作符
由于 ECMAScript 是松散类型的，就有 typeof 用于检测给定变量的数据类型，对一个变量使用 typeof 操作符可以返回一下字符串值：
* "undefined"：值为定义
* "Boolean"：布尔值
* "String"：字符串值
* "Number"：数值
* "object"：对象或者null
* "function"：函数

```javascript
var message = "hello";
console.log(typeof(message)); //"String"
```


#### Undefined 类型
Undefined 类型只有一个值，就是 undefined:
```javascript
var message;
console.log(mesage);// "undefined"


var age;
console.log(age == undefined); //"true"

// var age;
var message;

console.log(age); // "undefined"
console.log(message); // "undefined"
```

#### Null 类型
Null 类型也只有一个值，就是 null。null 值表示一个空对象指针，所以使用 typeof 操作符检测 null 值是会返回 "object"。

```javascript
var car = null;
console.log(typeof(car)); // "object"
```
>注意：如果定义一个变量用来保存对象，那么在初始化的时候最好初始化为 null，这样做的好处就是只要直接检查 null 值就可以知道相应的变量是否已经保存了了一个对象的引用。

```javascript
var car = null;
if (car != null) {
	// 这里就可以对对象做相应的操作
}

console.log(null == undefined);//true
```

#### Boolean 类型
Boolean 类型很常见，这个类型只有两个字面值：true 和 false。这个两个值和数值的值不是一样的，也就是说 true 不一定等于1，false 不一定等于0。true 和 false 要注意严格区分大小写。

```javascript
var success = true;
var fail = false;

console.log(success);
console.log(fail);
```

##### Boolean()
可以对任何数据类型的值调用 Boolean() 函数，而且总会返回一个 Boolean 值。这种 Boolean() 转换规则对之后要学习的流程控制语句自动执行相应的 Boolean() 转换非常重要：

```javascript
var message = "hello"
if (message) {
	console.log("message is true");
}

var success = 1;//2 3 4 5
var fail = 0 //-1 -2 -10

if (success) {
	console.log("success");
}

if (fail) {
	console.log("fail");
}
```

#### Number 类型
##### 整数
```javascript
var intNum = 10; //十进制整数10
var octalNum = 070 //八进制56
var hexNum = 0xA // 十六进制10
```
普遍使用计算的时候，所有的以八进制和十六进制表示的数值最终都要被转换成十进制数值进行计算。
十六进制数值在实际开发中常用来表示色值。

##### 浮点数
所谓的浮点数，就是该数值中必须包含一个小数点，并且小数点后面必须至少有一位数值，小数点前面可以没有整数，但是这种做法是不推荐的。

```javascript
var floatNum = 1.1;
```
浮点数在电商项目中应用较广，在之后项目阶段会特别讲解。

##### isNaN


##### 数值转换
* Number()
* parseInt()
* parseFloat()

#### String 类型
String 类型用于表示由零或者多个16为 Unicode 字符组成的字符串序列，即字符串。字符串可以由双引号`""`或者单引号`''`表示：
```javascript
var firstName = "zhao";
var lastName = 'tianwei';
```
获取字符串长度：
```javascript
var text = "this is a string";
console.log(text.length);
```
ECMAScript 中的字符串是不可变的，也就是说，字符串一旦被创建，他的值就不能改变，要改变某一个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。

##### 转换为字符串
###### toString()
```javascript
var age = 10;
var ageToString = age.toString();// '10'

var success = true;
var successToString = success.toString();//'true'
```
###### String()
null 和 undefined 值没有 toString() 这个方法的，所以要想将任何类型的值转换为字符串，可以使用 String(); String() 函数遵循下列转换规则：
* 如果值有 toString() 方法，则调用该方法并且返回相应的结果；
* 如果值是 null， 则返回 'null'；
* 如果值是 undefined, 则返回 'undefined'.

```javascript
var valueInt = 10;
var valueNull = null;
var valueUndefined;

console.log(String(valueInt));// '10'
console.log(String(valueNull));// 'null'
console.log(String(valueUndefined));// 'undefined'
```

#### Object 类型
ECMAScript 中的对象其实就是一组数据和功能的集合，对象可以用 new 操作符后跟要创建的对象类型的名称来创建，而创建 Object 类型的示例并为期添加属性和方法，就可以创建自定义对象：

```javascript
var student = new Object();
```

## 案例
