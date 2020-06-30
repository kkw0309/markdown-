# CSS 第一天

## 目标
* CSS 语法和简介
* id 和 class 选择器
* CSS 在HTML中引入方式
* CSS 文字、文本属性与背景、列表属性、表格


## CSS 简介
#### 什么是 CSS
* CSS 指层叠样式表 (Cascading Style Sheets)
* 样式定义如何显示 HTML 元素
* 样式通常存储在样式表中
* 把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
* 外部样式表可以极大提高工作效率
* 外部样式表通常存储在 CSS 文件中
* 多个样式定义可层叠为一
* 样式对网页中元素位置的排版进行像素级精确控制

```HTML
<html>
    <head>
        <style>
            body {background-color:yellow;}
            h1   {font-size:36pt;}
            h2   {color:blue;}
            p    {margin-left:50px;}
        </style>
    </head>

    <body>

        <h1>This header is 36 pt</h1>
        <h2>This header is blue</h2>

        <p>This paragraph has a left margin of 50 pixels</p>

    </body>
</html>
```
#### CSS 样式
CSS 样式表定义如何显示 HTML 元素，通常保存在外部的 .css 文件中。CSS样式表极大的提高了工作效率，通过仅仅编辑一个简单的 CSS 文档，外部样式表使你有能力同时改变站点中所有页面的布局和外观。

##### 多页面应用同一个样式
通常保存在外部的独立的.css文件（该文件不属于任何页面文件）可以在多个页面中使用同一个CSS样式表。通过在任何的页面文件中引用.css文件，你可以设置具有一致风格的多个页面。

##### 样式层叠
样式层叠就是对一个元素多次设置同一个样式，这将使用最后一次设置的属性值。

###### 样式层叠次序
一般而言，所有的样式会根据下面的规则层叠于一个新的虚拟样式表中，其中数字 4 拥有最高的优先权。
* 浏览器缺省设置
* 外部样式表
* 内部样式表（位于 <head> 标签内部）
* 内联样式（在 HTML 元素内部）

因此，内联样式（在 HTML 元素内部）拥有最高的优先权，这意味着它将优先于以下的样式声明：<head> 标签中的样式声明，外部样式表中的样式声明，或者浏览器中的样式声明（缺省值）。

## CSS 语法和选择器
CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明:选择器通常是您需要改变样式的 HTML 元素。每条声明由一个属性和一个值组成。属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。
```
h1 {color:blue; font-size:16px;}
//selector  property: value

```
CSS声明总是以分号(;)结束，声明组以大括号({})括起来:
```HTML
selector {property: value; property: value;property: value;}
```
为了 CSS 可读性更强，可以每一行只描述一个属性：
```
selector
{
    property: value;
    property: value;
}
```
### CSS 选择器
##### id选择器
id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。HTML元素以id属性来设置id选择器,CSS 中 id 选择器以 "#" 来定义。以下的样式规则应用于元素属性 id="part":
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS id选择器</title>
        <style>
            #para1
            {
	               text-align:center;
	                  color:red;
            }
        </style>
    </head>

    <body>
        <p id="para1">Hello World!!!</p>
        <p>This paragraph is not affected by the style.</p>
    </body>
</html>
```
* D属性不要以数字开头，数字开头的ID在 Mozilla/Firefox 浏览器中不起作用。
* ID属性只能在每个 HTML 文档中出现一次。

##### class选择器
class 选择器用于描述一组元素的样式，class 选择器有别于id选择器，class可以在多个元素中使用。class 选择器在HTML中以class属性表示, 在 CSS 中，类选择器以一个点"."号显示：

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS class选择器</title>
        <style>
        .center
        {
	           text-align:center;
        }
    </style>
    </head>

    <body>
        <h1 class="center">标题居中</h1>
        <p class="center">段落居中。</p>
    </body>
</html>
```
你也可以指定特定的HTML元素使用class。在以下实例中, 所有的 p 元素使用 class="center" 让该元素的文本居中:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>特定元素的 class</title>
        <style>
        p.center
        {
	               text-align:center;
        }
        </style>
    </head>

    <body>
        <h1 class="center">This heading will not be affected</h1>
        <p class="center">This paragraph will be center-aligned.</p>
    </body>
