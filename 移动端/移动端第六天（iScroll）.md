# 移动端第六天 iScroll

## 目标
* 掌握 iScroll的使用


## iScroll
iScroll是一个高性能，资源占用少，无依赖，多平台的javascript滚动插件。它可以在桌面，移动设备和智能电视平台上工作。它一直在大力优化性能和文件大小以便在新旧设备上提供最顺畅的体验。
iScroll不仅仅是 滚动。它可以处理任何需要与用户进行移动交互的元素。在你的项目中包含仅仅4kb大小的iScroll，你的项目便拥有了滚动，缩放，平移，无限滚动，视差滚动，旋转功能。

优势：
* 细粒度控制滚动位置，甚至在滚动过程中。你总是可以获取和设置滚动器的x，y坐标。
* 动画可以使用用户自定义的擦出功能（反弹'bounce'，弹性'elastic'，回退'back'，...）。
* 你可以很容易的挂靠大量的自定义事件（onBeforeScrollStart, *
* 开箱即用的多平台支持。从很老的安卓设备到最新的iPhone，从Chrome浏览器到IE浏览器。

## iScroll的版本

针对iScroll的优化。为了达到更高的性能，iScroll分为了多个版本。你可以选择最适合你的版本。
目前我们有以下版本：

* iscroll.js，这个版本是常规应用的脚本。它包含大多数常用的功能，有很高的性能和很小的体积。
* iscroll-lite.js，精简版本。它不支持快速跳跃，滚动条，鼠标滚轮，快捷键绑定。但如果你所需要的是滚动(特别是在移动平台) iScroll 精简版 是又小又快的解决方案。
* iscroll-probe.js，探查当前滚动位置是一个要求很高的任务,这就是为什么我决定建立一个专门的版本。如果你需要知道滚动位置在任何给定的时间,这是iScroll给你的。（我正在做更多的测试,这可能最终在常规iscroll.js脚本，请留意）。
* iscroll-zoom.js，在标准滚动功能上增加缩放功能。
* iscroll-infinite.js，可以做无限缓存的滚动。处理很长的列表的元素为移动设备并非易事。 iScroll infinite版本使用缓存机制,允许你滚动一个潜在的无限数量的元素。


## iScroll 使用
IScroll是一个类，每个需要使用滚动功能的区域均要进行初始化。每个页面上的iScroll实例数目在设备的CPU和内存能承受的范围内是没有限制的。

```HTML
<script src="https://cdn.bootcss.com/iScroll/5.2.0/iscroll-infinite.js"></script>

```

#### HTML结构如下：
```HTML
<div id="wrapper">
    <ul>
        <li>...</li>
        <li>...</li>
        ...
    </ul>
</div>
```
iScroll作用于滚动区域的外层。在上面的代码中，UL元素能进行滚动。只有容器元素的第一个子元素能进行滚动，其他子元素完全被忽略。

#### JavaScript 代码如下：
```javascript
<script type="text/javascript">
var myScroll = new IScroll('#wrapper');

</script>
```
参数：
第一个参数可以是滚动容器元素的DOM选择器字符串，也可以是滚动容器元素的引用对象。

```javascript
var wrapper = document.getElementById('wrapper');
var myScroll = new IScroll(wrapper);
```

当DOM准备完成后iScroll需要被初始化。最保险的方式是在window的onload事件中启动它。

http://caibaojian.com/iscroll-5/keybindings.html

## iScroll 使用
#### 第一步
iScroll是让子容器滚动，所以子容器的宽度或者高度要远大于父容器的宽度或者高度

初始化：
```javascript
var scroll  = new IScroll(参数1，参数2)；

//参数1:选择器： “.class” “#id”

//参数2:对象类型： 配置iScroll各项属性

```

scrollTo(x, y, time, easing)
从开始位置开始滚动x或者y的距离，time：执行滚动动画的时间 easing:制定滚动动画样式
擦除动画的类型选项有：quadratic, circular, back, bounce, elastic。


scrollBy(x, y, time, easing)
从当前的位置开始滚动x或者y的距离


scrollToElement(el, time, offsetX, offsetY, easing)
滚动指定的元素， el：元素
time:执行滚动的时间
offsetX, offsetY：指定滚到的元素的偏移量，如果设置这两个属性为true的时候，滚动元素停留在屏幕的中间。
