# ECMAScript6

## 目标
* 熟练使用ES6语法
* Symbol
* Promise对象


## 什么是ES6
ES6， 全称 ECMAScript 6.0 ，是 JavaScript 的下一个版本标准，2015.06 发版。
ES6 主要是为了解决 ES5 的先天不足，比如 JavaScript 里并没有类的概念，

####  Let、const和var的区别(重点)
ES6新增了let和const来声明变量，主要是解决var声明变量所造成的困扰和问题：
* var不能用于定义常量
* var可以重复声明变量
* var存在变量提升
* var不支持块级作用域

#### let和const解决了以上问题如下：
* 不可以重复声明变量
```JavaScript
let site = 'itLike';
let site = 'itLike';
console.log(site);
```

* 不存在变量提升
```JavaScript
console.log(site);

let site = 'itLike';
```
* 可以定义常量
```JavaScript
const E = 2.718;

E = 2.71;

console.log(E);

//  引用类型
const LK = {

   name:'itLike',

   intro: '喜欢IT, 就上撩课(itLike.com)'

};

LK.name = '撩课';
console.log(LK);
```

* 块级作用域
如果用var定义变量，变量是通过函数或者闭包拥有作用域；但，现在用let定义变量，不仅仅可以通过函数/闭包隔离，还可以通过块级作用域隔离。
块级作用域用一组大括号定义一个块，使用 let 定义的变量在大括号的外部是访问不到的，此外，let声明的变量不会污染全局作用域。
```JavaScript
{let site = 'itLike';}

console.log(site);

if(1){  let str = '04'; }

console.log(str);
```

## 解构赋值
解构赋值是对赋值运算符的扩展。
他是一种针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。
在代码书写上简洁且易读，语义更加清晰明了；也方便了复杂对象中数据字段获取。

* 构的源，解构赋值表达式的右边部分。
* 解构的目标，解构赋值表达式的左边部分。

####  变量解构赋值（数组解构）
```JavaScript
let nameArr = ['撩课', '小撩', '小煤球'];

let name1 = nameArr[0];

let name2 = nameArr[1];

let name3 = nameArr[2];

//  解构写法

let [name1, name2, name3] = nameArr;

console.log(name1, name2, name3);
```
####  变量解构赋值（对象解构）
```JavaScript
//  写法1

let {name, age, sex}

 = {name: '小煤球', age: 1, sex: '公'};

// 结果: 小煤球 1 公

console.log(name, age, sex);

//  写法2： 解构重命名

let {name: lkName, age: lkAge, sex: lkSex}

= {name: '小煤球', age: 1, sex: '公'};

// 结果: 小煤球 1 公

console.log(lkName, lkAge, lkSex);  

//  写法3： 可以设置默认值

let {name, age, sex = '公'}

= {name: '小煤球', age: 1};

console.log(sex);  // 公


//  写法4：省略解构

let [, , sex] = ['小煤球', 1, '公 '];

console.log(sex);
```


## 字符串、正则、数值、函数、数组、对象的扩展，箭头函数和普通函数区别

#### 模板字符串
模板字符串用反引号()包含，变量用${}括起来; 在开发中使用是非常灵活的。

```JavaScript
 let name = '小煤球';
 let sex = '公';
 let result = `我叫 ${name} , 我是 ${sex} 的`;
 console.log(result);
```
#### 字符串扩展方法

* startsWith()
判断字符串是否以 XX 开头
```JavaScript
let url = 'http://www.itlike.com';

console.log(url.startsWith('http'));  // true
```

* endsWith()
判断字符串是否以 XX 结尾
```JavaScript
let file = 'index.html';

console.log(file.endsWith('html'));  // true
```

* includes
判断字符串中是否包含 XX
```JavaScript
let str = 'liaoke';

console.log(str.includes('ao')); // true
```

* repeat()
拷贝n份
```JavaScript
let title = '撩课在线';

console.log(title.repeat(100));
```

* padStart() / padEnd()

padStart()用于头部补全，
padEnd()用于尾部补全;

第一个参数用来指定字符串的最小长度，

第二个参数是用来补全的字符串。