</html>
```
* 类名的第一个字符不能使用数字！它无法在 Mozilla 或 Firefox 中起作用。

##### `<style>`标签
HTML5 `<style>`标签用于表示文档所使用的样式

## 创建 CSS
当读到一个样式表时，浏览器会根据它来格式化 HTML 文档：
插入样式表的方法有三种:
* 外部样式表
* 内部样式表
* 内联样式

#### 内部样式表
当单个文档需要特殊的样式时，就应该使用内部样式表。你可以使用` <style>` 标签在文档头部定义内部样式表：
```HTML
<head>
<style>
hr
{
    color:sienna;
}
p
{
    margin-left:20px;
}
body
{
    background-image:url("images/back40.gif");
}
</style>
</head>
```


#### 外部样式表
当样式需要应用于很多页面时，外部样式表将是理想的选择。在使用外部样式表的情况下，你可以通过改变一个文件来改变整个站点的外观。每个页面使用 标签链接到样式表。 标签在（文档的）头部
`<head> <link rel="stylesheet" type="text/css" href="https://xxxxxx/css/mystyle.css"> </head>`浏览器会从文件 mystyle.css 中读到样式声明，并根据它来格式文档。外部样式表可以在任何文本编辑器中进行编辑。文件不能包含任何的 html 标签。样式表应该以 .css 扩展名进行保存:
```CSS
hr
{
    color:sienna;
}           
p
{
    margin-left:20px;
}            
body
{
    background-image:url(/images/back40.gif);
}
```


#### 内联样式
由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。请慎用这种方法，例如当样式仅需要在一个元素上应用一次时。要使用内联样式，你需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性：
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>内联样式</title>
    </head>

    <body>
        <h1>This heading will not be affected</h1>
        <p style="color:sienna;margin-left:20px">这是一个段落。</p>
    </body>
</html>
```
## CSS 背景Backgrounds
CSS 背景属性用于定义HTML元素的背景。CSS 属性定义背景效果：
* background-color
* background-image
* background-repeat
* background-attachment
* background-position

#### 背景颜色
background-color 属性定义了元素的背景颜色。页面的背景颜色使用在body的选择器中:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS 背景颜色</title>
        <style>
        body
        {
	           background-color:#b0c4de;
        }
        </style>
    </head>
    <body>

        <h1>我的 CSS web 页!</h1>
        <p>你好世界！这是来自积云教育的全栈课程示例。</p>

    </body>
</html>
```
###### CSS 色值
CSS中，颜色值通常以以下方式定义:
十六进制 - 如："#ff0000"
RGB - 如："rgb(255,0,0)"
颜色名称 - 如："red"
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS 背景颜色</title>
        <style>
        h1
        {
	           background-color:#6495ed;
        }
        p
        {
	           background-color:#e0ffff;
        }
        div
        {
	           background-color:#b0c4de;
        }
        </style>
    </head>

    <body>

        <h1>CSS background-color 实例!</h1>
        <div>
            改文本插入在 div 元素中。
            <p>该段落有自己的背景颜色。</p>
            我们仍然在同一个 div 中。
        </div>

    </body>
</html>
```
#### 背景图像
background-image 属性描述了元素的背景图像.默认情况下，背景图像进行平铺重复显示，以覆盖整个元素实体：
```HTML

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>W3Cschool教程(w3cschool.cn)</title>
        <style>
        body
        {
            background-image:url('https://7n.w3cschool.cn/attachments/knowledge/201611/31824.png');
            background-color:#cccccc;
        }
        </style>
    </head>
​
    <body>
        <h1>Hello World!</h1>
    </body>
</html>
```
## CSS 文本
CSS的Text属性，你可以改变页面中文本的颜色、字符间距、对齐文本、装饰文本、对文本进行缩进等等。

