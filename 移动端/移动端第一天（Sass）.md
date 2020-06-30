# 移动端第一天Sass

## 目标
* 掌握预处理器
* 掌握SASS使用

## Sass简介
SASS（Syntactically Awesome Stylesheet）是一个CSS预处理器，有助于减少CSS的重复，节省时间。
同时它是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库有助于更好地组织管理样式文件，以及更高效地开发项目。

#### CSS 预处理器
CSS预处理器是用一种专门的编程语言，也可以理解为定义了一种新的语言将Css作为目标生成文件，进行Web页面样式设计，然后再编译成正常的CSS文件，以供项目使用。
开发者就只要使用这种语言进行编码工作了。预处理器通常可以实现浏览器兼容，变量，结构体等功能，代码更加简洁易于维护。目前比较流行的两种是Sass和Less，其他的还有 Stylus 、Dtcss等。

###### 常见的CSS预处理语言
CSS 预处理器技术已经非常的成熟，而且也涌现出了很多种不同的 CSS 预处理器语言：

* Sass（SCSS）
* LESS
* Stylus
* Turbine
* Swithch CSS
* CSS Cacheer
* DT CSS

#### Sass 介绍
Sass (Syntactically Awesome StyleSheets)是css的一个扩展开发工具，它允许你使用变量、条件语句等，使开发更简单可维护。
Sass 是一门高于 CSS 的元语言，它能用来清晰地、结构化地描述文件样式，有着比普通 CSS 更加强大的功能。
Sass 能够提供更简洁、更优雅的语法，同时提供多种功能来创建可维护和管理的样式表。


Sass 是最早的 CSS 预处理语言，有比 LESS 更为强大的功能，不过其一开始的缩进式语法并不能被大众接受，不过由于其强大的功能和 Ruby on Rails 的大力推动，还是有很多开发者选择了 Sass。
Sass 是采用 Ruby 语言编写的一款 CSS 预处理语言，它诞生于2007年，是最大的成熟的 CSS 预处理语言。最初它是为了配合 HAML（一种缩进式 HTML 预编译器）而设计的，因此有着和 HTML 一样的缩进式风格


#### Sass 和 Scss
Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点：
* 文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名
* 语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，不带大括号({})和分号(;)，而 SCSS 的语法书写和我们的 CSS 语法书写方式非常类似。

```Sass
  $a: blue  //定义变量  相当于js中的:var a=blue
  $primary-color: #333 //定义变量

  body
    font: $a
    color: $primary-color  
```


```Scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

## Sass 开发环境搭建

#### windows 下命令行工具
cmder
[cmder](https://www.jianshu.com/p/5cfb14a4c885)
[cmder](https://www.jianshu.com/p/1f9c14f3168d)

#### Ruby
Ruby是一门开源的动态编程语言，注重简洁和效率。Ruby 的句法优雅，读起来自然，写起来舒适。
Ruby本身有一个极其出名的全栈式框架Ruby On Rails，可以非常简单便捷地开发各种Web应用。Ruby适用于Web应用、移动应用后端服务、文本处理等多种应用场景。

Sass是用Ruby语言写的，但是两者的语法没有关系，所以学 Sass 不用学 Ruby，只是必须先安装Ruby，然后再安装Sass。

##### 下载链接：
[Ruby下载链接](https://rubyinstaller.org/downloads/)

#### 安装node
[node安装包](http://nodejs.cn/download/)

下载安装完成后，打开cmd，执行以下命令：
```
node -v  // npm -v
```

#### 安装 npm
安装好node后，npm也一并安装完成


#### 安装 Sass
使用npm 安装 Sass
```
npm install -g sass
```
####  Easy Sass
vs code  Sass插件


## Sass 语法

#### Scss 语法格式
```CSS
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```


命令行：

创建路径：md   mkdir
创建文件：type null>index.html
         touch index.html



#### Sass 文件编译
Sass 的编译有多种方法：
* 命令编译
* GUI工具编译
* 自动化编译

###### 命令编译
命令编译是指使用你电脑中的命令终端，通过输入 Sass 指令来编译 Sass。这种编译方式是最直接也是最简单的一种方式。因为只需要在你的命令终端输入：

单文件编译：
```cmder
sass <要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css
```

多文件编译(只能在watch的时候使用)
```cmder
sass --watch sass/:css/
```
上面的命令表示将项目中“sass”文件夹中所有“.scss”(“.sass”)文件编译成“.css”文件，并且将这些 CSS 文件都放在项目中“css”文件夹中。

在实际编译过程中，你会发现上面的命令，只能一次性编译。每次个性保存“.scss”文件之后，都得重新执行一次这样的命令。如此操作太麻烦，其实还有一种方法，就是在编译 Sass 时，开启“watch”功能，这样只要你的代码进行任保修改，都能自动监测到代码的变化，并且给你直接编译出来：

```cmder
sass --watch <要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css
```

监视多文件：
```cmder
sass --watch 要监测的文件夹目录：要输出的文件夹目录
```

###### GUI 界面工具编译
* Koala (http://koala-app.com/)
* Compass.app（http://compass.kkbox.com/）
* Scout（http://mhs.github.io/scout-app/）
* CodeKit（https://incident57.com/codekit/index.html）
* Prepros（https://prepros.io/）

## sass变量使用
#### 变量声明
定义变量的语法：
在有些编程语言中（如，JavaScript）声明变量都是使用关键词“var”开头，但是在 Sass 不使用这个关键词，而是使用大家都喜欢的美元符号“$”开头。
Sass 的变量包括三个部分：
1.声明变量的符号“$”
2.变量名称
3.赋予变量的值

```CSS
$brand-primary : blue !default;  

$btn-primary-color : #fff;

$btn-primary-bg : $brand-primary !default;

$btn-primary-border : darken($btn-primary-bg, 5%) !default
```

普通变量
定义之后可以在全局范围内使用。

```CSS
$fontSize: 12px;
body{
    font-size:$fontSize;
}
```

编译后的css
```CSS
body{
    font-size:12px;
}
```

默认变量
sass 的默认变量仅需要在值后面加上 !default。

```CSS
$baseLineHeight:1.5 !default;
body{
    line-height: $baseLineHeight;
}