```JavaScript
//  "2030111111"

let y1 = '2030'.padEnd(10, '1');

//   "2030-11-22"

let y2 = '11-22'.padStart(10, '2030-MM-DD');  

console.log(y1, y2);
```


#### 延展操作符
* 延展数组
```JavaScript
let arr1 = [ 'a', 'b', 'c'];
let arr2 = [1, 2, 3];
let result = [...arr1, ...arr2];
console.log(result);
 //  [ "a", "b", "c", 1, 2, 3 ]
```

* 延展对象
```JavaScript
let smallDog = {name:'小煤球', age: 1};
let bigDog = {name: 'Python', age: 2};
let dog = {...smallDog, ...bigDog};
console.log(dog);  
// {name: "Python", age: 2}
```

注意: 如果对象中的属性一致, 会被覆盖

* 开发应用场景
```JavaScript
function getMinValue() {
     console.log(Math.min(...arguments));
}
getMinValue(1, -99, 22, 10, 9); // -99
```


#### 数值扩展
* 常量
Number.EPSILON ,属性表示 1 与大于 1 的最小浮点数之间的差。
它的值接近于 2.2204460492503130808472633361816E-16，或者 2-52。
测试数值是否在误差范围内:
```JavaScript
0.1 + 0.2 === 0.3; // false
// 在误差范围内即视为相等
var equal = (Math.abs(0.1 - 0.3 + 0.2) < Number.EPSILON); // true
```

* 最大安全整数
安全整数：Number.MAX_SAFE_INTEGER
安全整数表示在 JavaScript 中能够精确表示的整数，安全整数的范围在 2 的 -53 次方到 2 的 53 次方之间（不包括两个端点），超过这个范围的整数无法精确表示。
最大安全整数
安全整数范围的上限，即 2 的 53 次方减 1 。

* 最小安全整数
安全整数范围的下限，即 2 的 53 次方减 1 的负数。
Number.MIN_SAFE_INTEGER

#### Number 对象新方法
* Number.isFinite()
用于检查一个数值是否为有限的（ finite ），即不是 Infinity
```JavaScript
console.log( Number.isFinite(1));   // true
console.log( Number.isFinite(0.1)); // true

// NaN 不是有限的
console.log( Number.isFinite(NaN)); // false

console.log( Number.isFinite(Infinity));  // false
console.log( Number.isFinite(-Infinity)); // false

// Number.isFinate 没有隐式的 Number() 类型转换，所有非数值都返回 false
console.log( Number.isFinite('foo')); // false
console.log( Number.isFinite('15'));  // false
console.log( Number.isFinite(true));  // false
```

* Number.isNaN()
用于检查一个值是否为 NaN 。
```JavaScript
console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN('true'/0)); // true

// 在全局的 isNaN() 中，以下皆返回 true，因为在判断前会将非数值向数值转换
// 而 Number.isNaN() 不存在隐式的 Number() 类型转换，非 NaN 全部返回 false
Number.isNaN("NaN");      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN("true");     // false
```

* 从全局移植到 Number 对象的方法
逐步减少全局方法，用于全局变量的模块化。
方法的行为没有发生改变。

Number.parseInt()
```JavaScript
用于将给定字符串转化为指定进制的整数。
// 不指定进制时默认为 10 进制
Number.parseInt('12.34'); // 12
Number.parseInt(12.34);   // 12

// 指定进制
Number.parseInt('0011',2); // 3

// 与全局的 parseInt() 函数是同一个函数
Number.parseInt === parseInt; // true
Number.parseFloat()
用于把一个字符串解析成浮点数。
Number.parseFloat('123.45')    // 123.45
Number.parseFloat('123.45abc') // 123.45

// 无法被解析成浮点数，则返回 NaN
Number.parseFloat('abc') // NaN

// 与全局的 parseFloat() 方法是同一个方法
Number.parseFloat === parseFloat // true
Number.isInteger()
用于判断给定的参数是否为整数。
Number.isInteger(value)
Number.isInteger(0); // true
// JavaScript 内部，整数和浮点数采用的是同样的储存方法,因此 1 与 1.0 被视为相同的值
Number.isInteger(1);   // true
Number.isInteger(1.0); // true

Number.isInteger(1.1);     // false
Number.isInteger(Math.PI); // false

// NaN 和正负 Infinity 不是整数
Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false

Number.isInteger("10");  // false
Number.isInteger(true);  // false
Number.isInteger(false); // false
Number.isInteger([1]);   // false

// 数值的精度超过 53 个二进制位时，由于第 54 位及后面的位被丢弃，会产生误判
Number.isInteger(1.0000000000000001) // true

// 一个数值的绝对值小于 Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨
// 的最小值，会被自动转为 0，也会产生误判
Number.isInteger(5E-324); // false
Number.isInteger(5E-325); // true
Number.isSafeInteger()
用于判断数值是否在安全范围内。
Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1); // false
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); // false
```

