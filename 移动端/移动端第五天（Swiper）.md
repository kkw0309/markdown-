# 移动端第四天 Swiper

## 目标
* 掌握Swiper插件的使用

* 官方API
https://www.swiper.com.cn/api/autoplay/

## 引入 Swiper

#### 下载链接
https://www.swiper.com.cn/download/index.html#file1
首先加载插件，需要用到的文件有swiper.min.js和swiper.min.css文件

```HTML
<!DOCTYPE html>
<html>
<head>
    ...
    <link rel="stylesheet" href="dist/css/swiper.min.css">
</head>
<body>
    ...
    <script src="dist/js/swiper.min.js"></script>
    ...
</body>
</html>
```

#### HomeBower 安装
```cmder
$ bower install swiper
```

#### 通过NPM获取Swiper
```cmder
$ npm install swiper
```

#### Swiper CDN

如果你不想将Swiper文件放在你的项目中，你可以使用Swiper的CDN服务。
以下是各版本的Swiper CDN地址，要将4.x.x改成相应的版本，如4.0.2(或3.x.x版本)。
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.x.x/css/swiper.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.x.x/css/swiper.min.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.x.x/js/swiper.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.x.x/js/swiper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.x.x/js/swiper.esm.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.x.x/js/swiper.esm.bundle.js"></script>
```

## Swiper演示地址：

http://www.swiper.com.cn/demo/index.html


## Swiper使用

#### HTML 构建Swiper元素

```HTML
<!-- 注意这里class的名称 swiper-container-->
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
```

上面涉及到的`class`名称都必须一致

#### CSS改变 Swiper 的样式
```CSS
.swiper-container
{
  width: 400px;
  height: 300px
}

.swiper-slide
{
  background-color: red
}

```

#### 初始化Swiper

```javascript
<script>        
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        
</script>
```



初始化 Swiper 的格式和参数

```javascript
var swiper = new Swiper('.swiper-container',{});

```

* 参数1: 获取Swiper盒子 字符串类型
* 参数2: 对象类型 定制Swiper的各种属性和属性值


## Swiper中的定制参数

#### initialSlide
* 类型：number
* 默认：0

控制Swiper当前活跃的或者是显示的 slide


#### direction 滚动方向

* 类型：string
* 默认：horizontal
Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。

#### speed 滚动速度
* 类型：number
* 默认：300
切换速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间

#### autoplay 自动播放
* 类型：object/boolean
* 默认：false
设置为true启动自动切换，并使用默认的切换设置。

```javascript
<script>
var mySwiper = new Swiper('.swiper-container', {
  // autoplay:true,//等同于以下设置
  /*autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },*/
});
</script>
```

###### delay
自动切换的时间间隔，单位ms
你还可以在某个slide上设置单独的停留时间，例:
```HTML
<div class="swiper-slide" data-swiper-autoplay="2000">

```
* 类型：number
* 默认：3000

###### stopOnLastSlide
如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
* 类型：boolean
* 默认：false


###### disableOnInteraction
用户操作swiper之后，是否禁止autoplay。默认为true：停止
如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
操作包括触碰，拖动，点击pagination等。
* 类型：boolean
* 默认：true

###### mySwiper.autoplay.running
如果Swiper开启了autoplay，这个值为true。


###### mySwiper.autoplay.start()
开始自动切换。一般用来做“Play”按钮。

###### mySwiper.autoplay.stop()
停止自动切换。一般用来制作“pause”按钮。



#### Loop 循环滚动播放

#### 切换效果   

###### effect
slide的切换效果，默认为"slide"（位移切换），可设置为'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
* 类型：string
*

```javascript
<script language="javascript">
var mySwiper = new Swiper('#swiper-container1',{
effect : 'fade',
})
var mySwiper2 = new Swiper('#swiper-container2',{
effect : 'cube',
})
var mySwiper3 = new Swiper('#swiper-container3',{
effect : 'coverflow',
slidesPerView: 3,
centeredSlides: true,
})
var mySwiper4 = new Swiper('#swiper-container4',{
effect : 'flip',
})
</script>
```

###### Fadeeffect
fade效果参数。可选参数：crossFade。
默认：false。关闭淡出。过渡时，原slide透明度为1（不淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。
可选值：true。开启淡出。过渡时，原slide透明度从1->0（淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。

```javascript
<script language="javascript">
var mySwiper = new Swiper('.swiper-container',{
  effect : 'fade',
  fadeEffect: {
    crossFade: true,
  }
})
</script>
```

###### Cubeeffect
cube效果参数，可选值：
* slideShadows：开启slide阴影。默认 true。
* shadow： 开启投影。默认 true。
* shadowOffset：投影距离。默认 20，单位px。
* shadowScale： 投影缩放比例。默认0.94。

```javascript
<script language="javascript">
var mySwiper = new Swiper('.swiper-container',{
  effect : 'cube',
  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 100,
    shadowScale: 0.6
  },
})
</script>
```

###### coverflowEffect
coverflow效果参数，可选值：

* rotate：slide做3d旋转时Y轴的旋转角度。默认50。
* stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
* depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
* modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
* slideShadows：开启slide阴影。默认 true。


```javascript
<script language="javascript">
var mySwiper = new Swiper('.swiper-container',{
  effect : 'coverflow',
  slidesPerView: 3,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 30,
    stretch: 10,
    depth: 60,
    modifier: 2,
    slideShadows : true
  },
})
</script>
```

###### flipEffect
3d翻转有两个参数可设置。

* slideShadows：slides的阴影。默认true。
* limitRotation：限制最大旋转角度为180度，默认true。

## 分页器 pagination

#### bulletElement
设定分页器指示器（小点）的HTML标签。
* 类型：string
* 默认：span

```HTML
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <div class="swiper-pagination"></div>
</div>
<script language="javascript">
var mySwiper = new Swiper('.swiper-container',{
  pagination: {
    el: '.swiper-pagination',
    bulletElement : 'li',
  },
})
</script>
```

#### clickable
此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。



## 滚动条 scrollBar  

####  hide
滚动条是否自动隐藏。默认：false，不会自动隐藏。

```javascript
<script type="text/javascript">
var mySwiper = new Swiper('.swiper-container',{
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});  
</script>
```

#### draggable
该参数设置为true时允许拖动滚动条
* 类型：boolean
* 默认：false
