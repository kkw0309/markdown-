# CSS浮动和定位

## 什么是标准文档流
所有的元素按照块级元素、行内元素的方式排列
## 什么是浮动和浮动的方式
float： 把所设置浮动元素从标准文档流里面拿出来；

#### float概念
#### float的方式
float: 把当前元素从标准文档流拿出来；后面的元素依次顶上去；


1
2
3
4
5
6


#### 浮动的特性
1、 浮动元素会脱离正常的文档流，按照其外边距指定的位置相对于它的上一个块级元素（或父元素）显示；
2、 浮动元素后面的块级元素的内容会向此浮动元素的外边距靠齐，但是边框和背景却忽略浮动元素而向上一个（实例中为父元素）任意非浮动元素靠齐；

## 为什么要清除浮动      
恢复标准文档流

#### 清除浮动的方法
#### clear
clear both


clear left


#### 父元素加高度

#### overflow:hidden


#### after伪类清浮动
```css

body,div{
            margin:0;
            padding:0;
        }
        .box::after{
            content: '';
            display: block;
            clear:both;
        }
        .item{
            float:left;
            width:100px;
            height: 100px;
            background-color: deeppink;
        }
```
#### overflow属性

## 定位的概念
## 定位的种类
## 相对定位
## 绝对定位
## 固定定位
## z-index属性  