#### Math 对象的扩展
ES6 在 Math 对象上新增了 17 个数学相关的静态方法，这些方法只能在 Math 中调用。

* 普通计算
Math.cbrt
用于计算一个数的立方根。
```JavaScript
Math.cbrt(1);  // 1
Math.cbrt(0);  // 0
Math.cbrt(-1); // -1
// 会对非数值进行转换
Math.cbrt('1'); // 1

// 非数值且无法转换为数值时返回 NaN
Math.cbrt('hhh'); // NaN
```

* Math.imul
```JavaScript
两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。
// 大多数情况下，结果与 a * b 相同
Math.imul(1, 2);   // 2

// 用于正确返回大数乘法结果中的低位数值
Math.imul(0x7fffffff, 0x7fffffff); // 1
```

* Math.hypot
用于计算所有参数的平方和的平方根。
```JavaScript
Math.hypot(3, 4); // 5

// 非数值会先被转换为数值后进行计算
Math.hypot(1, 2, '3'); // 3.741657386773941
Math.hypot(true);      // 1
Math.hypot(false);     // 0

// 空值会被转换为 0
Math.hypot();   // 0
Math.hypot([]); // 0

// 参数为 Infinity 或 -Infinity 返回 Infinity
Math.hypot(Infinity); // Infinity
Math.hypot(-Infinity); // Infinity

// 参数中存在无法转换为数值的参数时返回 NaN
Math.hypot(NaN);         // NaN
Math.hypot(3, 4, 'foo'); // NaN
Math.hypot({});          // NaN
```
* Math.clz32
用于返回数字的32 位无符号整数形式的前导0的个数。
```JavaScript
Math.clz32(0); // 32
Math.clz32(1); // 31
Math.clz32(0b01000000000100000000000000000000); // 1

// 当参数为小数时，只考虑整数部分
Math.clz32(0.5); // 32

// 对于空值或非数值，会转化为数值再进行计算
Math.clz32('1');       // 31
Math.clz32();          // 32
Math.clz32([]);        // 32
Math.clz32({});        // 32
Math.clz32(NaN);       // 32
Math.clz32(Infinity);  // 32
Math.clz32(-Infinity); // 32
Math.clz32(undefined); // 32
Math.clz32('hhh');     // 32
```
* 数字处理
Math.trunc

```JavaScript
用于返回数字的整数部分。
Math.trunc(12.3); // 12
Math.trunc(12);   // 12

// 整数部分为 0 时也会判断符号
Math.trunc(-0.5); // -0
Math.trunc(0.5);  // 0

// Math.trunc 会将非数值转为数值再进行处理
Math.trunc("12.3"); // 12

// 空值或无法转化为数值时时返回 NaN
Math.trunc();           // NaN
Math.trunc(NaN);        // NaN
Math.trunc("hhh");      // NaN
Math.trunc("123.2hhh"); // NaN
```

Math.fround
```JavaScript
用于获取数字的32位单精度浮点数形式。
// 对于 2 的 24 次方取负至 2 的 24 次方之间的整数（不含两个端点），返回结果与参数本身一致
Math.fround(-(2**24)+1);  // -16777215
Math.fround(2 ** 24 - 1); // 16777215

// 用于将 64 位双精度浮点数转为 32 位单精度浮点数
Math.fround(1.234) // 1.125
// 当小数的精度超过 24 个二进制位，会丢失精度
Math.fround(0.3); // 0.30000001192092896
// 参数为 NaN 或 Infinity 时返回本身
Math.fround(NaN)      // NaN
Math.fround(Infinity) // Infinity

// 参数为其他非数值类型时会将参数进行转换
Math.fround('5');  // 5
Math.fround(true); // 1
Math.fround(null); // 0
Math.fround([]);   // 0
Math.fround({});   // NaN
```

