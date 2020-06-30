
# JavaScript 高级第三天

## 目标
* 理解面向对象的编程思想
* 掌握对象的两种创建方式
* 构造函数模式和工厂模式


## 类
类：具有一系列相同特征和行为的事物统称

## 对象
对象是类的实例
对象是javascript的核心概念,也是最重要的数据类型, Javascript所有的数据都可以看作为对象,简单的说：所谓的对象，就是一种数据的集合,由若干个"键值对"构成

```javascript
var person = {
  name: '赵天韡',
  age: 30，
  eat:function eat(){console.log('我会吃饭');}
}
```

```javascript
var sum = {
  num1: 0,
  num2: 0,
  add: function add(){
    return num1+num2;
  }

  chu: function chu(){
    return num1/num2
  }

  cheng: function cheng(){}
}

sun.num1 = 2;
sum.num2 = 2;
sum.add();

 sum.add();
 sum.chu();
  var num1 = 1;
  var num2 = 1;
  var result = num1 + num2;
  console.log(result);
}
```
对象是包含相关属性和方法的集合体：
组成部分：
* 属性
* 方法

### 类和对象的关系：

类是抽象的，对象是具体的(类是对象的抽象化，对象是类的具体化)


## 面向对象
> 面向过程：面向过程专注于如何去解决一个问题的过程步骤。编程特点是由一个个函数去实现每一步的过程步骤，没有类和对象的概念。

> 面向对象：专注于由哪一个对象来解决这个问题，编程特点是出现了一个类，从类中拿到对象，由这个对象去解决具体问题。


面向对象也即是OOP，Object Oriented Programming，是计算机的一种编程架构，OOP的基本原则是计算机是由子程序作用的单个或者多个对象组合而成，包含属性和方法的对象是类的实例，但是JavaScript中没有类的概念，而是直接使用对象来实现编程。

#### 面向对象语言的三大特性

###### 封装
能够将一个对象的信息、功能、响应都封装到一个单独对象中。

```javascript
var student = {
  name: '刘',
  age: 1,
  study: function study(){
    console.log('我在学习');
  }
}
```

###### 继承
在不改变源程序的基础上进行扩充，原功能得以保存，并且对子程序进行扩展，避免重复代码编写.

###### 多态
<!-- 允许将子类类型的指针赋值给父类类型的指针；原生JS是弱类型语言，没有多态概念 -->

## JavaScript 对象的两种创建方式

#### 基于Object对象的方式创建对象
语法：

```javascript
var 对象名称=new Object( );
对象名称.属性key值 = 属性值;
```
```javascript
var person = new Object();
person.name = '赵天韡'
```
#### 使用字面量赋值方式创建对象
语法：
```javascript
var 对象名称 = {
  属性key值：属性值
}
```

```JavaScript
var person = {
  name:'赵天韡'
}
```

#### 构造函数创建对象
构造函数其实和普通函数本质上并无区别，唯一的区别有两个：
* 函数首字母大写，这个区别只是约定俗成的，便于区分。你实在要小写定义构造函数也完全没问题，所以这个区别可以忽略。
* 构造函数的调用需要用new操作符，而普通函数的调用又分很多种，但是都不会用到new操作符。


语法：
```javascript
function Fobj(参数1,参数2){
		this.属性1=值;
		this.属性2=值;
	}

  var mobj=new Fobj(值1,值2);
```

###### new 操作符
构造函数和普通函数的区别就在这个new操作符里，用new操作符创建对象时发生的事情：
* 第一步: 创建一个Object对象实例。

```JavaScript
 new Object()
```
* 第二步: 将构造函数的执行对象赋给新生成的这个实例。

```javascript
// window.Person（）
Object.Person（）
```
* 第三步: 执行构造函数中的代码
```javascript
this.name = name; <==> Object.name = name
```

* 第四步: 返回新生成的对象实例


>注意：如果被调用的函数没有显式的 return 表达式（仅限于返回对象），则隐式的会返回 this 对象， 也就是新创建的对象。

#### 工厂模式创建对象
语法：
```javascript
function fobj(参数1,参数2){
		var object=new Object();
		object.属性1=参数1;
		object.属性2=参数2;

		return object;
	}
var mobj=fobj(值1,值2)
```
