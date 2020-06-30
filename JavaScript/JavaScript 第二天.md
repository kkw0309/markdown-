# JavaScript 第二天

## 目标
* 掌握常用运算符的使用
* 掌握关系表达式
* 掌握语句的概念和条件判断语句
* 掌握常用的循环语句
* break和continue

## 运算符
### 逻辑运算符
#### 逻辑非
逻辑非操作符是由一个 `!` 表示，可以用于任何一个值，无论这个值是什么数据类型，这个操作符都会返回一个布尔值。逻辑非操作符首先会先将它的操作数转换成一个布尔值，然后在对其求反：
```javascript
console.log(!false);//true

console.log(!'yellow');//false

console.log(!0);//true

console.log(!10);//false

console.log(!NaN);//true

console.log(!'');//true
```
#### 逻辑与
逻辑与操作符是由两个和号 `&&` 表示，有两个操作数：
```javascript
var result = true && false;

console.log(result);
```

#### 逻辑或
逻辑或操作符由两个竖线符号 `||` 表示，有两个操作数：
```javascript
var result = true || false;

console.log(result);
```

### 数值运算符
#### 加运算符
加法运算符 `+`：
```javascript
var result = 1+2;
console.log(result);

var result = 1 + '2';
console.log(result);

var result = '1' + '2';
console.log(result);

var result = 'sum is (1 + 2)';
console.log(result);
```

#### 减运算符
减法运算符 `-`：
```javascript
var result = 4 - 2;
console.log(result);

var result = 5 - true;
console.log(result);

var result = 5 - '';
console.log(result);

var result = 5 - '2';
console.log(result);

var result = 5 - null;
console.log(result);
```

#### 乘运算符
乘法运算符 `*`：
```javascript
var result = 3 * 5;
console.log(result);

var result = 3 * '5';
console.log(result);
```
>如果一个操作数不是数值，则会在隐式的先调用 Number() 将其转换为数值，然后再进行运算。

#### 除运算符
除法元算符 `/`：
```javascript
var result = 6 / 3;
console.log(result);

var result = 6 / '3';
console.log(result);
```

#### 求余运算符
求余运算符 `%`:
```javascript
var result = 7 % 2;
console.log(result);
```

### 关系运算符
#### 大于 `>`、 小于 `<`、 大于等于`>=`、小于等于`<=`
```javascript
var result = 5 > 3;
console.log(result);

var result = 5 < 3;
console.log(result);

var result = 2 >= 2;
console.log(result);

var result = 2 <= 2;
console.log(result);
```
#### 相等 `==` 、不相等 `!=`

### 条件运算符(三目运算符)
条件运算符是最灵活的一种运算符：
```javascript
var result = true ? '真' : '假';
console.log(result);
```

### 赋值运算符
赋值运算符是由 `=` 表示，其作用就是把右侧的值赋值给左侧的变量：
```javascript
var num = 10;

// 如果在等号前面再加乘、加、减或者除等运算符，就可以完成复合赋值操作
var num = 10;
num = num + 10;

var num = 10;
num += 10;
```
## 语句
`JavaScript` 语句向浏览器发出的命令。语句的作用是告诉浏览器该做什么。语句通常使用一个或者多个关键字来完成指定的任务，浏览器会按照编写顺序来执行每条语句。语句大小写敏感。

### 分号
* 分号用于分隔 JavaScript 语句。
* 通常我们在每条可执行的语句结尾添加分号。
* 使用分号的另一用处是在一行中编写多条语句。

## 条件判断语句
条件语句用于基于不同的条件来执行不同的动作。通常在写代码时，您总是需要为不同的决定来执行不同的动作。您可以在代码中使用条件语句来完成该任务。

在 JavaScript 中，我们可使用以下条件语句：
* `if` 语句 - 只有当指定条件为 `true` 时，使用该语句来执行代码
*  `if...else` 语句 - 当条件为 `true` 时执行代码，当条件为 `false` 时执行其他代码
* `if...else if....else` 语句- 使用该语句来选择多个代码块之一来执行
* `switch` 语句 - 使用该语句来选择多个代码块之一来执行

语法：
```javascript
if (condition)
{
    当条件为 true 时执行的代码
}

if (condition)
{
    当条件为 true 时执行的代码
}
else
{
    当条件不为 true 时执行的代码
}

if (condition1)
{
    当条件 1 为 true 时执行的代码
}
else if (condition2)
{
    当条件 2 为 true 时执行的代码
}
else
{
  当条件 1 和 条件 2 都不为 true 时执行的代码
}
```