#### Text Color
颜色属性被用来设置文字的颜色。颜色是通过CSS最经常的指定：
* 十六进制值 - 如"＃FF0000"
* 一个RGB值 - "RGB（255,0,0）"
* 颜色的名称 - 如"red"
示例：
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>W3Cschool教程(w3cschool.cn)</title>
        <style>
        body {color:red;}
        h1 {color:#00ff00;}
        p.ex {color:rgb(0,0,255);}
    </style>
    </head>
​
    <body>
        <h1>This is heading 1</h1>
        <p>This is an ordinary paragraph. Notice that this text is red. The default text-color for a page is defined in the body selector.</p>
        <p class="ex">This is a paragraph with class="ex". This text is blue.</p>
    </body>
</html>
```
#### 文本的对齐方式
文本排列属性是用来设置文本的水平对齐方式。文本可居中或对齐到左或右,两端对齐.当text-align设置为"justify"，每一行被展开为宽度相等，左，右外边距是对齐（如杂志和报纸）:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>W3Cschool教程(w3cschool.cn)</title>
        <style>
        h1{text-align:center}
        p.date{text-align:right}
        p.main{text-align:justify}
    </style>
    </head>
​
    <body>
        <h1>CSS text-align 实例</h1>
        <p class="date">2015 年 3 月 14 号</p>
        <p class="main">“当我年轻的时候，我梦想改变这个世界;当我成熟以后，我发现我不能够改变这个世界，我将目光缩短了些，决定只改变我的国家;当我进入暮年以后，我发现我不能够改变我们的国家，我的最后愿望仅仅是改变一下我的家庭，但是，这也不可能。当我现在躺在床上，行将就木时，我突然意识到：如果一开始我仅仅去改变我自己，然后，我可能改变我的家庭;在家人的帮助和鼓励下，我可能为国家做一些事情;然后，谁知道呢?我甚至可能改变这个世界。”</p>
        <p><b>注意：</b> 重置浏览器窗口大小查看 "justify" 是如何工作的。</p>
    </body>
​
</html>
```
#### 文本修饰
text-decoration 属性用来设置或删除文本的装饰。从设计的角度看 text-decoration属性主要是用来删除链接的下划线：
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>W3Cschool教程(w3cschool.cn)</title>
        <style>
        </*a {text-decoration:none;} */>
        a {text-decoration:overline;}
        </style>
    </head>
​
    <body>
        <p>Link to: <a href="http://www.w3cschool.cn">w3cschool.cn</a></p>
    </body>
​
</html>
```
#### 文本转换
文本转换属性是用来指定在一个文本中的大写和小写字母。可用于所有字句变成大写或小写字母，或每个单词的首字母大写：

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>W3Cschool教程(w3cschool.cn)</title>
        <style>
        p.uppercase {text-transform:uppercase;}
        p.lowercase {text-transform:lowercase;}
        p.capitalize {text-transform:capitalize;}
        </style>    
    </head>

    <body>
        <p class="uppercase">This is some text.</p>
        <p class="lowercase">This is some text.</p>
        <p class="capitalize">This is some text.</p>
    </body>
</html>
```
#### 文本缩进
文本缩进属性是用来指定文本的第一行的缩进。CSS 提供了 text-indent 属性，该属性可以方便地实现文本缩进。通过使用 text-indent 属性，所有元素的第一行都可以缩进一个给定的长度:
```HTML

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>W3Cschool教程(w3cschool.cn)</title>
        <style>
        p {text-indent:50px;}
    </style>
    </head>
    <body>
​
    <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>
​
    </body>
</html>
```
## CSS 链接
链接的样式，可以用任何CSS属性（如颜色，字体，背景等）。特别的链接，可以有不同的样式，这取决于他们是什么状态。这四个链接状态是：
* a:link - 正常，未访问过的链接
* a:visited - 用户已访问过的链接
* a:hover - 当用户鼠标放在链接上时
* a:active - 链接被点击的那一刻

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>W3Cschool教程(w3cschool.cn)</title>
        <style>
        a:link {color:red;}    /* unvisited link */
        a:visited {color:blue;} /* visited link */
        a:hover {color:yellow;}   /* mouse over link */
        a:active {color:cyan;}  /* selected link */
        </style>
    </head>

    <body>
        <p><b><a href="/css/" target="_blank">这是一个链接</a></b></p>
        <p><b>注意：</b> a:hover 必须在 a:link 和 a:visited 之后，需要严格按顺序才能看到效果。</p>
        <p><b>注意：</b> a:active 必须在 a:hover 之后。</p>
    </body>
</html>
```

## CSS 列表
CSS列表属性作用如下：
* 设置不同的列表项标记为有序列表
* 设置不同的列表项标记为无序列表
* 设置列表项标记为图像

在HTML中，有两种类型的HTML列表：
无序列表 - 列表项标记用特殊图形（如小黑点、小方框等）
有序列表 - 列表项的标记有数字或字母
使用CSS，可以列出进一步的样式，并可用图像作列表项标记。

```HTML
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>W3Cschool教程(w3cschool.cn)</title>
<style>
ul.a {list-style-type:circle;}
ul.b {list-style-type:square;}
ol.c {list-style-type:upper-roman;}
ol.d {list-style-type:lower-alpha;}
</style>
</head>

<body>
<p>无序列表实例:</p>

<ul class="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

<ul class="b">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

<p>有序列表实例:</p>

<ol class="c">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

<ol class="d">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

</body>
</html>
```
