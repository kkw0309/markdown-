# JavaScript 第三天

## 目标（重点）
* 理解函数的概念和作用
* 掌握函数的定义、函数的命名和函数的调用
* 掌握函数参数：形式参数、真实参数以及arguments（只在函数里面有效）
* 函数返回值（重点）

## 函数
函数对于任何语言来说都是一个核心概念，通过函数可以封装任意多条语句，而且可以在任何地方任何时候调用执行。函数使用 `function` 关键字声明后面跟一组参数以及函数体。语法如下：
```javascriptM
function functionName(arg1,arg2){
    // 这里是要执行的代码
}
```

示例：
```HTML
<!DOCTYPE html>
<html>
    <head>
        <script>
        function myFunction(){
          alert("Hello World!");
        }
        </script>
   </head>

   <body>
       <button onclick="myFunction()">点击这里</button>
   </body>
</html>
```

>定义：函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。当调用该函数时，会执行函数内的代码。可以在某事件发生时直接调用函数（比如当用户点击按钮时），并且可由 JavaScript 在任何位置进行调用。

## 函数的定义和调用
定义函数：
```JavaScript
//声明
function sayHi(name,message){
    alert("Hello" + name + "," + message);
}

//调用
sayHi("zhaotianwei", "how are you");


function sum(num1, num2){
    return num1 + num2;
}

var result = sum(4, 5);
console.log(result);
```
#### 函数的命名
ECMAScript 中函数的命名使用骆驼命名规则，尽量最好使用英文单词，描述清楚函数的作用：
```javascript
function  add(a,b){
    var sum = a+b;
    return sum;
}

function  sayHello(name,message){
    alert("Hello" + name + "," + message);
}
```
## 函数参数
ECMAScript 中函数的参数与大多数其他语言中的函数的参数有所不同，ECMAScript 中的函数不介意你传递多少个参数，也不会在意传递进来的参数是什么数据类型。
在调用函数时，您可以向其传递值，这些值被称为参数。这些参数可以在函数中使用。可以发送任意多的参数，由逗号 (,) 分隔：
```javascript
function myFunction(argument1,argument2)
{
    //代码
}
```
示例：
```javascript
function myFunction(name,job){
    alert("Welcome " + name + ", the " + job);
}
```
## 函数返回值
函数是可以将值返回调用它的地方，通过使用 return 语句就可以实现。在使用 return 语句时，函数会停止执行，并返回指定的值。
```javascript
function myFunctiotn()
{
    var x=5;
    return x;
}
```
>整个 JavaScript 并不会停止执行，仅仅是函数。JavaScript 将继续执行代码，从调用函数的地方。


```javascript
function myFunction(a,b)
{
    return a*b;
}
var result = myFunction(2, 3);
console.log(result);
```
退出函数时 ，也可使用 return 语句。返回值是可选的：
```javascript
function myFunction(a,b)
{
    if (a>b)
    {
        return;
    }
    x=a+b //满足上面条件的情况下，这里不执行
}
```

## 基本类型和引用类型的值
ECMAScript 中的变量可能包含两种不同数据类型的值：基本类型值和引用类型值。基本类型指的是简单的数据段，而引用类型值指的是那些可能由多个值构成的对象。当我们把变量赋值给一个变量时，解析器首先要确认的就是这个值是基本类型值还是引用类型值。

#### 值类型
Number、String 、Boolean、Null和Undefined。基本数据类型是按值访问的，因为可以直接操作保存在变量中的实际值。  </br>
示例：
```javascript
var a = 10;
var b = a;
b = 20;
console.log(a); // 10值
```
>上面，b获取的是a值得一份拷贝，虽然，两个变量的值相等，但是两个变量保存了两个不同的基本数据类型值。b只是保存了a复制的一个副本。所以，b的改变，对a没有影响。