```
编译后的css代码：
```CSS
body{
    line-height:1.5;
}
```
sass 的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量之前重新声明下变量

```CSS
$baseLineHeight: 2;
$baseLineHeight: 1.5 !default;
body{
    line-height: $baseLineHeight;
}
```
编译后的css代码：
```CSS
body{
    line-height:2;
}
```

#### 变量引用  
在 Sass 中声明了变量之后，就可以在需要的地方调用变量
```CSS
$brand-primary : darken(#428bca, 6.5%) !default;  
$btn-primary-color: #fff !default;
$btn-primary-bg : $brand-primary !default;

$btn-primary-border : darken($btn-primary-bg, 5%) !default;

.btn-primary {
   background-color: $btn-primary-bg;
   color: $btn-primary-color;
   border: 1px solid $btn-primary-border;
}
```

####  全局变量和局部变量
在元素内部定义的变量不会影响其他元素，简单的理解，全局变量就是定义在元素外面的变量：
```CSS
/* 定义全局变量(在选择器、函数的外面定义的变量为全局变量) */
$color: orange;


.block {
  color: $color;//调用全局变量
}

div {

  //局部变量
  $color: red;//定义局部变量
  a {
    color: $color;//调用局部变量
  }
}
span {
  color: $color;//调用全局变量
}
```
>就近原则:
当在局部范围（选择器内、函数内、混合宏内...）声明一个已经存在于全局范围内的变量时，局部变量就成为了全局变量的影子。基本上，局部变量只会在局部范围内覆盖全局变量。      

          
## 嵌套sass
Sass 中还提供了选择器嵌套功能，但这也并不意味着你在 Sass 中的嵌套是无节制的，因为你嵌套的层级越深，编译出来的 CSS 代码的选择器层级将越深.
选择器嵌套为样式表的作者提供了一个通过局部选择器相互嵌套实现全局选择的方法，Sass 的嵌套分为三种：
* 选择器嵌套
* 属性嵌套
* 伪类嵌套


#### 选择器嵌套
```HTML
<header>
<nav>
    <a href=“##”>Home</a>
    <a href=“##”>About</a>
    <a href=“##”>Blog</a>
</nav>
<header>
```

```CSS
nav a {
  color:red;
}

header nav a {
  color:green;
}
```

SASS实现

```CSS
/* nav {
   a {
     color: red;

  .class{
    div{

  }

}

      header & {      
           color:green;
        }
  } 
}
 header &的地方，&前面是最外层的，套在这个代码块外头的其实在header里面 */
```

#### 属性嵌套
Sass 中还提供属性嵌套，CSS 有一些属性前缀相同，只是后缀不一样，比如：border-top/border-right，与这个类似的还有 margin、padding、font 等属性。假设你的样式中用到了：
```CSS
.box {
    border-top: 1px solid red;
    border-bottom: 1px solid green;
}
```
在 Sass 中我们可以这样写：
```CSS
.box {
  border: {
   top: 1px solid red;
   bottom: 1px solid green;
  }
}
```


## 四种输出方式
### nested
嵌套输出方式

```cmder
sass  --watch <scss文件路径>/scss文件.scss:<CSS文件路径/CSS文件.css> --style:nested
```


### expanded
展开输出方式：
跟nested区别：
大体上是一致的，区别在于最后的大括号是否另起一行。

```cmder
sass  --watch <scss文件路径>/scss文件.scss:<CSS文件路径/CSS文件.css> --style:expanded
```


### compressed
压缩输出方式：去掉注释和无意义的空格

```cmder
sass  --watch <scss文件路径>/scss文件.scss:<CSS文件路径/CSS文件.css> --style compressed
```

### compact
```CSS
nav ul { margin: 0; padding: 0; list-style: none; }
nav li { display: inline-block; }
/* nav a { display: block; padding: 6px 12px; text-decoration: none; } */
```
```cmder
sass  --watch <scss文件路径>/scss文件.scss:<CSS文件路径/CSS文件.css> --style:compact
```


## 父选择器 &
在嵌套 CSS 规则时，有时也需要直接使用嵌套外层的父选择器，例如，当给某个元素设定 hover 样式时，或者当 body 元素有某个 classname 时，可以用 & 代表嵌套规则外层的父选择器。

```CSS
div
{
  background-color: blue;
  a{
    color: red;
    //&指向a标签
    &:hover{
      background-color: yellow
    }
  }
// &指向div
  &:hover{
    background-color: yellow
  }
}
```

## 继承
```CSS
/* @extend .father    */
/* @extend #id */
/* @extend div */
```
示例代码：
```CSS
.goble
{
  background-color: red
}

.father
{
  width: 100px;
  height: 100px;
  @extend .goble
}

.wk
{
  @extend .father;
  border: 10px solid yellow
}
```


## 混合宏

<!-- /* self.view.frame.size.width
self.view.frame.size.height -->
<!-- #define self.view.frame.size.width WIDTH */ -->

混合宏定义方式：

```CSS
@mixin 宏名称{
  CSS属性名称： 属性值
}
```

混合宏的使用
```CSS
.classname{
  @include 宏名称()
}
```


### 带参数的混合宏

```CSS
@mixin 宏名称($参数名称1,$参数名称2){
  CSS属性名称1：$参数名称1
  CSS属性名称2：$参数名称2
}
```

混合宏的使用
```CSS
.classname{
  @include 宏名称(实际参数1,实际参数2)；
}



参考文档：
[sass中文文档](https://www.sass.hk/docs/)