示例：
```javascript
if (num < 20){
    console.log('Greater t 20');
}


if (num < 20){
    console.log('Greater t 20');
}else {
    console.log('Less than or equal to 20');
}

if (num < 20){
    console.log('Greater t 20');
}else if{
    console.log('Less than 0');
}else {
    console.log('Between 0 and 20');
}
```
### Switch
switch 语句用于基于不同的条件来执行不同的动作。它工作原理：首先设置表达式 n（通常是一个变量）。随后表达式的值会与结构中的每个 case 的值做比较。如果存在匹配，则与该 case 关联的代码块会被执行。请使用 break 来阻止代码自动地向下一个 case。

语法：
```javascript
switch(n)
{
case 1:
  执行代码块 1
  break;
case 2:
  执行代码块 2
  break;
default:
  break;
  //n 与 case 1 和 case 2 不同时执行的代码
};
```
#### default 关键词
请使用 default 关键词来规定匹配不存在时做的事情.

示例：

```javascript
var day=new Date().getDay();
switch (day)
{
case 0:
  x="Today it's Sunday";
  break;
case 1:
  x="Today it's Monday";
  break;
case 2:
  x="Today it's Tuesday";
  break;
case 3:
  x="Today it's Wednesday";
  break;
case 4:
  x="Today it's Thursday";
  break;
case 5:
  x="Today it's Friday";
  break;
case 6:
  x="Today it's Saturday";
  break;
}
```

## 循环语句
循环可以将代码块执行指定的次数。如我我们需求一遍又一遍地运行相同的代码，并且每次的值都不同，那么使用循环是很方便的。
#### 不同类型的循环
JavaScript 支持不同类型的循环：
* for - 循环代码块一定的次数
* for/in - 循环遍历对象的属性
* while - 当指定的条件为 true 时循环指定的代码块
* do/while - 同样当指定的条件为 true 时循环指定的代码块

#### for 循环
语法：
```javascript
for (语句 1; 语句 2; 语句 3)
  {
  被执行的代码块
  }
  /**
  语句 1 在循环（代码块）开始前执行
  语句 2 定义运行循环（代码块）的条件
  语句 3 在循环（代码块）已被执行之后执行
**/
```
示例：
```javascript
for (var i=0; i<5; i++){
  console.log('number is' + i);
 }
```

#### for/in 循环
for/in循环一般用于遍历，遍历对象的属性，这里简单介绍，会在之后的对象和数组那块应用更多。
```javascript
var person={fname:"John",lname:"Doe",age:25};

for (key in person)  // key 为属性名
{
    text = text + person[key];
}

console.log(text);
```

#### while 循环
while 属于前测试循环语句，只要指定条件为 true，循环就可以一直执行代码块。
语法：
```javascript
while (条件){
    需要执行的代码
}
```
示例：
```javascript
while (i<5){
    text = text + "The number is " + i + "\n";
    i++;
}
console.log(text);
```

#### do/while 循环
do/while 属于后测试循环语句，即只有在循环体中的代码执行之后，才会测试出口条件，换句话来说，在对条件表达式求值之前，循环体中的代码至少会被执行一次。反之 `while` 循环属于前测试循环，在循环体呢的代码执行之前，就会对出口条件求值，因此如果条件不符合，循环内的代码有可能永远不会被执行。
语法：
```javascript
do
  {
  需要执行的代码
  }
while (条件);
```

示例：
```javascript
do{
  text = text + "The number is " + i + "<br>";
  i++;
}
while (i<5);
console.log(text);
```
## break 和 continue
`break` 语句用于跳出循环，`continue` 用于跳过循环中的一个迭代。简单来讲就是 `break`是直接跳出循环，之后的循环符合条件也不执行；而 `continue` 则是跳出本次循环，之后的循环符合条件还是要继续执行。
示例：
```javascript
for (i=0;i<10;i++){
  if (i==3){
    break;
  }
  text = text + "The number is " + i + "\n";
}
console.log(text);
```

`continue` 语句中断循环中的迭代，如果出现了指定的条件，然后继续循环中的下一个迭代。
```javascript
for (i=0;i<=10;i++)
 {
 if (i==3) continue;
  text = text + "The number is " + i + "\n";
 }
console.log(text);
```
