# String对象和Math对象

## 目标
* String对象以及String对象常用方法
* Math对象以及Math对象的常用方法


## 什么是String对象
String 对象用于处理已有的字符块。

## 字符串的创建方式
```javascript
var string = 'sfsdfasg';
var string = new String('fdsgsagsd');
var string = String('asfsadgsdg');
```

##字符串的方法
#### charAt() 方法
.charAt(num) 方法可返回指定位置的字符，返回的字符是长度为 1 的字符串。

## concat() 方法
str.concat(str1,str2,str3····)方法用于连接两个或两个以上的字符串，并返回副本；不对str字符串本身做修改。

## indexOf() 方法
.indexOf(str)方法用于返回指定字符在字符串中首次出现的位置。

## substr() 方法
.substr(star [,length])方法用于返回从start索引号开始的指定长度的字符串。如果是负数，那么该参数声明从字符串的尾部开始算起的位置，如果没有指定 length，那么返回的字符串包含从 start 到 stringObject 的结尾的字符。

## substring() 方法
.substring(star [,end])方法用于提取两个指定下标之间的字符串，start参数必须有且为一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。end为可选，需要比最后一个字符串下标大一，如无，则默认为stringObject.length。

## search() 方法
.search(RegExp)方法用于检索字符串中与正则表达式匹配的字符串，并返回与之匹配子串的起始下标。如无匹配的则返回-1.

## slice() 方法
.slice(star [,end])提取字符串中指定位置的子串。并返回新的字符串（即不对原字符串进行修改）。star如为负数，则从字符串的尾部开始计算（如-1，则为字符串的最后末尾位置，-2为字符串倒数第二位。）end为要抽取字符串结尾的位置，若为负数，则从字符串的尾部开始计算。

## split() 方法
.split(separator,howmany)split() 方法用于把一个字符串分割成字符串数组。separator 必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。howmany 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。

返回值为一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 stringObject 分割成子串创建的。返回的数组中的字串不包括 separator 自身。但是，如果 separator 是包含子表达式的正则表达式，那么返回的数组中包括与这些子表达式匹配的字串（但不包括与整个正则表达式匹配的文本）。

## match() 方法
match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。（这依赖于regexp中的g标志）。

如果没有找到任何匹配的文本， match() 将返回 null。否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。该数组的第 0 个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式匹配的文本。除了这些常规的数组元素之外，返回的数组还含有两个对象属性。 index 属性声明的是匹配文本的起始字符在 stringObject 中的位置，input 属性声明的是对 stringObject 的引用。

如果 regexp 具有标志 g，则 match() 方法将执行全局检索，找到 stringObject 中的所有匹配子字符串。若没有找到任何匹配的子串，则返回 null。如果找到了一个或多个匹配子串，则返回一个数组。不过全局匹配返回的数组的内容与前者大不相同，它的数组元素中存放的是 stringObject 中所有的匹配子串，而且也没有 index 属性或 input 属性。

注意：在全局检索模式下，match() 即不提供与子表达式匹配的文本的信息，也不声明每个匹配子串的位置。如果您需要这些全局检索的信息，可以使用 RegExp.exec()。


### concat()



### lastIndexOf()


### toLowerCase()


### toUpperCase()


## 什么是Math对象
Math 对象下定义了许多与数学相关的属性和方法，比如圆周率的常量值，随机数的方法等等


## Math对象的方法


###	max()
```javascript
Math.max(0,3,1,4,2,5);// 5
```


###	min()
```javascript
Math.min(0,3,1,4,2,5);// 0
```


###	ceil()
向上取整
```JavaScript
var a = 1.01,b = 1.49;
Math.ceil(a);// 2
Math.ceil(b);// 2
```


###	floor()
向下取整
```javascript
var a = 1.01,b = 1.999;
Math.floor(a);// 1
Math.floor(b);// 1
```


###	round()
四舍五入
```javascript
Math.round(0.1) // 0
Math.round(0.5) // 1
Math.round(0.4445) // 1 从最后一位开始往前计算
```

###	random()


###	abs()


###	pow()


###	sqrt()