下图演示了这种基本数据类型赋值的过程：
![基本数据类型赋值的过程](https://pic002.cnblogs.com/images/2012/327530/2012062912181127.jpg)

#### 引用类型
引用类型也就是对象类型Object type，比如：Object 、Array 、Function 、Data等。
javascript的引用数据类型是保存在堆内存中的对象。与其他语言的不同是，你不可以直接访问堆内存空间中的位置和操作堆内存空间。只能操作对象在栈内存中的引用地址。所以，引用类型数据在栈内存中保存的实际上是对象在堆内存中的引用地址。通过这个引用地址可以快速查找到保存中堆内存中的对象。</br>
示例：
```javascript
var obj1 = new Object();
var obj2 = obj1;
obj2.name = "我有名字了";
console.log(obj1.name); // 我有名字了
```
>　说明这两个引用数据类型指向了同一个堆内存对象。obj1赋值给onj2，实际上这个堆内存对象在栈内存的引用地址复制了一份给了obj2，但是实际上他们共同指向了同一个堆内存对象。实际上改变的是堆内存对象。

下面我们来演示这个引用数据类型赋值过程：
![引用数据类型赋值过程](https://pic002.cnblogs.com/images/2012/327530/2012062914380085.jpg)

#### 总结区别
##### 声明变量时不同的内存分配：
* `原始值`：存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。这是因为这些原始类型占据的空间是固定的，所以可将他们存储在较小的内存区域 – 栈中。这样存储便于迅速查寻变量的值。
* `引用值`：存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存地址。这是因为：引用值的大小会改变，所以不能把它放在栈中，否则会降低变量查寻的速度。相反，放在变量的栈空间中的值是该对象存储在堆中的地址。地址的大小是固定的，所以把它存储在栈中对变量性能无任何负面影响。

##### 不同的内存分配机制也带来了不同的访问机制
* 在javascript中是不允许直接访问保存在堆内存中的对象的，所以在访问一个对象时，首先得到的是这个对象在堆内存中的地址，然后再按照这个地址去获得这个对象中的值，这就是传说中的按引用访问。
* 而原始类型的值则是可以直接访问到的。

##### 复制变量时的不同
* 原始值：在将一个保存着原始值的变量复制给另一个变量时，会将原始值的副本赋值给新变量，此后这两个变量是完全独立的，他们只是拥有相同的value而已。
* 引用值：在将一个保存着对象内存地址的变量复制给另一个变量时，会把这个内存地址赋值给新变量，也就是说这两个变量都指向了堆内存中的同一个对象，他们中任何一个作出的改变都会反映在另一个身上。(这里要理解的一点就是，复制对象时并不会在堆内存中新生成一个一模一样的对象，只是多了一个保存指向这个对象指针的变量罢了），多了一个指针。

##### 参数传递的不同（把实参复制给形参的过程）
首先我们应该明确一点：ECMAScript中所有函数的参数都是按值来传递的。
但是为什么涉及到原始类型与引用类型的值时仍然有区别呢？还不就是因为内存分配时的差别。 　
* 原始值：只是把变量里的值传递给参数，之后参数和这个变量互不影响。
* 引用值：对象变量它里面的值是这个对象在堆内存中的内存地址，因此它传递的值也就是这个内存地址，这也就是为什么函数内部对这个参数的修改会体现在外部的原因了，因为它们都指向同一个对象。

## 变量
#### 局部 JavaScript 变量
在 JavaScript 函数内部声明的变量（使用 var）是局部变量，所以只能在函数内部访问它。（该变量的作用域是局部的）。
您可以在不同的函数中使用名称相同的局部变量，因为只有声明过该变量的函数才能识别出该变量。
只要函数运行完毕，本地变量就会被删除。

#### 全局 JavaScript 变量
在函数外或者在函数内不使用 `var` 声明的变量是全局变量，网页上的所有脚本和函数都能访问它。

## 作用域
作用域是可访问变量的集合。作用域是你的代码在运行时，各个变量、函数和对象的可访问性。换句话说，作用域决定了你的代码里的变量和其他资源在各个区域中的可见性。在 JavaScript 中有两种作用域：
* 全局作用域
* 局部作用域

#### 全局作用域
所有浏览器都支持 `window` 对象，它表示浏览器窗口，`JavaScript` 全局对象、函数以及变量均自动成为 `window` 对象的成员。所以，全局变量是 `window` 对象的属性，全局函数是 `window` 对象的方法，甚至 `HTML` `DOM` 的 `document` 也是 `window` 对象的属性之一(提前了解)。

全局变量是`JavaScript`里生命周期（一个变量多长时间内保持一定的值）最长的变量，其将跨越整个程序，可以被程序中的任何函数方法访问。

在全局下声明的变量都会在`window`对象下，都在全局作用域中，我们可以通过`window`对象访问，也可以直接访问。
```javascript
var name = "jeri";
console.log(window.name); // 输出:jeri
console.log(name); // 输出:jeri
```
在JS中任何位置，没有使用var关键字声明的变量也都是全局变量。
```javascript
function fun() {
    name = "jeri";
    alert(name);
}

console.log(name); // 输出:jeri
```
>全局变量存在于整个函数的生命周期中，然而其在全局范围内很容易被篡改，我们在使用全局变量时一定要小心，尽量不要使用全局变量。在函数内部声明变量没有使用var也会产生全局变量，会为我们造成一些混乱，比如变量覆盖等。所以，我们在声明变量的任何时候最好都要带上var。

#### 局部作用域
函数作用域，顾名思义就是在定义函数时候产生的作用域，这个作用域也可以称为局部作用域。和全局作用域相反，函数作用域一般只在函数的代码片段内可访问到，外部不能进行变量访问。在函数内部定义的变量存在于函数作用域中，其生命周期随着函数的执行结束而结束。实例如下：

```javascript
var name = "global";

function fun() {
    var name = "jeri";
    console.log(name); // 输出:jeri
    with ({name:"with"}) {
        console.log(name); // 输出:with
    }
    console.log(name); // 输出:jeri
}

 fun();

 // 不能访问函数作用域
 console.log(name); // 输出:global
```

#### 没有块级作用域

>
不同于其他编程语言，在JavaScript里并没有块级作用域，也就是说在for、if、while等语句内部的声明的变量与在外部声明是一样的，在这些语句外部也可以访问和修改这些变量的值。实例如下：
JavaScript没有块级作用域，ES6出现let后有了块级作用域
```javascript
if (true) {
    var name = "zhaotianwei";
}
console.log(name);
name = "change";
console.log(name);

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
```
>if、while、for语句中的变量声明会将变量添加到当前的执行环境中，在使用for语句的之后要牢记这一差异， for 语句中创建的变量 i 即使在 for 循环执行结束后，也会依旧存在在循环外部的执行环境中。

## 闭包
闭包的官方定义为：一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），因而这些变量也是该表达式的一部分。

一句话概括就是：闭包就是一个函数，捕获作用域内的外部绑定，闭包有权访问另一个函数作用域中的变量的函数。这些绑定是为之后使用而被绑定，即使作用域已经销毁。

先来看个简单的闭包：
```javascript
function greet() {
    name = 'Hammad';
    return function () {
        console.log('Hi ' + name);
    }
}

greet(); // nothing happens, no errors

// the returned function from greet() gets saved in greetLetter
var greetLetter = greet();

 // calling greetLetter calls the returned function from the greet() function
greetLetter(); // logs 'Hi Hammad'
```
## 案例
