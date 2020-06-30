# JavaScript 第一天


## 目标
* 作用域（重点）
* 作用域链（难点）
* 闭包（重点）
* 垃圾回收机制（理解）


## 断点
浏览器-检查-source-找到需要断点的文件-点击添加断点

## 作用域
### 全局作用域
```JavaScript
var number = 10;
function showNumber(){
  console.log(number);
}
```

### 局部作用域
又叫函数作用域，在函数内部使用 var 关键字声明的变量是局部变量，不使用 var 声明的变量是全局变量

```JavaScript
// var number；
//全局变量提升
console.log(number);//undefined

var number = 10;
function showNumber(){
  //var
  //局部作用域变量提升
  console.log('函数内部上输出',number);


  var number = 20;
  console.log('函数内部输出',number);
}

showNumber();
console.log('函数外部部输出',number);
```


#### 块级作用域
JavaScript 是没有块级作用域的
```JavaScript
for(let index = 0; index < 10; index++){
  console.log(index);
}
  console.log(index);
```


#### 变量提升
在JavaScript 代码的编译阶段，全局作用域会将定义在全局中的变量隐式的提升到JS文件的最顶端
函数作用域中，会将变量隐式的提升到函数最顶端



## 闭包
可以访问其他函数中局部变量的函数叫做闭包
