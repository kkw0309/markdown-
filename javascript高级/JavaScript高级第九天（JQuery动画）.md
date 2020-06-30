# JavaScript 第九天(JQuery动画)

## show()方法
使用 show() 方法来显示 HTML 元素，可以使我们指定的隐藏元素显示出来，相当于CSS中的"display"属性的"block"值
示例：
```JavaScript
$("选择器").show(timeout,function(){})
```
## hide()方法
使用 hide() 方法来隐藏 HTML 元素，可以使我们指定的元素隐藏起来，相当于CSS中的“display”属性的“none”值
```JavaScript
$("选择器").hide(timeout,function(){})
```

| 参数     | 描述     |
| :------------- | :------------- |
| speed      | 可选，规定隐藏和显示的速度，时间单位为毫秒      |
| speed      | 可选，规定隐藏和显示的速度，时间单位为毫秒      |


实例：
```JavaScript
$(".hide").click(function(){
  $(".image").hide(3000, function(){
    $(".image").show(3000);
  })
})
```

## fadeIn()方法
fadeIn()方法和fadeOut()方法与show方法不相同的是，fadeIn()方法和fadeOut()方法只改变元素的不透明度。fadeOut()方法会在指定的一段时间内降低元素的不透明度，直到元素完全消失(“display: none”)。fadeIn()方法则恰好相反。

示例：
```JavaScript
$("选择器").fadeIn(timeout,function(){})
```

## fadeOut()方法
fadeOut() 方法用于淡出可见元素

示例
```JavaScript
$("选择器").fadeOut(timeout,function(){})
```

| 参数     | 描述     |
| :------------- | :------------- |
| speed      | 可选，规定隐藏和显示的速度，时间单位为毫秒      |
| speed      | 可选，规定隐藏和显示的速度，时间单位为毫秒      |


示例：
```JavaScript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>jQuery实现广告弹窗</title>
		<style type="text/css">
			#ad{
				width: 300px;
				height: 300px;
				background-color: yellowgreen;
				bottom: 0;
				right: 0;
				position: fixed;
				display: none;
			}
		</style>
		<script type="text/javascript">
			setTimeout(function(){
			   $("#ad").fadeIn(2000);
			},1000);

		  $("#closeBtn").click(function(){
					$("#ad").fadeOut("slow");
			});
		</script>
	</head>
	<body>
		<div id="ad">
			<button id="closeBtn">关闭</button>
		</div>
	</body>
</html>
```

## slideUp()方法
自下而上
```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>jQuery实现广告弹窗</title>
		<style type="text/css">
			#ad{
				width: 300px;
				height: 300px;
				background-color: yellowgreen;
				bottom: 0;
				right: 0;
				position: fixed;
				display: none;
			}
		</style>
		<script type="text/javascript">
			setTimeout(function(){
			   $("#ad").slideUp(2000);
			},1000);

		  $("#closeBtn").click(function(){
					$("#ad").slideDown("slow");
			});
		</script>
	</head>
	<body>
		<div id="ad">
			<button id="closeBtn">关闭</button>
		</div>
	</body>
</html
```

## slideDown()方法


## toggle()   
## slideToggle()  
## fadeToggle()方法

## 自定义动画方法 animate()
## 动画延时delay()
## 停止动画stop()


案例要求:应用动画完成无缝滚动、下拉菜单、淡入淡出轮播
