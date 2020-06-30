# Javascript 高级第七天

##目标
* JQuery 事件概念
* JQuery 事件对象
* JQuery 高级事件


## 基础事件
页面对不同访问者的响应叫做事件。事件处理程序指的是当 HTML 中发生某些事件时所调用的方法。
jQuery 是为事件处理特别设计的。

常用的事件有：click、dblclick、 mousedown、mouseup、mousemove、mouseover、mouseout、change、select、submit、keydown、 keypress、keyup、blur、focus、load、resize、scroll、error。

### 绑定事件
#### bind()  
jQuery 通过.bind()方法来为元素绑定这些事件。可以传递三个参数：bind(type,[data],fn)， type 表示一个或多个类型的事件名字符串；[data]是可选的，作为 event.data 属性值传递一个 额外的数据，这个数据是一个字符串、一个数字、一个数组或一个对象；fn 表示绑定到指 定元素的处理函数。

```JavaScript
//使用点击事件
$('input').bind('click',function(){ //点击按钮后执行匿名函数
alert('点击！');
});

//普通处理函数
$('input').bind('click',fn); //执行普通函数式无须圆括号
function fn(){
alert('点击！');
}

//可以同时绑定多个事件
$('input').bind('mouseout mouseover', function(){ //移入和移出分别执行一次

});

//通过对象键值对绑定多个参数
$('input').bind({ //传递一个对象

'mouseout':function(){ //事件名的引号可以省略
alert('移出');
},

'mouseover':function(){
alert('移入');
}
});
```

#### 经典绑定
语法：
```JavaScript
$("选择器").事件名(function);
```

示例：

```JavaScript
$("div").click(function(){
  alert('点击');
})
```

#### 只绑定一次
`one()` 方法为被选元素附加一个或多个事件处理程序，并规定当事件发生时运行的函数。
当使用 `one()` 方法时，每个元素只能运行一次事件处理器函数。

语法：

```JavaScript
// $("选择器").one("事件名",function);
```

#### `on()`
使用 on() 方法添加的事件处理程序适用于当前及未来的元素（比如由脚本创建的新元素）。

语法：
```JavaScript
$("选择器").on("事件名",fn)
```
代码示例：
```JavaScript
$("#div1").on("click",function(){
    $(this).css("background-color","pink");
});

```

注意：
on前面的元素也必须在页面加载的时候就存在于dom里面。动态的元素或者样式等，可以放在on的第二个参数里面。

动态元素绑定语法：
```JavaScript
$( document ).on( "click", "#del_opter", function() {    
  console.dir(stat);
});

```

### 解除绑定

#### 解绑指定事件方法
语法：
```JavaScript
$("选择器").unbind("事件名");
```

#### 解绑所有事件
语法：
```JavaScript
$("选择器").unbind()
```

#### 解绑指定函数
语法：
```JavaScript
$("选择器").unbind("事件名",function(){

});
```

代码示例:
```JavaScript
function function1(){

}

function function2(){

}

$("选择器").bind("click",function1);
$("选择器").bind("click",function1);
$("选择器").unbind("click",function2)
```

### 简写事件
为了使开发者更加方便的绑定事件，jQuery 封装了常用的事件以便节约更多的代码。我们称它为简写事件.

```JavaScript
// click（fn）触发每一个匹配元素的click（单击）事件
//
// dblclick（fn）触发每一个匹配元素的dblclick（双击）事件
//
// mousedown（fn）触发每一个匹配元素的mousedown（点击后）事件
//
// mouseup（fn）触发每一个匹配元素的mouseup（点击弹起）事件
//
// mouseover（fn）触发每一个匹配元素的mouseover（鼠标移入）事件
//
// mouseout（fn） 触发每一个匹配元素的mouseout（鼠标移出）事件
//
// mousemove（fn）触发每一个匹配元素的mousemove（鼠标移动）事件
//
// keydown（fn）触发每一个匹配元素的keydown（键盘按下）事件
//
// keyup（fn）触发每一个匹配元素的keyup（键盘按下弹起）事件
//
// unload（fn）当卸载本页面时绑定一个要执行的函数
//
// resize（fn）触发每一个匹配元素的resize（文档改变大小）事件
//
// change（fn）触发每一个匹配元素的change（值改变）事件
//
// submit（fn）触发每一个匹配元素的submit（表单提交）事件
```

