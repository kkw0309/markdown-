# JavaScript 高级第五天

## 目标
* 继承的概念
* 原型链继承和原型链继承的原理
* 原型链继承的搜索机制
* 原型链继承的缺点
* 类式继承(借用构造函数)经典继承
* 类式继承的缺点
* 组合继承

function Person(){

}


## 继承的概念
每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（prototype ）。该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。几乎所有 JavaScript 中的对象都是位于原型链顶端的 Object 的实例。

JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。


## 原型链继承
将父类型的实例作为子类型的原型对象，以此构成的链式关系叫做原型链。原型链式继承的本质是重写子类型的原型对象，代之以一个父类型的实例。

![](https://img-blog.csdn.net/20180921150939820?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

示例：
```JavaScript
function SuperClass(){
  this.property = 'superClass';
}


SuperClass.prototype.getSuperProperty = function(){
  return this.property;
}


function SubClass(){
  this.subProperty = 'subClass';
}

SubClass.prototype.getSubProperty = function(){
  return this.subProperty;
}

SubClass.prototype = new SuperClass();

var sub = new SubClass();

console.log(sub.getSuperProperty());
```

>所有函数的默认原型都是Object的实例

### 所以原型链的缺点
* 所有子类型实例共享父类型的引用类型的属性。
* 创建子类型的实例时，不能向父类型的构造函数中传递参数。


### 原型和实例的关系
只要是原型链中出现过的原型，都可以说是该原型链派生的实例的原型

instanceof
```javascript
console.log(sub instanceof Object);
console.log(sub instanceof SuperClass);
```

isPrototypeOf()
```javascript
console.log(Object.prototype.isPrototypeOf(sub));
console.log(SuperClass.prototype.isPrototypeOf(sub));
```

## 类式继承(借用构造函数)也叫经典继承
经典继承也叫借用构造函数或伪造对象。由于函数只是在特定环境中执行代码的对象，所以可以通过使用apply()和call()方法改变父类型的构造函数的执行环境，从而达到继承的目的。

### call()、apply()
JavaScript中的call(), apply()是Function.prototype下的方法，都是用于改变函数运行时的执行环境，最终的返回值是你调用的方法的返回值，若该方法没有返回值，则返回undefined。call()、apply()、bind() 都是用来重定义 this 指向对象

参数：
* call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：
* call的参数是直接放进去的，第二第三第n个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,'成都', ... ,'string' )；
* apply的所有参数都必须放在一个数组里面传进去 obj.myFun.apply(db,['成都', ..., 'string' ]);
* bind除了返回是函数以外，它 的参数和call 一样。
* 三者的参数不限定是string类型，允许是各种类型，包括函数 、 object

```javascript
function SuperClass(name){
  this.name = name;
  this.property = 'superClass';
}


// SuperClass.prototype.getSuperProperty = function(){
//   return this.property;
// }


function SubClass(){
  // this.subProperty = 'subClass';
  SuperClass.call(this, '1111');
}

// SubClass.prototype.getSubProperty = function(){
//   return this.subProperty;
// }

// SubClass.prototype = new SuperClass();

var sub = new SubClass();

console.log(sub.property);
```


## 组合继承
组合继承指的是将原型链和经典继承的技术组合到一起，从而发挥二者之长的一种继承模式。即使用原型链实现对原型属性和方法的继承，而通过经典继承来实现对实例属性的继承。

示例
```javascript
function SuperType(name){
            this.name = name;
            this.colors = ["red", "blue", "green"];
        }

        SuperType.prototype.sayName = function(){       //原型方法
            console.log(this.name);
        };

        function SubType(name, age){
            //继承实例属性
            SuperType.call(this, name);
            this.age = age;
        }

        //继承原型方法
        SubType.prototype = new SuperType();
        SubType.prototype.constructor = SubType;        //令constructor指向子类型
        SubType.prototype.sayAge = function(){
            console.log(this.age);
        };

        var instance1 = new SubType("Nicholas", 29);
        instance1.colors.push("black");
        console.log(instance1.colors);      //"red,blue,green,black"
        instance1.sayName();                //"Nicholas"
        instance1.sayAge();                 //29

        var instance2 = new SubType("Greg", 27);
        console.log(instance2.colors);      //"red,blue,green"
        instance2.sayName();                //"Greg"
        instance2.sayAge();                 //27

```

## 练习：

1、创建一个Person类和一个Student类
让Student类型的对象访问Person类私有属性


2、用继承实现点击按钮改变字体大小、颜色
