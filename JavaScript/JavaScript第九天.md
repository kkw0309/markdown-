## JavaScript DOM操作

## 目标
* 掌握节点树和节点遍历
* 元素树
* 节点的增删改查


## 节点遍历
### 节点树

#### parentNode 
parentNode 属性可返回某节点的父节点。如果指定的节点没有父节点则返回 null 。 
```JavaScript
document.getElementById("id").parentNode;
```


#### childNodes  
可以通过childNodes获取到该节点下的所有子节点类数组(NodeList类数组)，NodeList类数组与我们以前见到的arguments类数组不同的是，Nodelist类数组有length属性。
```JavaScript
<body>
    <ul id="myList">
        hello ChildNodes
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <script>
        var element = document.getElementById('myList');
        alert(element.childNodes.length);
    </script>
<body>
```  
>总结：其实在li标签之间还存在空白符，而空白符也被算是一个节点（文本节点前后不会产生空白符，因为空白符也是文本节点）

#### firstChild  
firstChild 属性返回指定节点的首个子节点，以 Node 对象。  
语法：
```JavaScript
node.firstChild
```

#### lastChild  
lastChild 属性返回指定节点的最后一个子节点，以 Node 对象。
```JavaScript
document.getElementById("list").lastChild;
```

#### nextSibling  
nextSibling 属性返回指定节点之后紧跟的节点，在相同的树层级中。被返回的节点以 Node 对象返回。
>注意：如果没有 nextSibling 节点，则返回值为 null。

```JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script>
    window.onload = function() {
        var nextType = document.getElementById('one').nextSibling;
        alert(nextType.nodeType);
    }
    </script>
</head>
<body>
    <div id="div">
        <p id = "one">我是p</p>
        <span id="two">我是span</span>
    </div>
</body>
</html>
```  

```JavaScript
var nextType = document.getElementById('one').nextSibling;
```
#### previousSibling
属性返回同一树层级中指定节点的前一个节点。被返回的节点以 Node 对象的形式返回。
>注意：如果没有 previousSibling 节点，则返回值是 null。

```JavaScript
var nextType = document.getElementById('one').nextSibling;
```
 
### 元素树

#### firstElementChild    
此属性的功能是获取指定元素下第一个子元素节点。节点有多种类型，常见的有文本节点、元素节点和属性节点等，此属性获取的是元素节点。如果没有元素子节点，那么返回null。

语法：
```JavaScript
elementNode.firstElementChild;
```


```HTML
<!DOCTYPE html>
<html>
<head>
<meta charset=" utf-8">
<meta name="author" content="http://www.softwhy.com/" />
<title>代码案例</title>
<style type="text/css">
#box li {
  width:350px;
  height:25px;
  line-height:25px;
  font-size:12px;
}
</style>
<script type="text/javascript">

  var obox = document.getElementById("box");
  var oshow = document.getElementById("show");
  var oli = obox.firstElementChild;
  oshow.innerHTML = oli.innerHTML;

</script>
</head>
<body>
<ul id="box">
  <li>我是列表第一项</li>
  <li>我是列表第二项</li>
  <li>我是列表第三项</li>
  <li id="antzone">我是列表第四项</li>
  <li>我是列表第五项</li>
  <li>我是列表第六项</li>
</ul>
<div id="show"></div>
</body>
</html>
```

#### lastElementChild  
此属性可以返回指定元素的最后一个子元素节点。
语法：
```javascript
elementNode.lastElementChild ;
```

     
#### nextElementSibling  
nextElementSibling属性返回当前节点的下一个兄弟元素节点，HTML5新增。如果不存在一个这样的元素节点，则属性返回null。

区别：nextElementSibling属性多了一个"element"限定，也就是说此属性返回的节点必须满足如下两个条件，首先必须是兄弟节点，第二个必须是元素节点；nextSibling返回下一个兄弟节点，没有"element"限定，可以是元素节点，也可以是文本或注释等节点

语法：
```javascript
elementNodeReference.nextElementSibling;
```
   