代码示例
```JavaScript
$('div').mouseover(function(){ //移入 div 会触发

});
```
### 复合事件
#### hover()方法
hover()方法相当于mouseover与mouseout()事件的组合

语法：
```JavaScript
hover(enter, leave)
```

代码示例
```JavaScript
$("选择器").hover(function(){
			//鼠标滑过运行的代码

		},function(){
			//鼠标离开运行的代码
		})
```
#### toggle()方法
toggle方法用于模拟鼠标连输click事件。

语法：
```JavaScript
toggle(function1, function2,...., functionN);
```

示例代码：
```JavaScript
$("input").toggle(
  function(){$("body").css("background","#ff0000");},
  function(){$("body").css("background","#00ff00");},
  function(){$("body").css("background","#0000ff");}
)
```
##	事件对象
对于event，js的解释是Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。而jq的解释是事件处理（事件对象、目标元素的获取，事件对象的属性、方法等）在不同浏览器之间存在差异，jQuery在遵循W3C规范的情况下做了封装统一。

### 事件对象的获取
```JavaScript
$(elem).on("click",function(event){
   // event //事件对象
})
```

###  事件对象的常用属性和方法

* event.type：获取事件的类型，触发元素的事件类型
```JavaScript
$("a").click(function(event) {
  alert(event.type); // "click"事件
});
```

* event.pageX 和 event.pageY：获取鼠标当前相对于页面的坐标,通过这2个属性，可以确定元素在当前页面的坐标值，鼠标相对于文档的左边缘的位置（左边）与 （顶边）的距离，简单来说是从页面左上角开始,即是以页面为参考点,不随滑动条移动而变化.

* event.preventDefault() 方法：阻止默认行为

在执行这个方法后，如果点击一个链接（a标签），浏览器不会跳转到新的 URL 去了。 event.isDefaultPrevented() 来确定这个方法是否(在那个事件对象上)被调用过了

* event.stopPropagation() 方法：阻止事件冒泡
事件是可以冒泡的，为防止事件冒泡到DOM树上，也就是不触发的任何前辈元素上的事件处理函数

* event.which：获取在鼠标单击时，单击的是鼠标的哪个键

event.which 将 event.keyCode 和 event.charCode 标准化了。event.which也将正常化的按钮按下(mousedown 和 mouseupevents)，左键报告1，中间键报告2，右键报告3

* event.currentTarget : 在事件冒泡过程中的当前DOM元素
冒泡前的当前触发事件的DOM对象, 等同于this.

* this和event.target的区别：

js中事件是会冒泡的，所以this是可以变化的，但event.target不会变化，它永远是直接接受事件的目标DOM元素；this和event.target都是dom对象


#### 注意
如果要使用jquey中的方法可以将他们转换为jquery对象。比如this和$(this)的使用、event.target和$(event.target)的使用；


## 	高级事件
7.3.1 事件模拟操作
### 命名空间
在绑定事件，可以给事件定义一个别名，以后可以操作别名

	定义的方法
		$("选择器").bind("click.a",function(){
			alert("好孩子")
		})

		$("选择器").unbind(".a")
### 事件委托
$("父选择器").delegate("子元素","事件名",function(){})

	2.$("父元素选择器").on("事件名","子元素选择器",function(){})

	事件委托特点：性能好，针对新创建的元素，直接可以拥有事件
案例要求：运用事件委托实现给ul下的li移入上色， 同时练习DOM案例
