## JavaScript 事件

## 目标

## Event对象的概念
JavaScript与HTML的交互是通过用户或浏览器操作页面时发生的事件（Event）来处理的。
当页面加载时，它被称为事件（Event）。当用户单击按钮时，单击也是一个事件（Event）。其他示例包括按任意键、关闭窗口、调整窗口大小等事件（Event）。
我们可以使用这些事件（Event）来执行JavaScript的响应，比如响应按钮、向用户显示消息、验证数据，等等。
事件（Event）是文档对象模型（DOM）级别3（原文：Document Object Model (DOM) Level 3）的一部分，每个HTML元素都包含一组可以触发JavaScript代码的事件（Event）。


## Event对象
 Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。事件通常与函数结合使用，函数不会在事件发生前被执行！


## Event对象相关属性
altKey	返回当事件被触发时，”ALT” 是否被按下。
button	返回当事件被触发时，哪个鼠标按钮被点击。
clientX	返回当事件被触发时，鼠标指针的水平坐标。
clientY	返回当事件被触发时，鼠标指针的垂直坐标。
ctrlKey	返回当事件被触发时，”CTRL” 键是否被按下。
metaKey	返回当事件被触发时，”meta” 键是否被按下。
relatedTarget	返回与事件的目标节点相关的节点。
screenX	返回当某个事件被触发时，鼠标指针的水平坐标。
screenY	返回当某个事件被触发时，鼠标指针的垂直坐标。
shiftKey	返回当事件被触发时，”SHIFT” 键是否被按下。

cancelBubble	如果事件句柄想阻止事件传播到包容对象，必须把该属性设为 true。
fromElement	对于 mouseover 和 mouseout 事件，fromElement 引用移出鼠标的元素。
keyCode	对于 keypress 事件，该属性声明了被敲击的键生成的 Unicode 字符码。对于 keydown 和 keyup
offsetX,offsetY	发生事件的地点在事件源元素的坐标系统中的 x 坐标和 y 坐标。
returnValue	如果设置了该属性，它的值比事件句柄的返回值优先级高。把这个属性设置为
srcElement	对于生成事件的 Window 对象、Document 对象或 Element 对象的引用。
toElement	对于 mouseover 和 mouseout 事件，该属性引用移入鼠标的元素。
x,y	事件发生的位置的 x 坐标和 y 坐标，它们相对于用CSS动态定位的最内层包容元素。


## Event对象相关方法

type：事件的类型，如onlick中的click；
srcElement/target：事件源，就是发生事件的元素；
relatedTarget：返回与事件的目标节点相关的节点；
fromElement,toElement：对于 mouseover 和 mouseout 事件，fromElement 引用移出鼠标的元素，toElement引用移入鼠标的元素；
currentTarget：返回其事件监听器触发该事件的元素；
timeStamp：返回事件生成的日期和时间；
eventPhase：返回事件传播的当前阶段，1表示捕获阶段，2表示处于目标，3表示冒泡阶段；
detail：表示的是与事件相关的细节信息
bubbles：返回布尔值，指示事件是否是起泡事件类型；
cancelable：返回布尔值，表示是否可以取消事件的默认行为；
cancelBubble：一个布尔属性，默认是false。把它设置为true的时候，将阻止事件进一步起泡到包容层次的元素；(e.cancelBubble = true; 相当于 e.stopPropagation();)
returnValue：一个布尔属性，设置为false的时候可以阻止浏览器执行默认的事件动作；(e.returnValue = false; 相当于 e.preventDefault();)
defaultPrevented：表示是否调用了preventDefault()
initEvent(eventType,canBubble,cancelable)：初始化新创建的 Event 对象的属性；
preventDefault()： 通知浏览器不要执行与事件关联的默认动作；
stopPropagation()：不再派发事件

## 鼠标跟随
```javascript
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<style>
		 .test{
				 // margin-top: 20px;
				 // width: 20px;
				 // height: 20px;
				 background-color: red;
				 position: absolute;
				 // animation: test infinite 1s ;
				 // border-radius: 20px;
				 display: none;
		 }

		 @keyframes test {
				 from{
						 background-color:red;
				 }
				 to{
						 background-color:green;
				 }
		 }
	</style>

</head>



<div id="test" class="test">
</div>
	<script>
			window.onload = function () {
				// 鼠标跟随
				var test=document.getElementById("test");
				document.onmousemove=function(event){
					test.style.display="inherit";
					event=event||window.event;
					var st=document.body.scrollTop||document.documentElement.scrollTop;
					var sl=document.body.scrollLeft||document.documentElement.scrollLeft;
					var left=event.clientX;
					var top=event.clientY;
					test.style.left=left+sl+"px";
					test.style.top=top+st+"px";
				}
			}
	</script>
</body>

</html>
```
## 拖拽

## Event常见的keyCode码

## 事件绑定
#### 事件绑定的几种方式
在Javascript中，事件绑定一共有3种方式：
* 行内绑定
* 动态绑定
* 事件监听
## 事件委托
事件委托：即是，一个事件本来是要绑定到某个元素上，然而却绑定到了该元素的父（或祖先）元素上，利用事件冒泡原理，触发执行效果。
