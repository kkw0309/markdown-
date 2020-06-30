# canvas和Echarts

## canvas的基础知识
canvas本身并不具备绘画能力，它本身只是一个画布，是一个容器。绘图能力是基于html5的getContext("2d")返回的CanvasRenderingContext2D对象来完成的。
canvas是一个二维网络，以画布左上角（0,0）为坐标原点，x轴向右延伸，y轴向下延伸。所以canvas画布中的坐标全为正数，没有负数。

```javascript
const canvas = document.getElementById("payAbilityLoginTree");//获取canvas dom对象
const ctx = canvas.getContext('2d');    //获取绘图对象
```

```HTML
<canvas id="payAbilityLoginTree" width="1000" height="800"></canvas>
```

>需注意，必须指定canvas画布的大小，canvas本身是受自身的width、height属性来决定是否重绘的，而不是style属性的宽高，只是默认情况下，canvas的宽高跟style属性的宽高一致。

## 掌握Canvas元素绘制各种基本图形
#### 常用方法
* strokeRect(x,y,width,height):绘制无填充矩形

* arc(x,y,r,sAngle,eAngle,counterclockwise):绘制圆

* fillStyle=color|gradient|pattern:填充绘画的颜色、渐变或模式

* moveTo(x,y):把路径移动到画布中的指定点，不创建线条

* lineTo(x,y):添加一个新点

* stroke():绘制已定义的路径，即线条绘制

* fill():填充当前绘图（主要是颜色填充）

* drawImage(img,x,y,width,height):绘制图像

* scale(scalewidth,scaleheight):缩放当前绘图

* save():保存当前环境的状态。
该方法的使用是将之前绘图的属性进行缓存，使之后的绘图能够独立出来

* restore():返回之前保存过的路径状态和属性。
即是消除save()的影响，让绘图回到原先的状态。

* beginPath(): 开始一条新的路径，该方法将消除方法调用前的绘图影响。
通常我们在一个新的绘图前都会使用该方法，目的是杜绝之后的stroke或fill填充当前图形。

* closePath():创建当前点到开始点的路径，即闭合路径，常用在三角形的第3边绘制。

* isPointInPath(x,y):判断指定的点是否在当前路径上。

* clearRect(x,y,width,height)：清除画布指定区域的绘图。该方法很重要，在canvas中只有该方法可以清除绘图，在重绘时常常用到。



####  绘制矩形  
```javascript
var ctx = canvas.getContext('2d');

//绘制矩形ctx.rect(x,y,w,h);
//前两个参数表示矩形左上角的点的x,y坐标，w,h表示矩形的宽高。
ctx.rect(100,50,100,100);
ctx.stroke();

//描边矩形
ctx.strokeRect(100,200,200,100);

//填充矩形,默认填充黑色
ctx.fillRect(100,350,300,200);       


```

#### 绘制实心圆、空心圆
```javascript
var context=c.getContext("2d");
context.fillStyle="#00FFFF";
context.beginPath();
context.arc(70,70,60,Math.PI*2,0,true);
context.closePath();
context.fill();
context.translate(140,10);
context.strokeStyle="#00ff11";
context.beginPath();
context.arc(70,70,60,Math.PI*2,0,true);
context.stroke();			
```

