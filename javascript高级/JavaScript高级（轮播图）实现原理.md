# 轮播图实现原理

## HTML 布局
轮播图实现：fadeIn  fadeOut  margin-left

### 渐入渐出
position: absolute

第一张显示  其余的隐藏

### 左右滑动
float:left

优先级：行内 > id > class > 标签 > 全局（`*`）

## JavaScript
### 渐入渐出
index 一定要定义为全局变量，并且只定义一次
```JavaScript
var index = 0;
var index = $("ol li").index($(".active"));
```
先处理点击小圆点轮播
```JavaScript
$("ol li").click(function(){
  $(this).addClass("active").siblings().removeClass('active');

  //通过 active 小圆点确定当前想要到那张图片
  index = $(this).index();

  //操作当前图片渐入  其余图片渐出  
  $(".class li//div//img").eq(index).fadeIn(500),siblings().fadeOut(500);  
})

//定义函数
// 假如图片数量是 n
function autoPlay(){
  var identify = setInterval(function(){
    index ++;
    if(index > n-1){
      index = 0
    }

    $("ol li").eq(index).addClass("active").siblings().removeClass("active");
    $(".class li//div//img").eq(index).fadeIn(500),siblings().fadeOut(500);
  }, 1000)
  return identify;
}

var id = autoPlay();

$(".class li//div//img").hover(function(){
  clearInterval(id);
},
function(){
  id = autoPlay()
})

$(".next").click(function(){
  index++;
  if(index > n-1){
    index = 0;
  }
  $("ol li").eq(index).addClass("active").siblings().removeClass("active");
  $(".class li//div//img").eq(index).fadeIn(500),siblings().fadeOut(500);
});


$(".last").click(function(){
  index --;
  if(index < 0){
    index = n-1;
  }
  $("ol li").eq(index).addClass("active").siblings().removeClass("active");
  $(".class li//div//img").eq(index).fadeIn(500),siblings().fadeOut(500);
});

```

### 左右滑动
index 一定要定义为全局变量，并且只定义一次
```JavaScript
var index = 0;
var index = $("ol li").index($(".active"));
```

先做点击滑动
```JavaScript
$("ol li").click(function(){
  index = $(this).index();
  $(this).addClass("active").siblings().removeClass('active');

  //左右滑动
  $(".class装图片width最大的盒子").css({marginLeft:-index*图片宽度width+'px'})
});


function autoPlay(){
  var identify = setInterval(function(){
    index++;
    if(index > n-1){
      index = 0;
    }

    $("ol li").eq(index).addClass("active").siblings().removeClass('active');
    //左右滑动
    $(".class装图片width最大的盒子").css({marginLeft:-index*图片宽度width+'px'})
    // $("ol li").eq(index).trgger('click');
  },1000)
}

var id = autoPlay();
```


一定永远去想着操作index
