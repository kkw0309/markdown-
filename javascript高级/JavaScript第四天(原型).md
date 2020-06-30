# JavaScript 高级第四天

## 目标
* 理解 JavaScript 原型的概念
* 掌握 `constructor`、`prototype`、`__proto__` 的作用
* 掌握 hasOwnProperty()方法和 in 操作符的用法



## 原型

### 理解类和 JavaScript 中原型的概念

### 面向对象类的原理

class Person:NSObject {
  name: ''
  function eat(){}
}

class Student:Person{
  function study(){}
}

var student = new Student();

student.name = '李智杰';
student.eat();

Object().prototype




```javascript
var  Object{
  function  1111() {

  }
}

var Person = {
  name:'',
  age: 1,
  eat: function eat(){

  }

  __proto__:{

  }
}

var Student = {
  study:function study(){

  }

  __proto__:{
    name:'',
    age: 1,
    eat: function eat(){

    }
  }
}

var student1 = {
  __proto__:{
    study:function study(){

    }
  }
}

```


在传统的 OOP 中，首先定义“类”，此后创建对象实例时，类中定义的所有属性和方法都被复制到实例中。在 JavaScript 中并不如此复制——而是在对象实例和它的构造器之间建立一个链接（它是__proto__属性，是从构造函数的prototype属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法。通过原型这种机制，JavaScript 中的对象从其他对象继承功能特性；这种继承机制与经典的面向对象编程语言的继承机制不同。

JavaScript 常被描述为一种基于原型的语言 (prototype-based language)——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。
准确地说，这些属性和方法定义在Object的构造器函数(constructor functions)之上的prototype属性上，而非对象实例本身。

### Javascript 原型

在javascript中，函数可以有属性。 每个函数都有一个特殊的属性叫作原型（prototype）

```javascript
//doSomething 函数有一个默认的原型属性

function doSomething(){}
console.log( doSomething.prototype );
var doSomething = function(){};
console.log( doSomething.prototype );

```

#### `__proto__`
`__proto__`：对象中的一个属性，指向构造函数的原型对象，在ECMA-262第五版中被称为[[prototype]]，且没有标准的方式能访问到，`__proto__`为浏览器支持属性；

#### prototype 属性

prototype（原型）：函数中的一个属性，指向该构造函数的原型对象（原型对象用于实例共享属性和方法）


#### constructor 属性

constructor：原型对象中的一个属性，指向该原型对象的构造函数；


>注意:原型链中的方法和属性没有被复制到其他对象——它们被访问需要通过前面所说的“原型链”的方式。



#### 原型链
浏览器首先检查，实例 对象是否具有可用的 valueOf() 方法。
如果没有，则浏览器检查 实例 对象的原型对象（即 实例构造函数的prototype属性所指向的对象）是否具有可用的 valueof() 方法。
如果也没有，则浏览器检查 实例 构造函数的prototype属性所指向的对象的原型对象（即 Object构造函数的prototype属性所指向的对象）是否具有可用的 valueOf() 方法。这里有这个方法，于是该方法被调用。


![](https://img-blog.csdnimg.cn/20190301142639533.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3E4MjE5MDE3MzM=,size_16,color_FFFFFF,t_70)



说明:in关键字用来检查对象中是否存在指定的属性(包含实例属性和原型属性)

对象的hasOwnProperty方法用来检查对象中是否存在指定的属性(只检查实例属性)