判断
Math.sign
判断数字的符号（正、负、0）。
```JavaScript
Math.sign(1);  // 1
Math.sign(-1); // -1

// 参数为 0 时，不同符号的返回不同
Math.sign(0);  // 0
Math.sign(-0); // -0

// 判断前会对非数值进行转换
Math.sign('1');  // 1
Math.sign('-1'); // -1  

// 参数为非数值（无法转换为数值）时返回 NaN
Math.sign(NaN);   // NaN
Math.sign('hhh'); // NaN
```

对数方法
Math.expm1()
用于计算 e 的 x 次方减 1 的结果，即 Math.exp(x) - 1 。
```JavaScript
Math.expm1(1);  // 1.718281828459045
Math.expm1(0);  // 0
Math.expm1(-1); // -0.6321205588285577
// 会对非数值进行转换
Math.expm1('0'); //0

// 参数不为数值且无法转换为数值时返回 NaN
Math.expm1(NaN); // NaN
```


Math.log1p(x)
用于计算1 + x 的自然对数，即 Math.log(1 + x) 。
```JavaScript
Math.log1p(1);  // 0.6931471805599453
Math.log1p(0);  // 0
Math.log1p(-1); // -Infinity

// 参数小于 -1 时返回 NaN
Math.log1p(-2); // NaN
```
Math.log10(x)
用于计算以 10 为底的 x 的对数。
```JavaScript
Math.log1p(1);  // 0.6931471805599453
Math.log1p(0);  // 0
Math.log1p(-1); // -Infinity

// 参数小于 -1 时返回 NaN
Math.log1p(-2); // NaN

Math.log10(1);   // 0
// 计算前对非数值进行转换
Math.log10('1'); // 0
// 参数为0时返回 -Infinity
Math.log10(0);   // -Infinity
// 参数小于0或参数不为数值（且无法转换为数值）时返回 NaN
Math.log10(-1);  // NaN
Math.log2()
用于计算 2 为底的 x 的对数。
Math.log2(1);   // 0
// 计算前对非数值进行转换
Math.log2('1'); // 0
// 参数为0时返回 -Infinity
Math.log2(0);   // -Infinity
// 参数小于0或参数不为数值（且无法转换为数值）时返回 NaN
Math.log2(-1);  // NaN
```

* 双曲函数方法
Math.sinh(x): 用于计算双曲正弦。
Math.cosh(x): 用于计算双曲余弦。
Math.tanh(x): 用于计算双曲正切。
Math.asinh(x): 用于计算反双曲正弦。
Math.acosh(x): 用于计算反双曲余弦。
Math.atanh(x): 用于计算反双曲正切。

* 指数运算符
```JavaScript
1 ** 2; // 1
// 右结合，从右至左计算
2 ** 2 ** 3; // 256
// **=
let exam = 2;
exam ** = 2; // 4
```

#### 函数扩展

* 默认参数
基本用法
```JavaScript
function fn(name,age=17){
 console.log(name+","+age);
}
fn("Amy",18);  // Amy,18
fn("Amy","");  // Amy,
fn("Amy");     // Amy,17
注意点：使用函数默认参数时，不允许有同名参数。
// 不报错
function fn(name,name){
 console.log(name);
}

// 报错
//SyntaxError: Duplicate parameter name not allowed in this context
function fn(name,name,age=17){
 console.log(name+","+age);
}
只有在未传递参数，或者参数为 undefined 时，才会使用默认参数，null 值被认为是有效的值传递。
function fn(name,age=17){
    console.log(name+","+age);
}
fn("Amy",null); // Amy,null
```
函数参数默认值存在暂时性死区，在函数参数默认值表达式中，还未初始化赋值的参数值无法作为其他参数的默认值。
```JavaScript
function f(x,y=x){
    console.log(x,y);
}
f(1);  // 1 1

function f(x=y){
    console.log(x);
}
f();  // ReferenceError: y is not defined
```
* 不定参数
不定参数用来表示不确定参数个数，形如，...变量名，由...加上一个具名参数标识符组成。具名参数只能放在参数组的最后，并且有且只有一个不定参数。
基本用法
```JavaScript
function f(...values){
    console.log(values.length);
}
f(1,2);      //2
f(1,2,3,4);  //4
```


