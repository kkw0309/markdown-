# JavaScript 第四天

## 目标
* 理解什么是数组、数组定义，数组的特点
* 创建数组
* 数组长度和数组中常用的方法
* 数组遍历和检测
* 多维数组

### 数组
#### 什么是数组
数组对象是使用单独的变量名来存储一系列的值。
如果你有一组数据（例如：车名字），存在单独变量如下所示：
```javascript
var car1="Saab";
var car2="Volvo";
var car3="BMW";
```
然而，如果你想从中找出某一辆车？并且不是3辆，而是300辆呢？这将不是一件容易的事！最好的方法就是用数组。数组可以用一个变量名存储所有的值，并且可以用变量名访问任何一个值。数组中的每个元素都有自己的的ID，以便它可以很容易地被访问到。`JavaScript`数组和其他语言的数组一样都是数据的有序列表，但是不同的是`JavaScript`的数组的每一项都可以保存任何类型的数据，也就是说你可以在数组的第一个位置保存一个字符串，第二个位置保存一个对象，第三个位置保存一个对象，以此类推。并且`Javascript`数组的长度是可变的，数组的长度会根据你放入其中的数据多少来决定。

#### 数组的定义
数组是值的有序集合，`Javascript`数组是无类型的；数组元素可以是任意类型，并且同一个数组的不同元素也可能有不同的类型。每个值叫做一个元素，而每个元素在数组中有一个位置
元素的位置我们称为下标，或索引,从0开始数。

#### 创建数组
创建一个数组，有三种方法。下面的代码定义了一个名为 myCars的数组对象：

###### 常规方式:
```javascript
var myCars=new Array();
myCars[0]="Saab";       
myCars[1]="Volvo";
myCars[2]="BMW";

console.log(myCar[2]);
```

调用构造函数Array()是创建数组可以用三种方式调用构造函数。
* 调用时没有参数：
```javascript
var a = new Array();
```
该方法创建一个没有任何元素的空数组，等同于数组直接量[]。

* 调用时有一个数值参数，它指定长度：
```javascript
var a = new Array(10)  
```
预先分配空间,当预先知道所需元素个数时，这种形式的Array()构造函数可以用来预分配一个数组空间。

* 显示指定一个或多个数组元素或者数组的一个非数值元素：
```javascript
var a = new Array(5,4,3,2,1,“test”);
```
以这种形式，构造函数的参数将会成为新数组的元素。使用数组字面量比这样使用Array()构造函数要简单多了。

###### 简洁方式
```javascript
var myCars=new Array("Saab","Volvo","BMW");

console.log(myCars[1]);
```
###### 字面
```javascript
var myCars=["Saab","Volvo","BMW"];

console.log(myCars[0]);
```

#### 访问数组
通过指定数组名以及索引号码，你可以访问某个特定的元素。以下实例可以访问myCars数组的第一个值：
```javascript
var name=myCars[0];

console.log(name);
```
以下实例修改了数组 myCars 的第一个元素:
```javascript
myCars[0]="Opel";
```
>注意：数组访问的下标索引是从0开始的，[0] 是数组的第一个元素。[1] 是数组的第二个元素。

#### 数组长度
定义：length 属性可设置或返回数组中元素的数目（从1开始）；数组的 length 属性总是比数组中定义的最后一个元素的下标大 1。

对于那些具有连续元素，而且以元素 0 开始的常规数组而言，属性 length 声明了数组中的元素的个数。

数组的 length 属性在用构造函数 Array() 创建数组时被初始化。给数组添加新元素时，如果必要，将更新 length 的值。

设置 length 属性可改变数组的大小。如果设置的值比其当前值小，数组将被截断，其尾部的元素将丢失。如果设置的值比它的当前值大，数组将增大，新的元素被添加到数组的尾部，它们的值为 undefined。

```javascript
[].length        //  ==0
[1,2,3].length      //  ==3
```

#### 数组检测
* 运用instanceof运算符来判断一个对象是不是数组：

instanceof 是一个二元运算符，左边操作数是一个对象，不是的话返回false，右边操作数是一个函数对象或者函数构造器，不是的话返回false。原理是通过判断左操作数的对象的原型链上是否具有右操作数的构造函数的prototype属性。
```javascript
arr instanceof Array
```
*  可以使用Array.isArray(arr) ,这个ES5新增的一个Array方法，该方法是Array对象的一个静态函数，用来判断一个对象是不是数组。

### 数组中的常用方法
#### 数组元素的添加和删除
##### 添加
```javascript
a = []     //开始是一个空数组
a[0] = “zero”;    //然后向其中添加元素
a[1] = “one”;
```

##### 删除
前面提到数组也是对象，索引只是特殊的属性，所以我们可以使用删除对象属性的方法,使用delete 删除数组元素
```javascript
delete a[2];
console.log(a[2]); //undefined
```
##### 栈方法
上面例子我们可以看出，尤其是其删除方法，并不是我们希望的表现形式，我们很多时候希望删除中间一个元素后，后面元素的index都自动减一，数组length同时减一，就好像在一个堆栈中拿去的一个，数组已经帮我们做好了这种操作方式，pop和push能够让我们使用堆栈那样先入后出使用数组。

可以利用for循环来实现数组的遍历。
```javascript
var a=new Array(1,2,3);
a.push(4);
console.log(a);//[1, 2, 3, 4]
console.log(a.length);//4
console.log(a.pop(a));//4
console.log(a); //[1, 2, 3]
console.log(a.length);//3
```
##### 队列方法
时使用shift( )方法和push( )方法，就可以像队列一样使用数组

```javascript
var arr=['red','blue','green'];
alert(arr.length); //此时的数组长度为3
arr.push('black'); //向数组的末尾添加一项，值为"black"
alert(arr.length); //此时数组的长度变为4
alert(arr[3]); //获取数组的第四项，值是"black"
alert(arr.shift()); //删除数组的第一项
alert(arr.length); //获取数组的长度，输出结果为3
```

ECMAScript还为数组提供了一个unshift()方法，该方法的用途与shift()的相反，它
能在数组前端添加任意个项并返回新数组的长度。
同时使用unshift()方法和pop( )方法，可以使用相反的方向来模拟队列。


##### join()
join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
```javascript
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(
arr.join(".")
)
```
##### reverse()
reverse() 方法用于颠倒数组中元素的顺序。
```javascript
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr + "<br />")
document.write(arr.reverse())
```

##### sort()
sort() 方法用于对数组的元素进行排序。
sortby	可选。规定排序顺序。必须是函数
>语法：arrayObject.sort(sortby)

```javascript
var arr = new Array(6)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
arr[3] = "James"
arr[4] = "Adrew"
arr[5] = "Martin"

document.write(arr + "<br />")
document.write(arr.sort())
```

##### concat()
concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
###### 返回值
返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。

```javascript
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

var arr2 = new Array(3)
arr2[0] = "James"
arr2[1] = "Adrew"
arr2[2] = "Martin"

document.write(arr.concat(arr2))
```

##### slice()
slice() 方法可从已有的数组中返回选定的元素。

##### splice()
splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。该方法会改变原始数组。
