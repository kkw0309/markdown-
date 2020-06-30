## JavaScript DOM操作

## 目标
* 理解DOM的概念和DOM树
* DOM 节点
* DOM 写入和查找
* DOM 操作

## DOM的概念
DOM（Document Object Model ，文档对象模型）一种独立于语言，用于操作xml，html文档的应用编程接口。
当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

![DOM树](https://www.runoob.com/images/pic_htmltree.gif)


通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。
* JavaScript 能够改变页面中的所有 HTML 元素
* JavaScript 能够改变页面中的所有 HTML 属性
* JavaScript 能够改变页面中的所有 CSS 样式
* JavaScript 能够对页面中的所有事件做出反应


## DOM树
html标签通过浏览器的解析后才会形成DOM树，此后HTML中的每个标签元素，属性，文本都能看做是一个DOM的节点，JavaScript都能通过DOM的提供的编程接口操作到每个节点，去了解浏览器的渲染机制能够帮助我们了解DOM。


### HTML 代码
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>dom</title>
</head>
<body>
    <div>
        <a href="www.baidu.com">百度</a>
    </div>
</body>
</html>
```

### 对应的DOM树结构
![DOM树](https://images2015.cnblogs.com/blog/1144006/201705/1144006-20170529152551899-1042653467.png)

### 节点关系
 DOM节点（当前标签和同级、父级、子级..之间的关系）
 * 根节点
 * 父节点
 * 兄弟节点
 * 子节点

## 节点属性
### DOM节点类型
DOM是javascript操作网页的接口，全称为文档对象模型(Document Object Model)。它的作用是将网页转为一个javascript对象，从而可以使用javascript对网页进行各种操作(比如增删内容)。浏览器会根据DOM模型，将HTML文档解析成一系列的节点，再由这些节点组成一个树状结构。DOM的最小组成单位叫做节点(node)，文档的树形结构(DOM树)由12种类型的节点组成。

>一般地，节点至少拥有nodeType、nodeName和nodeValue这三个基本属性。节点类型不同，这三个属性的值也不相同

#### nodeType
nodeType属性返回节点类型的常数值。不同的类型对应不同的常数值，12种类型分别对应1到12的常数值:

* 元素节点            　　Node.ELEMENT_NODE(1)
* 属性节点            　　Node.ATTRIBUTE_NODE(2)
* 文本节点            　　Node.TEXT_NODE(3)
* CDATA节点             Node.CDATA_SECTION_NODE(4)
* 实体引用名称节点    　　 Node.ENTRY_REFERENCE_NODE(5)
* 实体名称节点        　　Node.ENTITY_NODE(6)
* 处理指令节点        　　Node.PROCESSING_INSTRUCTION_NODE(7)
* 注释节点            　 Node.COMMENT_NODE(8)
* 文档节点            　 Node.DOCUMENT_NODE(9)
* 文档类型节点        　　Node.DOCUMENT_TYPE_NODE(10)
* 文档片段节点        　　Node.DOCUMENT_FRAGMENT_NODE(11)
* DTD声明节点            Node.NOTATION_NODE(12)

DOM定义了一个Node接口，这个接口在javascript中是作为Node类型实现的，而在IE8-浏览器中的所有DOM对象都是以COM对象的形式实现的。所以，IE8-浏览器并不支持Node对象的写法


```javascript
//在标准浏览器下返回1，而在IE8-浏览器中报错，提示Node未定义
console.log(Node.ELEMENT_NODE);//1
```

#### nodeName
nodeName属性返回节点的名称

#### nodeValue
nodeValue属性返回或设置当前节点的值，格式为字符串

#### 代码列举
###### 元素节点
元素节点element对应网页的HTML标签元素。元素节点的节点类型nodeType值是1，节点名称nodeName值是大写的标签名，nodeValue值是null
```javascript
console.log(document.body.nodeType,document.body.nodeName,document.body.nodeValue)
console.log(Node.ELEMENT_NODE === 1);//true
```

###### 特性节点
元素特性节点attribute对应网页中HTML标签的属性，它只存在于元素的attributes属性中，并不是DOM文档树的一部分。特性节点的节点类型nodeType值是2，节点名称nodeName值是属性名，nodeValue值是属性值.

例如：div元素有id="test"的属性
```javascript
var attr = test.attributes.id;
// 'id' 'test'
console.log(attr.nodeType,attr.nodeName,attr.nodeValue)
console.log(Node.ATTRIBUTE_NODE === 2);//true
```

###### 文本节点
文本节点text代表网页中的HTML标签内容。文本节点的节点类型nodeType值是3，节点名称nodeName值是'#text'，nodeValue值是标签内容值.
例如： div元素内容为'测试'
```javascript
var txt = test.firstChild;
//3 '#text' '测试'
console.log(txt.nodeType,txt.nodeName,txt.nodeValue)
console.log(Node.TEXT_NODE === 3);//true
```

###### CDATA节点(了解)
CDATASection类型只针对基于XML的文档，只出现在XML文档中，表示的是CDATA区域

###### 实体引用名称节点（了解）
实体是一个声明，指定了在XML中取代内容或标记而使用的名称。 实体包含两个部分， 首先，必须使用实体声明将名称绑定到替换内容。 实体声明是使用 <!ENTITY name "value"> 语法在文档类型定义(DTD)或XML架构中创建的。其次，在实体声明中定义的名称随后将在 XML 中使用。


###### 实体名称节点（了解）

###### 处理指令节点（了解）

###### 注释节点
注释节点comment表示网页中的HTML注释。注释节点的节点类型nodeType的值为8，节点名称nodeName的值为'#comment'，nodeValue的值为注释的内容

例如：id为myDiv的div元素中存在一个<!-- 我是注释内容 -->
```javascript
<div id="myDiv"><!-- 我是注释内容 --></div>
<script>
var com = myDiv.firstChild;
//8 '#comment' '我是注释内容'
console.log(com.nodeType,com.nodeName,com.nodeValue)
console.log(Node.COMMENT_NODE === 8);//true    
</script>
```

###### 文档节点
文档节点document表示HTML文档，也称为根节点，指向document对象。文档节点的节点类型nodeType的值为9，节点名称nodeName的值为'#document'，nodeValue的值为null

```javascript
console.log(document.nodeType,document.nodeName,document.nodeValue)
console.log(Node.DOCUMENT_NODE === 9);//true   
```

###### 文档类型节点
文档类型节点DocumentType包含着与文档的doctype有关的所有信息。文档类型节点的节点类型nodeType的值为10，节点名称nodeName的值为doctype的名称，nodeValue的值为null

```javascript
var nodeDocumentType = document.firstChild;
//10 "html" null
console.log(nodeDocumentType.nodeType,nodeDocumentType.nodeName,nodeDocumentType.nodeValue);
console.log(Node.DOCUMENT_TYPE_NODE === 10);
```

###### 文档片段节点
文档片段节点DocumentFragment在文档中没有对应的标记，是一种轻量级的文档，可以包含和控制节点，但不会像完整的文档那样占用额外的资源。该节点的节点类型nodeType的值为11，节点名称nodeName的值为'#document-fragment'，nodeValue的值为null.


```javascript
console.log(nodeDocumentFragment.nodeType,nodeDocumentFragment.nodeName,nodeDocumentFragment.nodeValue);
console.log(Node.DOCUMENT_FRAGMENT_NODE === 11);//true
```

###### DTD声明节点
DTD声明节点notation代表DTD中声明的符号。该节点的节点类型nodeType的值为12，节点名称nodeName的值为符号名称，nodeValue的值为null


### tagName
tagName 属性返回元素的标签名。在 HTML 中，tagName 属性的返回值始终是大写的。

```javascript
document.getElementById("demo").tagName;
```

## 文档的写入

### document.write()
write() 方法可向文档写入 HTML 表达式或 JavaScript 代码。可列出多个参数(exp1,exp2,exp3,...) ，它们将按顺序被追加到文档中。

语法：
```javascript
document.write(exp1,exp2,exp3,....)
```

```HTML
<html>
<body>

<script type="text/javascript">
document.write("Hello World!");
</script>

</body>
</html>
```
### document.writeln()
writeln() 方法与 write() 方法作用相同，外加可在每个表达式后写一个换行符
```HTML
<html>
<body>

<script type="text/javascript">
document.writeln("Hello World!");
document.writeln("Hello World!");
</script>

</body>
</html>
```

## 查找元素
### getElementById()



### getElementsByTagName()


### getElementsByName()


### getElementsByClassName()


## 元素属性


### innerHTML/outerHTML


### innerText/outeText


### getAttribute()


### setAttribute()


## 简单的DOM操作