#### 箭头函数
箭头函数提供了一种更加简洁的函数书写方式。基本语法是：
> 参数 => 函数体


基本用法：
```JavaScript
var f = v => v;
//等价于
var f = function(a){
 return a;
}
f(1);  //1
```

当箭头函数没有参数或者有多个参数，要用 () 括起来。
```JavaScript
var f = (a,b) => a+b;
f(6,2);  //8
```

当箭头函数函数体有多行语句，用 {} 包裹起来，表示代码块，当只有一行语句，并且需要返回结果时，可以省略 {} , 结果会自动返回。
```JavaScript
var f = (a,b) => {
 let result = a+b;
 return result;
}
f(6,2);  // 8
```

* 单行语句返回形式
当箭头函数要返回对象的时候，为了区分于代码块，要用 () 将对象包裹起来
```JavaScript
// 报错
var f = (id,name) => {id: id, name: name};
f(6,2);  // SyntaxError: Unexpected token :

// 不报错
var f = (id,name) => ({id: id, name: name});
f(6,2);  // {id: 6, name: 2}
```
注意点：没有 this、super、arguments 和 new.target 绑定。

```JavaScript

var func = () => {
  // 箭头函数里面没有 this 对象，
  // 此时的 this 是外层的 this 对象，即 Window
  console.log(this)
}
func(55)  // Window

var func = () => {    
  console.log(arguments)
}
func(55);  // ReferenceError: arguments is not defined
```

箭头函数体中的 this 对象，是定义函数时的对象，而不是使用函数时的对象。
```JavaScript
function fn(){
  setTimeout(()=>{
    // 定义时，this 绑定的是 fn 中的 this 对象
    console.log(this.a);
  },0)
}
var a = 20;
// fn 的 this 对象为 {a: 19}
fn.call({a: 18});  // 18

var a = {
  a: 18,
  fn:function(){
    setTimeout(()=>{
      // 定义时，this 绑定的是 fn 中的 this 对象
      console.log(this.a);
    },0)
  }
}

// call():
//将该函数的定义放到传入的对象下
//调用
```
不可以作为构造函数，也就是不能使用 new 命令，否则会报错

* 箭头函数适合使用的场景
ES6 之前，JavaScript 的 this 对象一直很令人头大，回调函数，经常看到 var self = this 这样的代码，为了将外部 this 传递到回调函数中，那么有了箭头函数，就不需要这样做了，直接使用 this 就行。
```JavaScript
// 回调函数
var Person = {
    'age': 18,
    'sayHello': function () {
      setTimeout(function () {
        console.log(this.age);
      });
    }
};
var age = 20;
Person.sayHello();  // 20

var Person1 = {
    'age': 18,
    'sayHello': function () {
      setTimeout(()=>{
        console.log(this.age);
      });
    }
};
var age = 20;
Person1.sayHello();  // 18
```

所以，当我们需要维护一个 this 上下文的时候，就可以使用箭头函数。

* 不适合使用的场景
定义函数的方法，且该方法中包含 this
```JavaScript
var Person = {
    'age': 18,
    'sayHello': ()=>{
        console.log(this.age);
      }
};
var age = 20;
Person.sayHello();  // 20
// 此时 this 指向的是全局对象

var Person1 = {
    'age': 18,
    'sayHello': function () {
        console.log(this.age);
    }
};
var age = 20;
Person1.sayHello();   // 18
// 此时的 this 指向 Person1 对象
```

需要动态 this 的时候
```JavaScript
var button = document.getElementById('userClick');
button.addEventListener('click', () => {
     this.classList.toggle('on');
});
```
button 的监听函数是箭头函数，所以监听函数里面的 this 指向的是定义的时候外层的 this 对象，即 Window，导致无法操作到被点击的按钮对象。

