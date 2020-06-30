# HTML 第二天

## 目标
* 熟练掌握标题标签、段落标签、列表标签等常用标签
* 掌握单标签和双标签
* 掌握块级元素和行内元素
* 掌握相对路径和绝对路径

## 常用标签
### <!DOCTYPE>
<!DOCTYPE>我们在之前了解 HTML 的时候接触过，这里做一个简单的回顾。 <!DOCTYPE>是 document type(文档类型)的简写， 是一个文档类型标记，是一种标准通用 标记语言的文档类型声明，在 web 设计中用来说明你用的 XHTML 或者 HTML 是什么版本。 <!DOCTYPE> 声明位于文档中的最前面的位置，处于<html> 标签之前。
<!DOCTYPE> 声明不是一个 HTML 标签;它是用来告知 Web 浏览器⻚面使用了哪种 HTML 版本。
在 HTML 4.01 中， <!DOCTYPE> 声明需引用 DTD (文档类型声明)，因为 HTML 4.01 是基于 SGML (Standard Generalized Markup Language 标准通用标记语言)。DTD 指定了标记语言的规则，确保了浏览器能够正确的渲染内容。HTML5 不是基于 SGML，因此不要求引用 DTD。


>提示: 给的 HTML 文档添加<!DOCTYPE> 声明，确保浏览器能够预先知道文档类型。 提示: <!DOCTYPE> 标签没有结束标签。

>提示: <!DOCTYPE> 声明不区分大小写。

>提示:使用 W3C 的验证 检查您是否编写了一个带有正确 DTD 的合法的 HTML / XHTML 文 档!

### 标题标签（h1-h6）
`<h1> - <h6>` 标签用来定义 HTML 标题，表示了 HTML 网⻚中六个级别的标题。
`<h1>`定义重要等级最高的标题。`<h6>` 定义重要等级最低的标题。标题标签是为了让网⻚文 档的结构更加清晰，让网⻚更具语义化。


这里解释下它与<title> 的区别，<title>定义的标题是整个网⻚的标题，只在浏览器顶部的tab 栏里显示，在网⻚中不显示，是写给搜索引擎看。而<hn>标签是网⻚中某篇文章或某段文字 的标题，是网⻚内容的一部分，在网⻚中会显示，是写给用户看的。

##### 放置的位置:
* `<title>`标签放在`<head>`标签内
* `<h1>...<h6>`标签放在`<body>`标签内

##### 标签与seo:

1. `<title>`标签分的 seo 权重非常大，因此一般主关键字都是放到`<title>`标签内优化的
2. `<h1>`标签分的seo权重次于`<title>`标签，一般⻓尾关键字用此标签，比如文章标题。
3. `<h2>...<h6>`标签分的seo权重依次更小。

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document1111</title>
    </head>
    <body>
        <h1>我是 1 号标题</h1>
        <h2>我是 2 号标题</h2>
        <h3>我是 3 号标题</h3>
        <h4>我是 4 号标题</h4>
        <h5>我是 5 号标题</h5>
        <h6>我是 6 号标题</h6>
    </body>
</html>
```
##### 说明
1. `<h1>`用作主标题，其后是`<h2>`，再其次是`<h3>`，以此类推。
2. `<h1>`标题标签只用于标题，不要为了显示而使用`<h1>`标题标签。
3. `<h1>`定义标题，方便搜索引擎使用标题为您的网⻚的结构和内容编制索引。
4. 用标题来呈现文档结构，用户可以通过标题来快速浏览您的网⻚。
5. `h1` 标签因为重要，尽量少用，不要动不动就向你扔了一个`h1`。 一般`h1` 都是给`logo`使
用，或者⻚面中最重要标题信息。


### 段落标签`<p></p>`
在网⻚中要把文字有条理地显示出来，离不开段落标签，就如同我们平常写文章一样，
整个网 ⻚也可以分为若干个段落，而段落的标签就是。
`<p>` 标签表示文本的段落，段落通常在可视媒体中表示为文本块，是块级元素。
`<p>` 元素会自动在其前后创建一些空白。浏览器会自动添加这些空间，您也可以在样式表中规定。

>注意:`<p>` 标签与`<br>`都有换行的意思，不同的是 `<p>` 标签是大换行(分段)，`<br>` 标签
是小换行。

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document1111</title>
    </head>
    <body>
        <p>我就是一个段落</p>
    </body>
</html>
```

