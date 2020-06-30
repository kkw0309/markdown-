# 盒模型的概念
### 什么是盒模型  



### 盒模型组成及属性

### 内容部分（content）
### 边框border
### 内边距padding
### 外边距 margin

### 盒模型的分类和区别
##### W3C标准盒子模型
##### 怪异盒子模型（IE盒子模型）

内容大小：300px 310*310
padding-top：10px
padding-left：10px

box-sizing
width：300px；！important
width：310px；

#### 标准盒模型和IE盒模型




### 块元素和行内元素
### 定义和区别
块元素：单独占满一行，可以设置宽高和margin所有属性
行内元素：不独占一行，不能设置宽高，宽高来源于它本身内容宽高，margin属性支持：
left/right。

### 块和行内元素之间的转换
转换方式：
float：left/right
难点在于清除浮动：clear：both；overflow：hidden; 设置块级元素元素的宽度也可以达到清除浮动的效果
display:inline-block

### display属性
display:inline-block //把所有元素转变成行内块级元素
display:none
隐藏元素，它所占为区域位置都要清除
overflow：hidden
子元素超出父级元素的显示范围，隐藏超出部分；

### 盒子在标准流中定位原则  
1、
块级元素：是可以设置宽度和高度，margin 属性全部支持
行内元素：不能设置宽度和高度，margin只支持左和右

2、可改变块元素变成行内元素，影响标准的文档流。
float
display:none
恢复标准文档流：clear：both  dispaly：none




## 选择器分类

1、* 通配符选择器 （全局选择器）
这个选择器是匹配页面中所有的元素，一般用来清除浏览器的默认样式.
*
{
    margin:0;
    padding: 0;
}
全局CSS文件：
*
{
    margin:0;
    padding: 0;
}
h1-h6
font-family


2、元素选择器 (标签选择器)
通过标签名来选择元素。
p
{

}
h1- h6
一经设定，全部页面用到此标签都会用到这个样式；

3、class选择器
header
{
    topBar:{
        header_topBar
        header_topBar_xxx
        menu, info,nav,logo
    }
    header_container{
        logo
        search
        nav
    }
}
article
{
    article_xxx
    contanier
    wrap
}
footer
{

}


<div id:"div_font dic_box div_img"></div>

.div_font
{

}

.dic_box
{

}
.div_img img
{

}
class选择器 / 类选择器 / 用class属性给元素命名，在页面中可以出现很多次，相当于人的名字。
4、 id选择器
以id属性来命名，在页面中只能出现一次，具有唯一性，并且权重值最高，相当于一个人的身份证。
#id名称
{

}

<div id:"id"></div>



高级选择器
1、 Eelement F  后代选择器
匹配到E元素下面的所有的F元素（包括子、孙），空格隔开。

div p
{
 div{
     p
 }
}

2、 E,F  多元素选择器(群组选择器)
同时匹配到E元素和F元素，用逗号隔开。
div,p,h1,ul
{

}

3、E>F 子元素选择器（父子选择器）
选择到E元素的直接子代F，只选择子代。
div>p
{

}


4、E+F（毗邻选择器） 相邻兄弟选择器
紧接在E元素后面的同级元素F，相邻兄弟选择器，有相同的父级。
div+div
{

}

只能设置+后面标签CSS样式


属性选择器
E[attr] 匹配具有attr属性的E元素

div[width]
{
    width:100px
}　　

div
before
after
div

a:visited