#### previousElementSibling   
previousElementSibling可以获取节点紧邻的上一个同级元素节点。
此属性返回的元素必须要满足三个条件：
* 必须是元素节点。
* 必须是同级节点。
* 必须是紧邻的上一个节点。
如果要获取的元素节点不存在，那么此属性返回null。
功能与previousSibling属性类似，唯一的不同是：
previousSibling没有对节点的类型做限定，而previousElementSibling限定必须是元素节点。

语法：
```javascript
prevElemNode = node.previousElementSibling
```
 
#### childElementCount  
只读属性返回一个无符号长整型数字，表示给定元素的子元素数。
语法：
```javascript
var elCount = elementNodeReference.childElementCount;
```
      
#### children   
返回指定元素的子元素集合，只包括元素节点，不包括文本节点。除了IE9和Firefox，其他浏览器都支持通过children[i]获取第i个子节点。

>注意：children在IE中包含注释节点。

#### parentElement   
可以获取节点的父级元素节点。

浏览器支持：
* IE9+浏览器支持此属性。
* edge浏览器支持此属性。
* 谷歌浏览器支持此属性。
* opera浏览器支持此属性。
* 火狐浏览器支持此属性。
* safria浏览器支持此属性

### 节点操作方法
#### appendChild()
appendChild可以为指定元素在尾部追加一个子元素
参数解析:
* target：必需，父元素节点。
* newChild：必需，此元素节点将被追加到target中。

```javascript
var obox=document.getElementById("box");
var lis=document.getElementsByTagName("li");
var  newLi=document.createElement("li");
newLi.innerHTML="新增列表项";
obox.appendChild(newLi);
```

#### insertBefore()
此方法可以在指定子节点的前面插入一个新的节点。
语法：
```javascript
target.insertBefore(newChild,existingChild)
```

参数解析：
* target：被插入节点和参考节点的父节点。
* newChild：必需，要被插入的新节点。
* existingChild：必需，规定在哪个节点前面插入新节点。

```javascript
var obox=document.getElementById("box");
var lis=document.getElementsByTagName("li");
var  insertedLi=document.createElement("li");
insertedLi.innerHTML="插入一行";
obox.insertBefore(insertedLi,lis[1]);
```
#### replaceChild()
replaceChild方法可以使用一个节点替换指定子节点。
返回值是被替换掉的子节点，如果替换不成功返回值是null。
语法：
```JavaScript
nodeObject.replaceChild(new_node,old_node)
```
参数解析:
* nodeObject：父节点。
* new_node：必需，用以替换的节点。
* old_node：必需，将要被替换的子节点。


#### removeChild()
removeChild可以删除指定元素的子节点，由它的名称也体现了这一点。
如果删除成功，则返回被删除的子节点对象，否则返回null。
语法：
```javascript
fatherObj.removeChild(childrenObj)
```
参数解析：
* childrenObj：必需，要被删除的子节点对象。


#### cloneNode()
克隆一个节点，根据参数的不同可以进行浅拷贝或者深拷贝。
语法：
```javascript
Node.cloneNode(deep)
```
参数解析：
* Node：将要被克隆的节点。
* deep： 可选，布尔值，默认值为false，规定是否进行深度克隆，如果参数为true，那么将克隆Node节点以及它的后代节点，如果参数为false，那么只克隆Node节点本身。

## 创建元素与删除元素
#### document.createElement()
createElement() 方法通过指定名称创建一个元素
```javascript
var btn=document.createElement("BUTTON");
var t=document.createTextNode("CLICK ME");
btn.appendChild(t);
document.body.appendChild(btn);
```
#### document.createTextNode()
HTML元素通常是由元素节点和文本节点组成。
创建一个标题 (H1), 你必须创建 "H1" 元素和文本节点:

```javascript
var h=document.createElement("H1")
var t=document.createTextNode("Hello World");
h.appendChild(t);
```
#### appendChild(node)


#### insertBefore(newNode, existNode)  

#### removeChild(node)