### 文本标签
#### 加粗标签
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document1111</title>
    </head>
    <body>
        <p>这是一个普通的文本- <b>这是一个加粗文本</b>。</p>
    </body>
</html>
```

#### 斜体标签
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document1111</title>
    </head>
    <body>
        <p>这是一个普通的文本- <i>这是一个斜体文本</i>。</p>
    </body>
</html>
```

#### 删除线标签
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document1111</title>
    </head>
    <body>
        <p>
            这是一个普通的文本， <del>这是一个删除线文本</del>。
            <ins>这是一个插入文本</ins> 。
        </p>
    </body>
</html>
```

#### 下划线标签
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document1111</title>
    </head>
    <body>
        <p>
            这是一个普通的文本， <u>这是一个下划线文本</u>。
        </p>
    </body>
</html>
```

### 换行标签`</br>`
`<br>` 标签是空标签，可插入一个简单的换行符。</br>
`<br>` 标签插入一个简单的换行符。</br>
`<br>` 标签是一个空标签，意味着它没有结束标签。</br>
`<br>` 标签只是简单地开始新的一行，而当浏览器遇到`<p>`标签时，通常会在相邻的段落之间 插入一些垂直的间距。</br>

>提示:在写地址信息或者写诗词时 `<br>` 标签非常有用。

>提示: 请使用 `<br>` 标签来输入空行，而不是分割段落。

### 水平线标签`<hr>`
在网⻚中常常看到一些水平线将段落与段落之间隔开，使得文档结构清晰，层次分明。这些水 平线可以通过插入图片实现，也可以简单地通过标签来完成，
`<hr>` 标签表示段落级元素之间的主题划分，同样也是块级元素。
`<hr>`标签定义HT ML⻚面中的主题变化(比如话题的转移)，并显示为一条水平线，元素被用 来分隔HT ML⻚面中的内容(或者定义一个变化)。

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document1111</title>
    </head>
    <body>
        <p>这是一个普通的文本。</p>
        <hr>
        <p>这是另一个一个下划线文本</p>
    </body>
</html>
```

### 单标签和双标签
##### 单标签：
由一个标签组成，又叫自闭合标签。例如`<hr />`
```HTML
//常见的自闭合标签
<br />
<meta />
<img />
```
##### 双标签：
由`开始标签`和`结束标签`两部分构成，也就是非自闭合标签。例如`<p></p>`
`<p>`是开始标签，表示一个段落的开始。
`</p>`是结束标签，表示一个段落的结束。
```HTML
<html></html>
<head></head>
<title></title>
<body></body>
<h1></h1>
<h2></h2>
<h3></h3>
<p></p>
<pre></pre>
<div></div>
<span></span>
<a></a>
<ul></ul>
<ol></ol>
<dt></dt>
<dd></dd>
<code></code>
<mark></mark>
<iframe></iframe>
```

>非自闭合标签必须有开始标签和结束标签，而自闭合标签没有闭合标签。

### img 标签
在 HTML 中，图像由 `<img>` 标签定义。`<img>` 是空标签，意思是说，它只包含属性，并且没有闭合标签。要在页面上显示图像，你需要使用源属性`src`。`src` 指 `"source"`。源属性的值是图像的 URL 地址。

定义图像的语法是：
```HTML
<img src="url" alt="some_text">
```
URL 指存储图像的位置。如果名为 "pulpit.jpg" 的图像位于 `www.baidu.com` 的 images 目录中，那么其 URL 为 `http://www.baidu.com/images/pulpit.jpg`。浏览器将图像显示在文档中图像标签出现的地方。
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>HTML 图像</title>
    </head>
    <body>

        <h2>Norwegian Mountain Trip</h2>
        <img border="0" src="/images/pulpit.jpg" alt="Pulpit rock" width="304" height="228">

    </body>