#### 数组扩展
* 数组创建
Array.of()
将参数中所有值作为元素形成数组。
```JavaScript
console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
// 参数值可为不同类型
console.log(Array.of(1, '2', true)); // [1, '2', true]

// 参数为空时返回空数组
console.log(Array.of()); // []
```

* Array.from()
将类数组对象或可迭代对象转化为数组。
```JavaScript
// 参数为数组,返回与原数组一样的数组
console.log(Array.from([1, 2])); // [1, 2]

// 参数含空位
console.log(Array.from([1, , 3])); // [1, undefined, 3]
```

参数
```JavaScript
Array.from(arrayLike[, mapFn[, thisArg]])
```
返回值为转换后的数组。

arrayLike
想要转换的类数组对象或可迭代对象。
```JavaScript
console.log(Array.from([1, 2, 3])); // [1, 2, 3]
```

mapFn
可选，map 函数，用于对每个元素进行处理，放入数组的是处理后的元素。
```JavaScript
console.log(Array.from([1, 2, 3], (n) => n * 2)); // [2, 4, 6]
```

thisArg
可选，用于指定 map 函数执行时的 this 对象。
```JavaScript
let map = {
    do: function(n) {
        return n * 2;
    }
}
let arrayLike = [1, 2, 3];
console.log(Array.from(arrayLike, function (n){
    return this.do(n);
}),map); // [2, 4, 6]
```

* 类数组对象
一个类数组对象必须含有 length 属性，且元素属性名必须是数值或者可转换为数值的字符。
```JavaScript
let arr = Array.from({
  0: '1',
  1: '2',
  2: 3,
  length: 3
});
console.log(); // ['1', '2', 3]

// 没有 length 属性,则返回空数组
let array = Array.from({
  0: '1',
  1: '2',
  2: 3,
});
console.log(array); // []

// 元素属性名不为数值且无法转换为数值，返回长度为 length 元素值为 undefined 的数组  
let array1 = Array.from({
  a: 1,
  b: 2,
  length: 2
});
console.log(array1); // [undefined, undefined]
```

* 转换可迭代对象
转换 map
```JavaScript
let map = new Map();
map.set('key0', 'value0');
map.set('key1', 'value1');
console.log(Array.from(map)); // [['key0', 'value0'],['key1',
// 'value1']]
```

转换 set
```JavaScript
let arr = [1, 2, 3];
let set = new Set(arr);
console.log(Array.from(set)); // [1, 2, 3]
```

转换字符串
```JavaScript
let str = 'abc';
console.log(Array.from(str)); // ["a", "b", "c"]
```

* 扩展的方法
查找

find()
查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素。
```JavaScript
let arr = Array.of(1, 2, 3, 4);
console.log(arr.find(item => item > 2)); // 3

// 数组空位处理为 undefined
console.log([, 1].find(n => true)); // undefined
```

findIndex()
查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引。
```JavaScript
let arr = Array.of(1, 2, 1, 3);
// 参数1：回调函数
// 参数2(可选)：指定回调函数中的 this 值
console.log(arr.findIndex(item => item = 1)); // 0
// 数组空位处理为 undefined
console.log([, 1].findIndex(n => true)); //0
```

填充
fill()
将一定范围索引的数组元素内容填充为单个指定的值。
```JavaScript
let arr = Array.of(1, 2, 3, 4);
// 参数1：用来填充的值
// 参数2：被填充的起始索引
// 参数3(可选)：被填充的结束索引，默认为数组末尾
console.log(arr.fill(0,1,2)); // [1, 0, 3, 4]
copyWithin()
将一定范围索引的数组元素修改为此数组另一指定范围索引的元素。
// 参数1：被修改的起始索引
// 参数2：被用来覆盖的数据的起始索引
// 参数3(可选)：被用来覆盖的数据的结束索引，默认为数组末尾
console.log([1, 2, 3, 4].copyWithin(0,2,)); // [3, 4, 3, 4]

// 参数1为负数表示倒数
console.log([1, 2, 3, 4].copyWithin(-2, 0)); // [1, 2, 1, 2]

console.log([1, 2, ,4].copyWithin(0, 2, 4)); // [, 4, , 4]
```

