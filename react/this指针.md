# this指针

* 在非箭头函数下， this 指向调用其所在函数的对象，而且是离谁近就是指向谁（此对于常规对象，原型链， getter & setter等都适用）；

* 构造函数下，this与被创建的新对象绑定；

* DOM事件，this指向触发事件的元素；

#### 在全局作用下

在全局环境下,this始终指向全局对象（window)

```JavaScript
console.log(this.document === document); // true

// 在浏览器中，全局对象为 window 对象：
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```

#### 对象中的this
对象内部方法的this指向调用这些方法的对象，

函数的定义位置不影响其this指向，this指向只和调用函数的对象有关。多层嵌套的对象，内部方法的this指向离被调用函数最近的对象（window也是对象，其内部对象调用方法的this指向内部对象， 而非window）。


#### 原型链中this
原型链中的方法的this仍然指向调用它的对象，与以上讨论一致；看个例子，
```JavaScript
var o = {
  f : function(){
    return this.a + this.b;
  }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```
在p中没有属性f，当执行p.f()时，会查找p的原型链，找到 f 函数并执行，但这与函数内部this指向对象 p 没有任何关系，只需记住谁调用指向谁。


#### 构造函数中this

构造函数中的this与被创建的新对象绑定。

注意：当构造器返回的默认值是一个this引用的对象时，可以手动设置返回其他的对象，如果返回值不是一个对象，返回this。

```JavaScript
function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37

function C2(){
  this.a = 37;
  return {a:38};
}

var b = new C2();
console.log(b.a); // logs 38
```

#### call & apply
当函数通过Function对象的原型中继承的方法 call() 和 apply() 方法调用时， 其函数内部的this值可绑定到 call() & apply() 方法指定的第一个对象上， 如果第一个参数不是对象，JavaScript内部会尝试将其转换成对象然后指向它。
```JavaScript
function add(c, d){
  return this.a + this.b + c + d;
}

var o = {a:1, b:3};

add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34

function tt() {
  console.log(this);
}
// 返回对象见下图（图1）
tt.call(5);  // Number {[[PrimitiveValue]]: 5}
tt.call('asd'); // String {0: "a", 1: "s", 2: "d", length: 3, [[PrimitiveValue]]: "asd"}
```

#### DOM 事件处理函数中的 this & 内联事件中的 this

###### DOM事件处理函数

1. 当函数被当做监听事件处理函数时， 其 this 指向触发该事件的元素 （针对于addEventListener事件）


###### 内联事件
内联事件中的this指向分两种情况：

1. 当代码被内联处理函数调用时，它的this指向监听器所在的DOM元素
2. 当代码被包括在函数内部执行时，其this指向等同于xx函数直接调用xx的情况，即在非严格模式指向全局对象window， 在严格模式指向undefined

#### setTimeout & setInterval

对于延时函数内部的回调函数的this指向全局对象window（当然我们可以通过bind方法改变其内部函数的this指向）

```JavaScript
//默认情况下代码
function Person() {  
    this.age = 0;  
    setTimeout(function() {
        console.log(this);
    }, 3000);
}

var p = new Person();//3秒后返回 window 对象
==============================================
//通过bind绑定
function Person() {  
    this.age = 0;  
    setTimeout((function() {
        console.log(this);
    }).bind(this), 3000);
}

var p = new Person();//3秒后返回构造函数新生成的对象 Person{...}
```


#### 箭头函数中的 this
由于箭头函数不绑定this， 它会捕获其所在（即定义的位置）上下文的this值， 作为自己的this值，

所以 call() / apply() / bind() 方法对于箭头函数来说只是传入参数，对它的 this 毫无影响。
考虑到 this 是词法层面上的，严格模式中与 this 相关的规则都将被忽略。（可以忽略是否在严格模式下的影响）

因为箭头函数可以捕获其所在上下文的this值 所以
```JavaScript
function Person() {  
    this.age = 0;  
    setInterval(() => {
        // 回调里面的 `this` 变量就指向了期望的那个对象了
        this.age++;
    }, 3000);
}

var p = new Person();
```


以上代码可以得到我们所以希望的值,在setTimeout中的this指向了构造函数新生成的对象，而普通函数指向了全局window对象