</html>
```
##### img属性
* alt：规定图像的替代文本

在浏览器无法载入图像时，替换文本属性告诉读者她们失去的信息。

* src:规定显示图像的 URL
* height、width：规定图像的宽高


### 相对路径和绝对路径
路径指文件存放的位置，在网页中利用路径可以引用文件，插入图像、视频等。表示路径的方法有两种：相对路径，绝对路径。

##### 相对路径
相对路径是指目标相对于当前文件的路径，网页结构设计中多采用这种方法来表示目标的路径。相对路径有多种表示方法，其表示的意义不尽相同。表示方法如下：
>./ ：代表文件所在的目录（可以省略不写）</br>
../ ：代表文件所在的父级目录</br>
../../ ：代表文件所在的父级目录的父级目录</br>
/ ：代表文件所在的根目录

通常在网页里指定文件时，都会选择使用相对路径。

##### 绝对路径
绝对路径是指文件在硬盘上真正存在的路径。事实上，在网页编程时，很少会使用绝对路径，如果使用`“E:\book\网页布\代码\第2章\bg.jpg”`来指定背景图片的位置，在自己的计算机上 浏览可能会一切正常，但是上传到Web服务器上浏览就很有可能不会显示图片了。因为上传到Web服务器上时，可能整个网站并没有放在Web服务器的E盘， 有可能是D盘或H盘。即使放在Web服务器的E盘里，Web服务器的E盘里也不一定会存在`“E:\book\网页布局\代码\第2章”`这个目录，因此在浏 览网页时是不会显示图片的。

### 列表标签
##### `<ul>` 标签
`<ul>` 标签定义无序列表。

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>W3Cschool(w3cschool.cn)</title>
    </head>
    <body>
​
        <h4>无序列表:</h4>
        <ul>
            <li>咖啡</li>
            <li>茶</li>
            <li>牛奶</li>
        </ul>
        </body>
</html>
```
`<ul>`属性设定：`<ul type="square">`

常用属性值:

>type="disc"实心圆点（默认）
>type="circle"空心圆
>type="square"空心正方形

##### `<ol>` 标签
`<ol>`标签用于定义文档中的有序列表。

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>W3Cschool(w3cschool.cn)</title>
    </head>
    <body>

        <ol>
            <li>咖啡</li>
            <li>茶</li>
            <li>牛奶</li>
        </ol>

        <ol start="50">
            <li>咖啡</li>
            <li>茶</li>
            <li>牛奶</li>
        </ol>

    </body>
</html>
```
```HTML
<!DOCTYPE html>
<html>
    <head> 
        <meta charset="utf-8"> 
        <title>菜鸟教程(runoob.com)</title> 
    </head>
    <body>

        <h4>编号列表：</h4>
        <ol>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Lemons</li>
            <li>Oranges</li>
        </ol>  

        <h4>大写字母列表：</h4>
        <ol type="A">
            <li>Apples</li>
            <li>Bananas</li>
            <li>Lemons</li>
            <li>Oranges</li>
        </ol>  

        <h4>小写字母列表：</h4>
        <ol type="a">
            <li>Apples</li>
            <li>Bananas</li>
            <li>Lemons</li>
            <li>Oranges</li>
        </ol>  

        <h4>罗马数字列表：</h4>
        <ol type="I">
            <li>Apples</li>
            <li>Bananas</li>
            <li>Lemons</li>
            <li>Oranges</li>
        </ol>  

        <h4>小写罗马数字列表：</h4>
        <ol type="i">
            <li>Apples</li>
            <li>Bananas</li>
            <li>Lemons</li>
            <li>Oranges</li>
        </ol>  

    </body>
</html>
```

##### `<dl>` 标签
`<dl>`带有项目和描述的描述列表。
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>列表标签</title>
    </head>
    <body>
        <dl>
            <dt>咖啡</dt>
            <dd>黑色的热饮</dd>
            <dt>牛奶</dt>
            <dd>白色的冷饮</dd>
        </dl>
    </body>
</html>
```

##### `<li>` 标签
`<li>`标签用于表示文档中列表的项目，在上面例子中，我们分别在有序列表和无序列表中使用了`<li>`标签。HTML 两个列表实例： 一个有序列表 `<ol>` 和 一个无序列表 `<ul>` :
`<li>` 标签定义列表项目。`<li>` 标签可用在有序列表`<ol>`、无序列表`<ul>`和菜单列表`<menu>`中。

### 超链接
`<a>` 标签的主要作用是用于超链接，可以链接到其他页面也可以链接到本地的其他文件。

##### 标签定义及使用说明

`<a>` 标签定义超链接，用于从一个页面链接到另一个页面。
`<a>` 元素最重要的属性是 `href` 属性，它指定链接的目标,如果没有使用 href 属性，则不能使用 hreflang、media、rel、target 以及 type 属性。在所有浏览器中，链接的默认外观如下：

