# Javascript 高级第八天

## 目标
* 掌握JQuery DOM操作
* 掌握CSS 操作

## DOM简介

## 基础DOM和CSS操作

### 设置元素和内容
设置元素的内容
#### html(),text(),val()
获取元素html内容:

html()  <==> innerHTML
示例：
```javascript
var str=$("选择器").html()
```
设置元素的html内容：
示例：
```javascript
$("选择器").html("html内容")
```
获取文本内容:
```javascript
var str=$("选择器").text()
```
设置文本内容 :
```javascript
$("选择器").text("内容")
```
val() 是获取或设置表单域的value值

获取  
```javascript
var v=$("表单域选择器").val()
```
设置
```javascript
$("表单域选择器").val("值")
```

## 元素属性操作

### 向匹配的元素添加指定的css类名：
示例：
```javascript
$("选择器").addClass("类名")
```
### 设置或获取元素的属性  attr()   
示例：
```javascript
// 设置:  
$("选择器").attr("属性名","值")
// 获取:
var v=$("选择器").attr("属性名")
```
### 设置或获取元素的固有属性  prop()
示例：
```javascript
// 设置:
 $("选择器").prop("属性名","值")
// 获取:
var v=$("选择器").prop("属性名")
```

### 设置或获取元素的css属性
设置css属性两种方法
```javascript
$("选择器").css({属性1:"值1",属性2:"值2",⋯⋯})
```
这里的css属性如果"-",要用驼峰写法或加""引起来

```javascript
$("选择器").css("属性","值").css("属性","值")
```    
这里属性和值要用“”引起来

获取css属性方法
```javascript
var name = $("选择器").attr("width")
var width=$("选择器").css("width")
```

移除css类：
```javascript
$("选择器").removeClass("类名")
```
移除元素属性
```javascript
removeAttr("属性")
removeProp("属性")
```

toggleClass 添加或删除一个类,如果元素有这个类，就删除，如果没有这个类就添加


## each方法的使用
each遍历:
```javascript
$("选择器").each(function(i){
  //i为索引值
  $(this).remove()
})
```
## 滚动条
获取滚动条距离顶点的距离
```javascript
var t=$(document).scrollTop();
```

滚动条滚动的事件  
```javascript
$(window).scroll(function(){})
```
控制滚动条滚动的方法
```javascript
$("html,body").css({scrollTop:"500px"})
```

##	DOM节点操作
### 创建节点
1、创建元素节点
$()
创建元素节点使用Jquery的工厂函数$()来完成，格式如下：$(html),该方法会根据传入的html字符串返回一个DOM对象，并将DOM对象包装成一个JQuery对象后返回。创建一个元素节点JQuery：
```javascript
$li1=$("<li></li>")
```
代码返回$li1就是一个由DOM对象包装成的JQuery对象。把新建节点添加到DOM树中JQuery：
```javascript
$("ul").append($li1);
```
添加后页面中只能看到<li>元素默认的"·",由于没有为节点添加文本所以只显示默认符号，

### 创建文本节点
使用JQuery的工厂函数$()同样能够创建文本节点，创建文本节点的JQuery：
```javascript
$li2=$("<li>苹果</li>");
```
代码返回$li2就是一个由DOM对象包装成JQuery对象，把新建的文本节点添加到DOM树中JQuery：
```javascript
$("ul").append($li2);
```

### 创建属性节点
创建属性节点同元素节点、文本节点一样使用JQuery的工厂函数完成。创建属性节点的JQuery：
```javascript
$li3=$("<li title='榴莲'>榴莲</li>");
```
代码返回$li3也是一个由DOM对象包装成JQuery对象，把新建的属性节点添加到DOM树中JQuery：
```javascript
$("ul").append($li3);
```

## 插入节点
将新建的节点插入到文档中有多个方法:append()、appendTo()、prepend()、prependTo()、after()、insertAfter()、before()、insertBefore()。

#### append()方法
append()方法向匹配的元素内部追加内容，
插入到元素的结束标记之前(内部结尾处)  
```javascript
$("target").append(element);
$("ul").append("<li title='香蕉'>香蕉</li>");
```
该方法查找ul元素，然后向ul中添加新建的li元素。

#### appendTo()方法
appendTo()方法将所有匹配的元素追加到指定的元素中，
```javascript
$(element).appendTo(target)
```

#### prepend()方法
prepend()方法将每匹配的元素内部前置要添加的元素，
```javascript
$(target).prepend(element)
```
该方法将查找元素ul然后将新建的li元素作为ul子节点，且作为ul的第一个子节点插入到ul中。

#### prependTo()方法
prependTo()方法将元素添加到每一个匹配的元素内部前置，
```javascript
$(element).prependTo(target)
```

#### after()方法
after()方法向匹配的元素后面添加元素，新添加的元素做为目标元素后的紧邻的兄弟元素。
```javascript
$(target).after(element)
```

#### insertAfter()方法
insertAfter()方法将新建的元素插入到查找到的目标元素后，做为目标元素的兄弟节点。
```javascript
$(element).insertAfter(target)
```
#### before()方法
before()方法在每一个匹配的元素之前插入，做为匹配元素的前一个兄弟节点。
```javascript
$(target).before(element)
```

#### insertBefore()方法
insertBefore()方法将新建元素添加到目标元素前，做为目标元素的前一个兄弟节点，
```javascript
$(element).insertBefore(target)
```


>增加元素的方法前四个是添加到元素内部，后四个是添加到元素外部的操作，有这些方法可以完成任何形式的元素添加。


## 包裹节点
包裹节点$(element).wrap()、$(element).wrapAll()、$(element).wrapInner()
包裹节点方法使用其他标记包裹目标元素从而改变元素的显示形式等，并且该操作不会破坏原始文档的词义。包裹节点有三种实现形式：
* wrap();
* wrapAll();
* wrapInner();

#### wrap()
```javascript
$(dstelement).wrap(tag);
```
wrapAll()
```javascript
$(dstelement).wrapAll(tag)
```
$("p").wrapAll("<b></b>");访示例方法使用b标签包裹所有的p元素，所有的p元素标签用一个b标签包裹。

wrapInner()
```javascript
$(dstelement).wrapInner(tag)
```
$("div").wrapInner("<b></b>");该示例使用b标签包裹每个一strong元素的子元素。

## 节点操作：删除 复制 清空 替换（当鼠标离开输入框时提示用户信息）
### 删除

### 复制

### 清空

### 替换


删除 remove()
		$("选择器").remove()
		只删除含id=box的div方法
		$("div").remove("#box");
		$("#box").remove();
复制 clone()
		$("div").append(  $("选择器").clone(true)   )

		$("body").append(  $("div").clone(true)   )

empty() 清空内容
		$("选择器").empty()

replaceWith 替换节点
		$("div").replaceWith("<span>好好</span>")