遍历
entries()
遍历键值对。
```JavaScript
for(let [key, value] of ['a', 'b'].entries()){
    console.log(key, value);
}
// 0 "a"
// 1 "b"

// 不使用 for... of 循环
let entries = ['a', 'b'].entries();
console.log(entries.next().value); // [0, "a"]
console.log(entries.next().value); // [1, "b"]

// 数组含空位
console.log([...[,'a'].entries()]); // [[0, undefined], [1, "a"]]
```

keys()
遍历键名。

```JavaScript
for(let key of ['a', 'b'].keys()){
    console.log(key);
}
// 0
// 1

// 数组含空位
console.log([...[,'a'].keys()]); // [0, 1]
values()
遍历键值。
for(let value of ['a', 'b'].values()){
    console.log(value);
}
// "a"
// "b"

// 数组含空位
console.log([...[,'a'].values()]); // [undefined, "a"]
```

包含
includes()
数组是否包含指定值。
注意：与 Set 和 Map 的 has 方法区分；Set 的 has 方法用于查找值；Map 的 has 方法用于查找键名。
```JavaScript
// 参数1：包含的指定值
[1, 2, 3].includes(1);    // true

// 参数2：可选，搜索的起始索引，默认为0
[1, 2, 3].includes(1, 2); // false

// NaN 的包含判断
[1, NaN, 3].includes(NaN); // true
```

嵌套数组转一维数组
flat()
```JavaScript
console.log([1 ,[2, 3]].flat()); // [1, 2, 3]

// 指定转换的嵌套层数
console.log([1, [2, [3, [4, 5]]]].flat(2)); // [1, 2, 3, [4, 5]]

// 不管嵌套多少层
console.log([1, [2, [3, [4, 5]]]].flat(Infinity)); // [1, 2, 3, 4, 5]

// 自动跳过空位
console.log([1, [2, , 3]].flat()); // [1, 2, 3]
```

flatMap()
先对数组中每个元素进行了的处理，再对数组执行 flat() 方法。
```JavaScript
// 参数1：遍历函数，该遍历函数可接受3个参数：当前元素、当前元素索引、原数组
// 参数2：指定遍历函数中 this 的指向
console.log([1, 2, 3].flatMap(n => [n * 2])); // [2, 4, 6]
```


* 数组缓冲区
数组缓冲区是内存中的一段地址。
定型数组的基础。
实际字节数在创建时确定，之后只可修改其中的数据，不可修改大小。
创建数组缓冲区
通过构造函数创建:
let buffer = new ArrayBuffer(10);
console.log(buffer.byteLength); // 10
分割已有数组缓冲区
let buffer = new ArrayBuffer(10);
let buffer1 = buffer.slice(1, 3);
console.log(buffer1.byteLength); // 2
视图
视图是用来操作内存的接口。
视图可以操作数组缓冲区或缓冲区字节的子集,并按照其中一种数值数据类型来读取和写入数据。
DataView 类型是一种通用的数组缓冲区视图,其支持所有8种数值型数据类型。
创建:
// 默认 DataView 可操作数组缓冲区全部内容
let buffer = new ArrayBuffer(10);
    dataView = new DataView(buffer);
dataView.setInt8(0,1);
console.log(dataView.getInt8(0)); // 1

// 通过设定偏移量(参数2)与长度(参数3)指定 DataView 可操作的字节范围
let buffer1 = new ArrayBuffer(10);
    dataView1 = new DataView(buffer1, 0, 3);
dataView1.setInt8(5,1); // RangeError
定型数组
数组缓冲区的特定类型的视图。
可以强制使用特定的数据类型，而不是使用通用的 DataView 对象来操作数组缓冲区。
创建
通过数组缓冲区生成
let buffer = new ArrayBuffer(10),
    view = new Int8Array(buffer);
console.log(view.byteLength); // 10
通过构造函数
let view = new Int32Array(10);
console.log(view.byteLength); // 40
console.log(view.length);     // 10

// 不传参则默认长度为0
// 在这种情况下数组缓冲区分配不到空间，创建的定型数组不能用来保存数据
let view1 = new Int32Array();
console.log(view1.byteLength); // 0
console.log(view1.length);     // 0

