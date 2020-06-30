1、使用JQuery实现轮播图
知识点：
siblings()用于查找当前元素的同胞元素，就是拿到当前元素的兄弟节点(不包括自己)。
给当前元素设置新的样式，并删除当前元素的同胞元素的样式：
```javascript
$(this).addClass("active").siblings().removeClass("active");
```
addClass()
removeClass()
jQueryObject.index( [ object ] )：

:eq(index) 查找给定索引值的元素
```javascript
$("选择器：eq(index)") 等价于  $("选择器").eq(index)  
```

trigger方法的功能是在所选择的元素上触发指定类型的事件,其调用的语法格式为:trigger(type,[data]) ,其中参数type为触发事件的类型，参数data为可选项，表示在触发事件时,传递给函数的附件参数.

```javascript
$("#btn").trigger("click")//触发id为btn的click事件
```
animate() 方法执行 CSS 属性集的自定义动画。
该方法通过CSS样式将元素从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果。
```javascript
$(".btn1").click(function(){
  $("#box").animate({height:"300px"});
});
```

2、在页面随机添加100个小球，随机位置、随机颜色、随机大小

要求：原型链继承构造小球的函数
     经典继承继承小球的位置、颜色、大小

3、点击按钮实现文字改变大、颜色
要求：原型链继承改变大小、颜色函数

     经典继承继承颜色和大小