![](https://img-blog.csdnimg.cn/20181214162348904.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NzbTE3ODA1OTg3OTAz,size_16,color_FFFFFF,t_70)
方法：
* 在绘制圆形的时候会用到beginpath()、arc()、closethpath()、fill()这四个方法。

* context.arc(x,y,radious,startAngle,endAngle,anticlockwise);

* arc本意为用于绘制弧线，当采用适当的参数后，即可绘制圆形。参数中的x,y为起点坐标

* radious为半径

* startAngle为起始角度

* endAngle为结束的角度

* anticlockwise为是否按顺时钟方向进行绘制


#### 绘制线段
```javascript
context.lineWidth = 10;
context.strokeStyle = '#444';
      
context.beginPath();
context.moveTo(20, 20);
context.lineTo(220,20);     
context.stroke();
```


#### 绘制文字
```javascript
var canvas = document.querySelector('#cavsElem');
var ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;
canvas.style.border = "1px solid #000";

// =S 绘制坐标参照系
ctx.beginPath();
ctx.moveTo(0,301);
ctx.lineTo(900,301);
ctx.strokeStyle = "teal";			
ctx.stroke();		

ctx.moveTo(450,0);
ctx.lineTo(450,600);
ctx.stroke();

ctx.fillRect(445,295,10,10);
// =E 绘制坐标参照系

//绘制字体
ctx.font = '20px "微软雅黑"';
ctx.fillStyle = "red";
ctx.textBaseline = "top";
ctx.fillText("Top-g", 100, 300);

ctx.textBaseline = "middle";
ctx.fillText("middle-g", 200, 300);

ctx.textBaseline = "bottom";
ctx.fillText("bottom-g", 490, 300);

ctx.textBaseline = "Alphabetic";
ctx.fillText("Alphabetic-g", 700, 300);


//绘制字体 设置对齐方式
ctx.fillStyle = "purple";
ctx.textAlign = "left";
ctx.strokeText("left", 450, 400);

ctx.textAlign = "right";
ctx.strokeText("right", 450, 440);

ctx.textAlign = "start";
ctx.strokeText("start", 450, 480);

ctx.textAlign = "end";
ctx.strokeText("end", 450, 520);

ctx.textAlign = "center";
ctx.strokeText("center", 450, 560);

```

* font = value
设置文本的尺寸，默认字体是 10px sans-serif。

* textAlign = value
文本对气项，可选的值包括： start end left  right center 默认值为 start。

* textBaseline value
基线对齐选项。可选的值包括：top hanging middle alphabetic ideographic bottom 默认值为 alphabetic

* direction = value
文本方向，可用值： ltr  rtl  inherit 默认值是 inherit。

#### 绘制图像
* 获得一个指向HTMLImageElement的对象或者另一个canvas元素的引用作为源,也可以通过提供一个URL的方式来使用图片
* 使用drawImage()函数将图片绘制到画布上


把一幅图像放置到画布上
```javascript
drawImage(image,x,y)
// image 是 image 或者 canvas 对象，x 和 y 是 canvas 里的起始坐标。
```

缩放 Scaling
drawImage 方法的第二种形态是增加了两个用于控制图像在 canvas 中缩放的参数。

```javascript
drawImage(image, x, y, width, height)
// 这个方法多了2个参数：width 和 height，这两个参数用来控制 当向canvas画入时应该缩放的大小
```

切片 Slicing
```javascript
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
// 第一个参数和其它的是相同的，都是一个图像或者另一个 canvas 的引用。
// 前4个是定义图像源的切片位置和大小，后4个则是定义切片的目标显示位置和大小。
```

```javascript
var canvas=document.getElementById("cava1");
var ctx=canvas.getContext("2d");  
//切片
var img = document.getElementById("demo");
img.onload = function () {
   ctx.drawImage(img, 33, 71, 104, 124, 21, 20, 87, 104);
}        
```

#### 动画
```javascript
var canvas = document.getElementById("mycanvas");

    var ctx = canvas.getContext("2d");
    var index = 0;


    function draw() {
        index++;
        if (index > 360) {
            index = 0;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(250, 250, 200, Math.PI / 180 *270,  Math.PI / 180  * (index+270));
        ctx.strokeStyle = "green";
        ctx.lineWidth=100;
        ctx.stroke();
    }

    setInterval(function () {
        draw();
    }, 10000/360);

```

## 能够调用接口的数据绘制数据展示图形

#### Echarts.js介绍 ** 5’
#### 使用Echarts.js绘制柱形图 ** 30’
#### 使用Echarts.js绘制折线图  ** 30’

#### 使用Echarts.js绘制饼形图  **  25’