// 可接受参数包括定型数组、可迭代对象、数组、类数组对象
let arr = Array.from({
  0: '1',
  1: '2',
  2: 3,
  length: 3
});
let view2 = new Int16Array([1, 2]),
    view3 = new Int32Array(view2),
    view4 = new Int16Array(new Set([1, 2, 3])),
    view5 = new Int16Array([1, 2, 3]),
    view6 = new Int16Array(arr);
console.log(view2 .buffer === view3.buffer); // false
console.log(view4.byteLength); // 6
console.log(view5.byteLength); // 6
console.log(view6.byteLength); // 6
注意要点
length 属性不可写，如果尝试修改这个值，在非严格模式下会直接忽略该操作，在严格模式下会抛出错误。
let view = new Int16Array([1, 2]);
view.length = 3;
console.log(view.length); // 2
定型数组可使用 entries()、keys()、values()进行迭代。
let view = new Int16Array([1, 2]);
for(let [k, v] of view.entries()){
    console.log(k, v);
}
// 0 1
// 1 2
find() 等方法也可用于定型数组，但是定型数组中的方法会额外检查数值类型是否安全,也会通过 Symbol.species 确认方法的返回值是定型数组而非普通数组。concat() 方法由于两个定型数组合并结果不确定，故不能用于定型数组；另外，由于定型数组的尺寸不可更改,可以改变数组的尺寸的方法，例如 splice() ，不适用于定型数组。
let view = new Int16Array([1, 2]);
view.find((n) > 1); // 2
所有定型数组都含有静态 of() 方法和 from() 方法,运行效果分别与 Array.of() 方法和 Array.from() 方法相似,区别是定型数组的方法返回定型数组,而普通数组的方法返回普通数组。
let view = Int16Array.of(1, 2);
console.log(view instanceof Int16Array); // true
定型数组不是普通数组，不继承自 Array 。
let view = new Int16Array([1, 2]);
console.log(Array.isArray(view)); // false
定型数组中增加了 set() 与 subarray() 方法。 set() 方法用于将其他数组复制到已有定型数组, subarray() 用于提取已有定型数组的一部分形成新的定型数组。
// set 方法
// 参数1：一个定型数组或普通数组
// 参数2：可选，偏移量，开始插入数据的位置，默认为0
let view= new Int16Array(4);
view.set([1, 2]);
view.set([3, 4], 2);
console.log(view); // [1, 2, 3, 4]

// subarray 方法
// 参数1：可选，开始位置
// 参数2：可选，结束位置(不包含结束位置)
let view= new Int16Array([1, 2, 3, 4]),
    subview1 = view.subarray(),
    subview2 = view.subarray(1),
    subview3 = view.subarray(1, 3);
console.log(subview1); // [1, 2, 3, 4]
console.log(subview2); // [2, 3, 4]
console.log(subview3); // [2, 3]
扩展运算符
复制数组
let arr = [1, 2],
    arr1 = [...arr];
console.log(arr1); // [1, 2]

// 数组含空位
let arr2 = [1, , 3],
    arr3 = [...arr2];
console.log(arr3); [1, undefined, 3]
合并数组
console.log([...[1, 2],...[3, 4]]); // [1, 2, 3, 4]

#### 对象的扩展

## iterator 和 for ...of 循环
Iterator 是 ES6 引入的一种新的遍历机制，迭代器有两个核心概念：
* 迭代器是一个统一的接口，它的作用是使各种数据结构可被便捷的访问，它是通过一个键为Symbol.iterator 的方法来实现。
* 迭代器是用于遍历数据结构元素的指针（如数据库中的游标）。

#### 遍历器for...of
#### iterator


## Class基本使用和继承
#### 类概念的由来
#### constructor方法
#### 类的继承
#### 静态方法静态属性


## set 和 map 数据结构
#### 基本用法
#### 实例的属性和方法
#### 遍历操作


## Symbol 数据类型
#### 概述
#### 描述参数
#### 作为属性名



## Promise对象
#### Promise的含义
#### 基本用法
#### Promise方法


## async 函数
#### 含义
#### 基本用法
#### 语法