* 未被访问的链接带有下划线而且是蓝色的
* 已被访问的链接带有下划线而且是紫色的
* 活动链接带有下划线而且是红色的

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>超链接</title>
    </head>
    <body>

        <a href="http://www.w3cschool.cn">访问 W3Cschool在线教程!</a>

    </body>
</html>
```
### 块元素和行内元素
初学html，接触很多标签`<h1>`、`<p>`、`<ul>`等，当写出简单的小页面的时候，例如仅仅是一篇带有标题的文章，标题`<h1>`标签单独一行，不管后面有多大的空间；`<p>`标签中使用多个`<em>`给某些词做强调，但是`<em>`却和`<p>`中的其他内容同一行，由此，会思考为什么`<em>`和`<h1>`会有这种的不同？

HTML标签一般分为块标签和行内标签两种类型，也可以称为块元素和行内元素。

##### 块元素
块元素会独自占据一整行，或者多行，可以任意设置其大小尺寸，是用于搭建网页布局的必须部分，使网页结构更加紧凑合理。

块级元素有以下几个特点：

* 总是另起一行（特立独行）
* 可以设置其宽度、高度，内外边距
* 在不手动设置宽度的情况下，宽度默认为所在容器的100%（即容器宽度）
* 可以容纳行内元素和其他块元素。

常见的块级元素有：`<div>`、`<h1>~<h6>`、`<p>`、`<ul>`、`<table>`等，其中`<div>`是最常用最典型的块级元素。
##### 行内元素
行内元素也称为内联元素，行内元素不占有独立区域，其大小仅仅被动的依赖于自身内容的大小（例如文字和图片），所以一般不能随意设置其宽高、对齐等属性。常用于控制页面中文本的样式。

行内元素的特点：

* 总是和相邻的行内元素在同一行上（物以类聚）
* 设置宽高无效，水平方向的padding和margin属性可以设置，但是垂直方向上的无效。
* 默认宽度是他自身内容的宽度。
* 行内元素只能容纳其他行内元素或者文本。

特殊：a比较特殊，可以放块级元素，但是链接里面不能再放链接。                


##### 行内块元素
普遍的规则里总有那么几个不一样的，在行内元素中就有那么几个特殊标签，比如`<img>`、`<input>`、`<td>`,可以给他们设置宽高、对齐属性，我们把这样特殊的一类标签称为行内块元素。行内块元素综合了块元素和行内元素的不同特点。

行内块元素的特点：

* 和相邻行内元素在同一行，但是之间会有空白缝隙。
* 默认宽度是他本身内容的宽度。
* 宽度、高度、行高、外边距以及内边距都可以手动设置。

### `<div>`
`<div>` 标签可以把文档分割为独立的、不同的部分。HTML `<div>` 元素是块级元素，它是可用于组合其他 HTML 元素的容器。`<div>` 元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。<div> 元素经常与 CSS 一起使用，用来布局网⻚。
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>W3Cschool(w3cschool.cn)</title>
    </head>
    <body>

        <p>这是一些文本。</p>

        <div style="color:#0000FF">
            <h3>这是一个在 div 元素中的标题。</h3>
            <p>这是一个在 div 元素中的文本。</p>
        </div>

        <p>这是一些文本。</p>

    </body>
</html>
```

### `<span>`
`<span>` 元素是无语义的行内元素，它可以对元素进行分组，使它们以不同的样式显示。
`<span>` 用于对文档中的行内元素进行组合。
`<span>` 标签没有固定的格式表现。当对它应用样式时，它才会产生视觉上的变化。如果不对 `<span>` 应用样式，那么 `<span>` 元素中的文本与其他文本不会任何视觉上的差异。
`<span>` 标签提供了一种将文本的一部分或者文档的一部分独立出来的方式。

>提示:可以对同一个 `<span>` 元素应用 class 或 id 属性，但是更常⻅的情况是只应用其中一 种。这两者的主要差异是，class 用于元素组(类似的元素，或者可以理解为某一类元素)， 而 id 用于标识单独的唯一的元素。


>提示:被 `<span>` 元素包含的文本，您可以使用 CSS 对它定义样式，或者使用 JavaScript 对它进行操作。


```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>W3Cschool(w3cschool.cn)</title>
    </head>
    <body>
​
        <p>我的母亲有 <span style="color:blue;font-weight:bold">蓝色</span> 的眼睛，我得父亲有 <span style="color:darkolivegreen;font-weight:bold">碧绿色</span> 的眼睛。</p>
​
    </body>
</html>
```
