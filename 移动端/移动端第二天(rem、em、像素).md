# 移动端第二天

## 目标
* 掌握像素、分辨率、rem、em
* 使用 rem 、em布局


## 像素的概念

### 物理像素（设备像素）
物理像素也可以叫做设备像素，一个物理像素是显示器屏幕上最小的物理显示单元；显示器物理尺寸跟显示器物理物理像素没有关系，同样物理尺寸的显示器，retina屏的物理像素一般大些。这里的大是指同样实际尺寸屏幕，retina屏的物理像素点要多。
一个物理像素是显示器(手机屏幕)上最小的物理显示单元，在操作系统的调度下，每一个设备像素都有自己的颜色值和亮度值。


### 逻辑像素（设备独立像素）
逻辑像素也可以叫做设备独立像素。逻辑像素通常是指程序使用的虚拟像素(比如: css像素)。
物理像素和逻辑像素之间存在着一定的对应关系，这个关系叫做设备像素比。
设备独立像素也叫设备密度无关像素，可以认为是计算机坐标系统中得一个点，这个点代表一个可以由程序使用的虚拟像素(比如: css像素)，然后由相关系统转换为物理像素。

高密度分辨率屏幕(高清屏)所带来的适配问题,iOS与Android两个平台分别提出了pt（point）与dp(device-independent pixel)两个单位。他们的名称不一样，但是内涵是一样的。下面我们以iPhone为例
例如将4/4s的逻辑像素设定为320x480pt（实际像素:640x960px）,以物理屏幕左上角为原点,横向X轴320pt,纵向Y轴480pt。所以PPI越高，1pt的所覆盖的物理像素就越多。

### 设备像素比（DPR）
设备像素比(dpr) 是指在移动开发中1个逻辑像素占用多少物理像素。比如2代表1个css像素用2x2个设备像素来绘制。
即物理像素与设备独立像素之间的关系

```javascript
/* 公式
设备像素比 = 物理像素 / 设备独立像素
浏览器获取设备像素比 */
window.devicePixelRatio
```

### CSS像素
CSS像素是web编程的概念,是相对的而不是绝对的单位，因为平常电脑屏幕1px对应了1px物理像素，所以感觉不到两者的区别，会让你误以为CSS里的1px就是实际屏幕像素,事实上只有zoom 100%的情况下,1个CSS像素才会等于1个设备像素


## 网页中的像素单位
### ppi:
pixel per inch，每英寸像素数，该值越高，则屏幕越细腻

### dpi:
dot per inch，每英寸多少点，该值越高，则图片越细腻

#### 像素（px）
根据显示器的分辨率来确定长度，在web应用中多采用该单位； px：pixel，像素，电子屏幕上组成一幅图画或照片的最基本单元

#### 点数（pt）
pt: point，点，印刷行业常用单位，等于1/72英寸

#### 英寸（in）、厘米（cm）和毫米（mm）
根据显示的实际尺寸来确定长度。此类单位不随显示器分辨率的改变而改变；


##### %
是以当前文本的百分比定义尺寸。如{font-size:200%}是指文字大小为原来的2倍；


### 换算方式
公式一： 1pt= (DPI / 72) px
当photoshop中新建画布的分辨率为72ppi( 即 72dpi时 )， 1pt=1px； 当新建画布分辨率为72*2=144ppi时，1pt=2px
dpi=ppi
ppi= 屏幕对角线上的像素点数/对角线长度 = √ （屏幕横向像素点^2 + 屏幕纵向像素点^2）/对角线长度


## 网页常见的像素宽度
网页设计中，宽度的设置，是没有绝对固定的值的，根据我们的需求出发。这里我做个详细的网页宽度设置科普。
网页的宽度主要分两种：

* 定宽：内容区域宽度固定
* 自适应：内容区域宽度跟随浏览器变化

#### 定宽
定宽是我们日常最常见的形式，主流的宽度有 960px / 980px / 1190px / 1210px 等

最简单的定宽长度设置： 宽度 = 支持最小宽度 - 左右留白


#### 自适应
响应式布局，尤其前几年 H5 崛起的时候，很多初级网页设计师都觉得，网页设计以后就应该支持全平台，那些老的定宽规格都应该被淘汰。但是，宽度自适应模式和响应式设计不是完全相等的。
响应式设计，是在多种平台下可以良好显示和运行的一种框架，在不同的宽度下回展现出不同的排版和样式。


## 设备常见的像素比例
window.devicePixelRatio是设备上物理像素和设备独立像素(device-independent pixels (dips))的比例。
公式表示就是：window.devicePixelRatio = 物理像素 / dips

#### devicePixelRatio
在iOS设备，screen.width乘以devicePixelRatio得到的是物理像素值。
在Android以及Windows Phone设备，screen.width除以devicePixelRatio得到的是设备独立像素(dips)值。


## 分辨率
分辨率又称显示分辨率或屏幕分辨率，它是指水平方向或垂直方向像素的数量。
通过window.screen.width * window.devicePixelRatio
window.screen.height * window.devicePixelRatio可以获取到分辨率。


[](https://upload-images.jianshu.io/upload_images/5756207-330fce567c7c4ecc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/500)


## Rem 单位
常识：浏览器的默认字体高都是16px

html font-size = 16px
1rem = 16px

1rem = 568/320*16  == 28.4

568/320*20
 <!-- 20 * document.documentElement.clientWidth /（640/2）= 当前页面根字体大小px。
 20 * document.documentElement.clientWidth /（750/2）= 当前页面根字体大小px。 -->
注：我一般简化为

 20 * document.documentElement.clientWidth / 320 = 当前页面根字体大小px。

 20 * document.documentElement.clientWidth / 375 = 当前页面根字体大小px。
2.3.3. 如何动态设置rem

需求1:
设计稿 320*640设计  element 40px*40px
320屏幕： 1rem = 320/320*40  1rem = 40px

568*750
568/320*40
1rem = 568/320*40



显示换算
各单位与像素的换算关系
html font-size :16px
1rem = 16  320

568 16

320*640   按钮大小 40px*40px

568*750

1、rem是根据html标签的字体大小来确定
html font-size:40px
html font-size:600/300*40


css{
  width: 1rem
}
