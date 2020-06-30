# 一、Vue基础

## 1、Vue.js框架简介

### 1.1、为什么要学习Vue.js

**什么是Vue.js**

Vue（读音 /vju:/，发音类似于 view）是一套用于构建用户界面的渐进式的JavaScript框架。

**Vue.js的优点**

- 体积小：压缩后只有33k；
- 更高的运行效率：基于虚拟DOM，一种可以预先通过JavaScript进行各种计算，把最终的DOM操作计算出来并优化的技术，由于这种DOM操作属于预处理操作，并没有真实的操作DOM，所以叫做虚拟DOM；
- 双向数据绑定：让开发者不用再去操作DOM对象，把更多的精力投入到业务逻辑上；
- 生态丰富、学习成本低：市场上拥有大量成熟、稳定的基于vue.js的ui框架及组件，拿来即用实现快速开发；对初学者友好、入门容易、学习资料多；

**为什么要使用Vue.js**

随着前端技术的不断发展，前端开发能够处理的业务越来越多，网页也变得越来越强大和动态化，这些进步都离不开JavaScript。在目前的开发中，已经把很多服务端的代码放到了浏览器中来执行，这就产生了成千上万行的JavaScript代码，他们连接着各式各样的HTML和CSS文件，但是缺乏正规的组织形式。这也是为什么越来越多的前端开发者使用JavaScript框架的原因，目前比较流行的前端框架有Angular、Reac、Vue等。

Vue是一款友好的、多用途且高性能的JavaScript框架，它能够帮助你创建可维护性和可测试性更强的代码库。Vue是渐进式的JavaScript框架，也就是说，如果你已经有了现成的服务端应用，你可以将Vue作为该应用的一部分嵌入其中，带来更加丰富的交互体验。或者如果你希望将更多业务逻辑放到前端来实现，那么Vue的核心库及其生态系统也可以满足你的各式需求。

和其他框架一样，Vue允许你将一个网页分割成可复用的组件，每个组件都包含属于自己的HTML、CSS、JavaScript，以用来渲染网页中相应的地方。如果我们构建了一个大型的应用，可能需要将东西分割成为各自的组件和文件，使用Vue的命令行工具，使快速初始化一个真实的工程变得非常简单。

```
vue init webpack my-project
```

我们甚至可以使用Vue的单文件组件，它包含了各自的HTML、JavaScript以及带作用域的CSS或SCSS。



### 1.2、MVC、MVP、MVVM 设计模式

MVC（Model-View-Controller）是最常见的软件架构之一，在软件开发领域有着广泛的应用，MVC本身是比较好理解的，但是要讲清楚由它衍生出来的MVP和MVVM就不太容易了。

**1.2.1、MVC**

MVC的意思是，可以将软件分为三个部分：

- 视图（View）：用户界面
- 控制器（Controller）：业务逻辑
- 模型（Model）：数据保存

各部分之间的通信方式为：

- View传送指令到Controller
- Controller完成业务逻辑后，要求Model改变状态
- Model将新的数据发送到View，用户得到反馈

并且所有的通信都是单向的，如下图所示：

![](./img/1-1.2-01.png)

MVC 模式的执行流程是有两种方式：

（1）通过View接受指令，传递给Controller

![](./img/1-1.2-02.png)

（2）直接通过Controller接受指令

![](./img/1-1.2-03.png)

实际项目中往往采用更加灵活的方式：

（1）用户可以向View发送指令（DOM事件），再由View直接要求Model改变状态；

（2）用户也可以直接向Controller发送指令（改变URL触发hashChange事件），再由Controller发送给view ;

（3）Controller非常薄，只起到路由的作用，而View非常厚，业务逻辑都部署在View，所以有些框架里就直接取消了Controller，只保留一个Router（路由器）。

如图所示：

![](./img/1-1.2-04.png)

**1.2.2、MVP**

MVP（Model-View-Presenter），是从经典的MVC演变而来的。Mode提供数据，View负责显示，Presenter负责逻辑的处理。

MVP和MVC有着一个重大的区别：

- 在MVP中View与Model不发生联系，它们之间的通信是通过Presenter来进行的，所有的交互都发生在Presenter（即MVC中的Controller）内部；而在MVC中View会直接从Model中读取数据而不是通过Controller。
- MVP中各部分之间的通信是双向的，而在MVC中各部分之间的通信是单向的。
- 在MVP中，View非常薄，不部署任何业务逻辑，称为“被动视图”（Passive View），即没有任何主动性，而Presenter非常厚，所有逻辑都部署在那里。

如图所示：

![](.\img\1-1.2-05.png)

**1.2.3、MVVM**

MVVM（Model-View-ViewModel），它本质上是MVC的改进版，是针对MVC中的View进行了更细致的分工。ViewModel将视图UI和业务逻辑分开，它可以取出Model的数据，同时帮助处理View中由于需要展示内容而设计到的业务逻辑。

![](.\img\1-1.2-06.png)

MVVM模式与MVP模式类似，唯一的区别是，它采用了数据双向绑定（data-binding），即View的变动自动反应在ViewModel，反之亦然。



### 1.3、数据驱动（数据双向绑定）的原理

**什么是数据驱动**

数据驱动是Vue.js最大的特点。在vue中，所谓的数据驱动就是当数据发生变化时，用户界面发生相应的变化，开发者不需要手动的去修改DOM。

比如，我们点击一个button，需要元素的文本做一个 “是/否” 的切换操作，在传统的jQuery中，对于页面修改的流程通常是：对button绑定事件，然后获取文案对应元素的dom对象，最后根据切换来修改dom对象的文本值。

**Vue实现数据驱动**

vue实现数据双向绑定主要采用数据劫持，配合发布者-订阅者模式的方式，通过 `Object.defineProperty()` 来劫持各个属性的 `setter` 和 `getter` ，在数据变动时发布消息给订阅者，触发相应监听回调。

当一个普通 JavaScript 对象传给 Vue 实例来作为它的 data 选项时，vue 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter 。用户看不到 getter/setter ，但是在内部它们让vue追踪依赖，在属性被访问和修改时通知变化。

vue的数据双向绑定将MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的Model的数据变化，通过Compile来解析编译模板指令（vue中用来解析{{}}模板语法），最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到 数据变化 —> 视图更新；视图交互变化（input）—> 数据model变更 双向绑定效果。

![](./img/1-1.3-01.png)



**getter和setter的理解**

当打印出vue实例下的data对象里的属性，它的每个属性都有两个对应的get和set方法。顾名思义，get为取值方法，set为赋值方法。正常情况下，取值和赋值是用 obj.prop 的方式，但是这样做有一个问题，我们如何知道对象的值改变了？

我们可以把get和set理解为function，当我们调用对象的属性时，会进入到 get.属性(){...} 中，先判断对象是否有这个属性，如果没有，那么就添加一个name属性，并给它赋值；如果有name属性，那么就返回name属性。可以把get看成一个取值的函数，函数的返回值就是它拿到的值。

当给实例赋值时，会进入 set.属性(val){...} 中，形参val就是赋给属性的值，在这个函数里做了很多事情，比如双向绑定等等。因为这个值每次都要经过set，其他方式无法对该值做修改。在ES5中，对象原型有两个属性，`_defineGetter_` 和 `_defineSetter_` ，专门用来给对象绑定get和set。



### 1.4、虚拟DOM

**什么是虚拟DOM**

在Vue.js 2.0版本中引入了 Virtual DOM 的概念，Virtual DOM 其实就是一个以JavaScript对象（VNode节点）作为基础来模拟DOM结构的树形结构，这个树形结构包含了整个DOM结构的信息。简单来说，可以把Virtual DOM理解为一个简单的JS对象，并且最少包含标签名（tag）、属性（attrs）和子元素对象（children）三个属性。不同的框架对这三个属性的命名会有所差别。

**模板转换成视图的过程**

通过一个简单的实例，来说明虚拟DOM到真实DOM的渲染过程：

创建模板：

```html
<ul id="app">
	<li v-for="item in list">{{item}}</li>
</ul>
```

首先将上面的模板编译成渲染函数：

```javascript
createElement(
	"ul", //节点标签名
	{ //标签上的属性，用对象存储键值对
		attr:{
			id:"app"
		}
	},
	[ //该节点的子节点
		createElement("li",1),
		createElement("li",2),
		createElement("li",3)
	]
)
```

然后将上面的渲染函数，渲染出虚拟DOM树：

```javascript
VNode: {
	child: undefined,
	children: [
		VNode-0:{...},
		VNode-1:{...},
		VNode-2:{...}
	],
	elm:{...} //ul
}
```

最后由虚拟DOM树生成真实DOM：

```html
<ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
```

实现过程如下图：

![](./img/1-1.4-01.png)

**虚拟DOM的作用**

虚拟DOM的最终目标是将虚拟节点渲染到视图上。但是如果直接使用虚拟节点覆盖旧节点的话，会有很多不必要的DOM操作。例如，一个ul标签下有很多个li标签，其中只有一个li标签有变化，这种情况下如果使用新的ul去替代旧的ul，会因为这些不必要的DOM操作而造成性能上的浪费。

为了避免不必要的DOM操作，虚拟DOM在虚拟节点映射到视图的过程中，将虚拟节点与上一次渲染视图所使用的旧虚拟节点做对比，找出真正需要更新的节点来进行DOM操作，从而避免操作其他不需要改动的DOM元素。

其实，虚拟DOM在Vue.js中主要做了两件事情：

- 提供与真实DOM节点所对应的虚拟节点VNode
- 将虚拟节点VNode和旧虚拟节点oldVNode进行对比，然后更新视图

**为什么要使用虚拟DOM**

- 具备跨平台优势，由于Virtual DOM 是以JavaScript对象为基础而不依赖真实平台环境，所以使它具有了跨平台的能力，比如说浏览器平台、Weex、Node等。
- 操作DOM慢，JS运行效率高，可以将DOM对比操作放在JS层，提高效率。因为DOM操作的执行速度远不如JavaScript运算速度快，因此，把大量的DOM操作搬运到JavaScript中，运用patching算法来计算出真正需要更新的节点，最大限度地减少DOM操作，从而显著提高性能。Vritual DOM本质上就是在JS和DOM之间做了一个缓存，JS只操作Virtual DOM，最后把变更写入到真实DOM。
- 提高渲染性能，Virtual DOM的优势不在于单次的操作，而是在大量、频繁的数据更新下，能够对视图进行合理、高效的更新。



## 2、Vue实例

### 2.1、下载与安装Vue.js

Vue.js的官网： https://cn.vuejs.org/ 

如果在项目中使用Vue.js框架，有两种方式：一是在页面中使用Script的方式直接引入，可以在官网下载Vue.js的源码，也可以使用CDN的方式引入；二是使用NPM的方式构建Vue项目，或者是使用Vue-cli脚手架创建项目。

本节我们先通过Script标签在网页引入Vue.js的方式来学习Vue实例，因为这种方法上手简单，适合初学者学习Vue的基础语法入门。在后面的章节中，会单独介绍使用NPM和Vue-cli的方式搭建Vue项目。

**本地引入**

我们可以访问Vue.js的官网下载，地址：https://vuejs.org/js/vue.min.js

也可以通过访问GitHub下载，地址：https://github.com/vuejs/vue

在HTML页面中使用script标签引入：

```html
<script src="js/vue.js"></script>
```

**使用CDN引入**

国内常用的CDN公共库有：

腾讯网静态资源公共库： https://libs.qq.com/ 

字节跳动静态资源公共库： http://cdn.bytedance.com/ 

BootCDN服务： https://www.bootcdn.cn/ 

又拍云JS库CDN服务： https://upcdn.b0.upaiyun.com/ 

我们以BootCDN为例，打开BootCDN网站，搜索Vue：

![](./img/1-2.2-01.png)

在搜索结果列表中选择Vue，进入Vue的CDN库列表，选择对应的版本，点击复制链接，或者是复制 `<script>` 标签，将Vue库引入到网页中：

```html
<script src="https://cdn.bootcss.com/vue/2.6.11/vue.common.js"></script>
```



### 2.2、创建第一个Vue实例

**声明式渲染**

Vue.js的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进DOM中。

HTML代码：

```html
<div id="app">
  {{ message }}
</div>
```

JS代码：

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

完整示例代码：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Vue实例</title>
	</head>
	<body>
		<div id="app">
			{{ message }}
		</div>
		<script src="js/vue.min.js"></script>
		<script>
			var app = new Vue({
				el: '#app',
				data: {
					message: "Hello Vue"
				}
			})
		</script>
	</body>
</html>
```

输出结果：

```
Hello Vue
```



通过上面的代码，我们已经成功的创建了第一个Vue应用。上面代码中JS的数据和DOM已经建立了关联，所有的东西都是响应式的。怎么确认数据是响应式的呢？我们可以打开浏览器，按F12进入开发者控制台（Console），修改 `app.message` 的值，可以看到页面中的数据也做了响应的更新，效果如下图：

![](./img/1-2.2-02.gif)

每个Vue应用都是通过用 `Vue()` 函数创建一个新的**Vue实例**开始的：

```javascript
var vm = new Vue({
  // 选项
})
```

虽然没有完全遵循MVVM模型，但是Vue的设计也受到了它的启发，因此在文档中经常会使用 `vm` （ViewModel的缩写）这个变量名表示Vue实例。

### 2.3、Vue实例中的数据对象

**数据对象**

当一个Vue实例被创建时，它将 `data` 对象中的所有属性加入到Vue的响应式系统中。当这个属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

代码示例：

```javascript
// 声明数据对象
var data = { 
    msg: "hello" 
}

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
})
```

上面代码中，可以将我们声明的对象赋值到Vue实例中，使用 `vm.msg == data.msg` 比较时，结果为true。

当我们直接修改Vue实例中data属性的值，结果将会影响到原始数据对象，代码示例：

```javascript
// 设置Vue实例中的属性会影响到原始数据
vm.msg = "hai"
data.msg // => hai

// ……反之亦然
data.msg = "hello world"
vm.msg // => hello world
```



只有当Vue实例被创建时就已经存在于data中的属性修改后才是响应式的，如果我们直接操作一个没有在Vue实例中定义的属性，或者是我们直接用赋值的形式为实例添加一个属性，例如：

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		msg: 'hello'
	}
})
			
vm.val = 'world';
```



上面代码中的，对 `val` 属性做修改不会触发任何视图的更新，如果Vue实例中没有提前声明 `val` 属性，直接在模板中使用该属性，也会报错：

```html
<div id="app" v-cloak>
	{{ msg }} , {{val}}
</div>
<script src="js/vue.min.js"></script>
<script>
	var vm = new Vue({
		el: '#app',
		data: {
			msg: 'hello'
		}
	})
			
	vm.val = 'world';
</script>
```

报错信息：

![](./img/1-2.2-03.png)

我们在设计数据模型时，一般会提前声明好页面中所需要渲染的属性，并且为属性赋初始化值。例如，我们要展示一些关于学生的信息，在获取属性的值之前，就要提前先为属性赋初始化值，示例代码：

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		name: '',
		age: 0,
		sex: '',
		hobby: []
	}
})
```

**Object.freeze()方法**

如果不需要对实例中的属性做修改，也允许在页面中使用属性绑定的方式修改数据的话，我们可以使用 `Object.freeze()` 方式实现阻止修改现有的属性，即Vue的响应系统无法再追踪变化。

示例代码：

```javascript
var obj = {
	msg: 'hello'
}
			
//阻止修改数据
Object.freeze(obj);
			
var vm = new Vue({
	el: '#app',
	data: obj
})
			
//此时不允许修改Vue实例中的属性
vm.msg = 'hello world';
```

运行上面的代码，在浏览器的控制台中会报错：

![](./img/1-2.3-01.png)

**$ 符号的使用**

为了区分Vue实例的属性和方法，还可以在Vue实例是属性和方法前使用 `$` 符号，以便与用户定义的属性区分开。例如：

```javascript
var data = {
	msg: 'hello'
}
var vm = new Vue({
  el: '#app',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('app') // => true

// $watch 是一个实例方法
vm.$watch('msg', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
})
```



### 2.4、模板语法

Vue.js使用了基于HTML的模板语法，允许开发者声明式地将DOM绑定至底层Vue实例的数据。结合响应式系统，在应用状态发生改变时，Vue能够智能地计算出重新渲染组件的最小代价并应用到DOM操作上。

#### 2.4.1、插值

**文本**

数据绑定最常见的形式就是使用 `{{...}}` （双大括号）的文本插值：

```html
<span>Message:{{ msg }}</span>
```

上面代码中 `{{ msg }}` 模板处的内容会被Vue实例的数据对象上 `msg` 属性的值，当数据对象上 `msg` 属性发生改变时，插值处的内容都会被更新。

如果不想让模板处的内容随着数据对象的属性改变，可以使用 `v-once` 指令，例如：

```html
<span v-once>这个将不会改变: {{ msg }}</span>
```

在使用了 `v-once` 的标签中，插值处的内容不会更新，但是这样会影响该节点上的其他数据绑定，所以要谨慎使用。

**原始HTML**

双大括号可以把数据解释为普通的文本，但是如果文本中的内容是HTML源码，也会被作为普通的文本输出。但是对于一些特殊的情况下，需要对HTML的文本进行解析，渲染为HTML代码并将HTML代码的执行结果展示在页面中，比如富文本编辑器中的内容。为了输出真正的HTML，可以使用 `v-html` 指令，示例如下：

```html
<div id="app" v-html="msg"></div>
<script>
	var vm = new Vue({
		el: '#app',
		data: {
			msg: '<h1 style="color:red">Hello</h1>'
		}
	})
</script>
```

在页面中的输出结果：

![](./img/1-2.4-01.png)

**属性**

双大括号的模板语法不适用于HTML属性上，如果要把数据绑定到HTML的属性上可以使用 `v-bind` 指令：

```html
<div v-bind:id="idVal"></div>
<script>
	var vm = new Vue({
		el: '#app',
		data: {
			idVal: 'app'
		}
	})
</script>
```

上面代码中，渲染后的HTML代码中，div的id属性值为app。

对于布尔类型的属性（该属性只要存在其值即为true），`v-bind` 的使用会与普通的属性略有不同，例如：

```html
<div v-bind:disabled="isDisabled"></div>
<script>
	var vm = new Vue({
		el: '#app',
		data: {
			isDisabled: true
		}
	})
</script>
```

如果 `isDisabled` 的值是 `null` 、`undefined` 、或 `false`，则 `disabled` 属性不会被包含在渲染出来的元素中。

**JS表达式**

模板中除了可以绑定简单的属性键值，还可以对其他数据进行绑定，Vue提供了完全的JavaScript表达式支持。

例如：

```html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

这些表达式会在所属Vue实例的数据作用域下作为JavaScript被解析。但是每个绑定都只能包含单个表达式，如果出现多表达式的话，是不会生效的。例如：

```html
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```



## 3、Vue的指令

指令（Directives）是带有 `v-` 前缀的特殊属性，指令属性的值一般是单个JavaScript表达式（v-for除外）。指令的功能是，当表达式的值改变时，将其产生的连带影响，响应式地作用于DOM。

常用的Vue指令有：

### 3.1、v-text 和 v-html

`v-text` 在标签中显示文本数据，数据对象中的数据会被原样输出，例如：

```html
<span v-text="message"></span>
<!-- 简写方式 -->
<span>{{message}}</span>
```

在模板中输出真正的HTML，如果是使用 `v-text` 输出带标签的字符串的话，仅仅是想页面中输出带标签的HTML，但是不会对HTML代码进行解析，如果要解析HTML代码，就要使用 `v-html` 指令。例如：

```html
<p v-text=“message”></p> <!-- 输出带有HTML标签的文本内容 -->
<p v-html="message"></p> <!-- 输出解析HTML代码后的内容 -->

<script type="text/javascript">
	var app = new Vue({
		el: '#app', //element
		data: {
			message: '<strong>Hello</strong> Vue!',
		}
	})
</script>
```



上面代码执行后，输出的结果为：

`v-text` 输出的结果是：`<strong>Hello</strong> Vue!`

`v-html` 输出的结果是：**Hello**  Vue！

**总结：**

`v-text` 和 `{{}}` 表达式渲染数据，不解析标签；

`v-html` 不仅可以渲染数据，而且可以解析标签；



### 3.2、v-cloak

**作用：** `v-clock` 指令主要是解决对插值表达式 `{{}}` 的渲染前闪烁问题。

简单来说，当网络比较慢时，网页还在加载vue.js，这就会导致Vue来不及渲染，这是页面就会显示Vue源代码。我们就可以使用 `v-cloak` 指令来解决这一问题。

**演示：**

HTML代码：

```html
<div id="app">
    {{context}}
</div>
```

JS代码：

```html
<script>
    var app = new Vue({
        el: '#app',
        data: {
            context:'互联网头部玩家钟爱的健身项目'
        }
    });
</script>
```

效果：

![3386108-cc0cda1d980b9586](./img/1-3.2-01.webp)

针对上面的这种情况，可以使用 `v-cloak`指令解决闪烁问题。JS代码不变，只需要在div中添加 `v-cloak` 指令。使用 `v-cloak` 指令设置样式，这些样式会在Vue实例编译结束时，从绑定的HTML元素上被移除。

**代码示例：**

HTML代码：

```html
<div id="app" v-cloak>
    {{context}}
</div>
```

CSS代码：

```css
[v-cloak]{
    display: none;
}
```

使用 `v-cloak` 指令之后的效果：

![3386108-cc0cda1d980b9586](.\img\1-3.2-02.webp)

在简单项目中，使用  v-cloak 指令是解决屏幕闪动的好方法。但在大型、工程化的项目中（webpack、vue-router）只有一个空的 div 元素，元素中的内容是通过路由挂载来实现的，这时我们就不需要用到 v-cloak 指令了。



### 3.3、v-bind 属性绑定

`v-bind` 是用于绑定数据和元素属性的，例如：

```html
<div class="app">
    <a v-bind:href="url">click me</a>
</div>  
```

```javascript
var app = new Vue({
    el:'.app',
    data:{
        url:"https://www.baidu.com",
    }
});
```

`v-bind` 后面是 `属性名=""` ，可以理解为绑定了这个属性，属性的值去Vue实例的数据对象中获取，当数据对象中对应的属性值发生改变时，DOM中的属性值也会随着更新，可以在控制台输出测试。

同一个DOM元素上可以绑定多个属性，例如：

```html
<div class="app">
    <a v-bind:href="url" v-bind:class="class">click me</a>
    <img v-bind:src="imgsrc">
</div>  
```

```javascript
var app = new Vue({
    el:'.app',
    data:{
        url:"https://www.baidu.com",
        imgsrc:"https://cn.vuejs.org/images/logo.png",
        class:"btn btn-default"
    }
});
```

`v-bind` 除了可以绑定一个简单类型的数据之外，还可以绑定一个对象，例如：

```html
<div class="app">
    <a v-bind:class="{active:isActive}">click me</a>
</div>  
```

上面代码中，对象的名为 `active` ，表示要添加的类名， `isActive` 是vue中的数据，表示在什么情况下添加该类名，即在Vue实例的数据对象中对应的值（isActive的值）为真是，才为DOM元素的class中添加 `active` 的样式。

**简写：**

`v-bind` 指令可以简化英文的冒号 `:` ，示例：

```html
<div class="app">
    <a v-bind:href="url">click me</a>
</div>  
```

可以简化为：

```html
<div class="app">
    <a :href="url">click me</a>
</div>  
```



### 3.4、v-on 事件绑定

#### 3.4.1、监听事件

 可以用 `v-on` 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。 示例代码：

```html
<div id="app">
  <button v-on:click="counter += 1">Add 1</button>
  <p>计算结果：{{ counter }}</p>
</div>
```

```javascript
var vm = new Vue({
  el: '#app',
  data: {
    counter: 0
  }
})
```

上面代码运行后，每次点击按钮，数据对象中的 `counter` 属性的值就会加1。

#### 3.4.2、事件处理方法

`v-on` 是用于绑定事件的，例如，有一个按钮，当点击该按钮时执行一些操作：

```html
<div id="app">
	<button v-on:click="myclick">按钮</button>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
	},
	methods: {
		myclick:function() {
			console.log('hello world')
	}
}
```

在 `<button>` 中 `v-on:click` 后面的值是一个方法，可以写出 `myclick()` ，如果没有参数的话，可以写出 `myclick` 。该事件对应的方法不是定义在数据对象data中，而是定义在Vue实例的methods中。

#### 3.4.3、内联处理器中的方法

 除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法： 

```html
<div id="app">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
```

```javascript
new Vue({
  el: '#app',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
```

上面代码运行后，当点击两个按钮时，都会执行 `say()` 方法。

 有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 `$event` 把它传入方法： 

```html
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```

```javascript
// ...
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```

#### 3.4.4、多事件处理方法

`v-on` 可以绑定多个事件，例如：

```html
<div id="app">
	<button v-on="{mouseenter:onenter,mouseleave:leave}">按钮</button>
</div>
```

或者是写成：

```html
<div id="app">
	<button v-on:mouseenter="onenter" v-on:mouseleave="leave">按钮</button>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
	},
	methods: {
		onenter:function() {
			console.log('onenter...')
		},
		leave:function() {
			console.log('leave...')
		}
	}
})
```

当绑定多个事件时，需要传入一个对象，对象的键名就是事件名，对象的键值就是对应事件要执行的方法。

#### 3.4.5、阻止表单默认提交

在使用form表单时，当点击提交按钮，浏览器就会默认发送一个get或者是post请求到指定页面，刷新整个页面。有时为了增加表单验证，需要阻止浏览器的默认行为，可以在绑定的提交方法中添加 `$event` 参数，`$event` 是Vue里面的事件对象，Vue可以识别，代码示例：

```html
<div class="app">
    <form v-on:submit='onSubmit($event)'>
        <input type="text" >
        <button type="submit">提交</button>
    </form>
</div>  
```

```javascript
var app = new Vue({
    el:'.app',
    data:{
        
    },
    methods:{
        onSubmit:function(e){
            e.preventDefault(); //阻止浏览器的默认行为
            console.log("onSubmited");
        }
    }
});
```

其实，在Vue中已经封装了阻止浏览器默认行为的修饰符，只需要在事件的后面加上 `.prevent` 修饰符，就可以组织默认事件，例如：

```html
<div id="app">
	<form v-on:submit.prevent="onSubmit($event)">
		<input type="text">
		<button type="submit">提交</button>
	</form>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
	},
	methods: {
		onSubmit: function() {
			console.log('onsubmit....')
		}
	}
})
```

#### 3.4.6、v-on事件简写

`v-on` 可以简写为 `@` 符号，例如：

```html
<div id="app">
	<button v-on:click="myclick">按钮</button>
</div>
```

可以简化为：

```html
<div id="app">
	<button @click="myclick">按钮</button>
</div>
```

#### 3.4.7、事件修饰符

> 参考： https://www.cnblogs.com/xuqp/p/9406971.html 

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 `v-on` 提供了**事件修饰符**。之前提过，修饰符是由点开头的指令后缀来表示的。

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>

<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

#### 3.4.8、按键修饰符

 在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符： 

```html
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input v-on:keyup.enter="submit">
```

在Vue中已经废除了 `keyCode` 的事件用法，但是可以使用 `keyCode` 属性，例如：

```html
<input v-on:keyup.13="submit">
```

 为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名： 

- `.enter`
- `.tab`
- `.delete` (捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

 有一些按键 (`.esc` 以及所有的方向键) 在 IE9 中有不同的 `key` 值, 如果你想支持 IE9，这些内置的别名应该是首选。 

 你还可以通过全局 `config.keyCodes` 对象[自定义按键修饰符别名](https://cn.vuejs.org/v2/api/#keyCodes)： 

```javascript
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
```

#### 3.4.9、系统修饰符

可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

 例如： 

```html
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

 请注意修饰键与常规按键不同，在和 `keyup` 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 `ctrl` 的情况下释放其它按键，才能触发 `keyup.ctrl`。而单单释放 `ctrl` 也不会触发事件。如果你想要这样的行为，请为 `ctrl` 换用 `keyCode`：`keyup.17`。 

**`.exact`修饰符**

 `.exact` 修饰符允许你控制由精确的系统修饰符组合触发的事件。 

```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```

**鼠标按钮修饰符**

- `.left`
- `.right`
- `.middle`

这些修饰符会限制处理函数仅响应特定的鼠标按钮。

#### 3.4.10、自定义按键修饰符别名

 在Vue中可以通过`config.keyCodes`自定义按键修饰符别名。例如，由于预先定义了`keycode 116`（即`F5`）的别名为`f5`，因此在文字输入框中按下`F5`，会触发`prompt`方法，出现`alert`。

```html
<div id="app">
	<input type="text" v-on:keydown.f5="prompt()" />
</div>
```

```javascript
Vue.config.keyCodes.f5 = 116;
var vm = new Vue({
	el: '#app',
	data: {
		
	},
	methods: {
		prompt: function() {
			alert("按下了F5！")
		}
	}
})
```



### 3.5、v-if 和 v-show 条件渲染

**v-if**

`v-if` 指令用于条件性地渲染一块内容，这块内容只会在指令的表达式返回 true 时被渲染。例如：

```html
<div id="app">
	<div v-if="seen">可以被控制的内容</div>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		seen: true
	}
})
```

上面代码中，`v-if` 指令将根据表达式 seen 的值（true或false）来决定是否插入 div 元素。

可以使用 `v-else-if` 和 `v-else` 指令配合 `v-if` 一起使用，例如：

```html
<div id="app">
	<div v-if="score >= 90 && score <= 100">优秀</div>
	<div v-else-if="score > 60 && score <=90">良好</div>
	<div v-else>不及格</div>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		score: 90
	}
})
```

`v-else` 的元素必须紧跟在 `v-if` 或 `v-else-if` 的元素后面，而 `v-else-if` 的元素也必须紧跟在 `v-if` 元素的后面，`v-else` 和 `v-else-if` 都不能单独使用。

由于 `v-if` 是一个指令，所以必须将它添加到一个元素上，但是如果想要切换多个元素，可以使用 `<template>` 元素当做不可见的包裹元素，并在该元素上使用 `v-if` ，最终渲染的结果不会包含 `<template>` 元素。例如：

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

**使用 key 管理可复用的元素**

Vue会尽可能高效地渲染元素，通常会复用已有元素，而不是从头开始渲染。这么做除了使Vue变得非常快之外，还有一些其他好处。例如，如果项目中设计了两种用户登录的方式，可以使用 `v-if` 实现不同登录方式的切换。

```html
<div id="app">
	<template v-if="loginType">
		<label>用户名：</label>
		<input placeholder="请输入用户名">
	</template>
	<template v-else>
		<label>邮箱：</label>
		<input placeholder="请输入邮箱">
	</template>
	<button @click="toggleType">切换登录方式</button>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		loginType: true
	},
	methods: {
		toggleType: function() {
			this.loginType = !this.loginType;
		}
	}
})
```

上面的代码中，切换 `loginType` 将不会清除用户已经输入的内容，因为两个模板使用了相同的元素，`<input>`

元素被复用了，不会被替换掉，而是仅仅替换了元素中的 `placeholder` 属性的值。效果如下：

![](./img/1-3.5-01.gif)

这种情况肯定是不符合实际的需求的，所以Vue提供了一种方式来解决这个问题，即为不需要复用的元素上添加一个 key 属性，告诉Vue这是两个独立的元素，不要复用它们。示例代码：

```html
<div id="app">
	<template v-if="loginType">
		<label>用户名：</label>
		<input placeholder="请输入用户名" key="username-input">
	</template>
	<template v-else>
		<label>邮箱：</label>
		<input placeholder="请输入邮箱" key="email-input">
	</template>
	<button @click="toggleType">切换登录方式</button>
</div>
```

为 `input` 添加 key 属性之后，每次切换时，输入框都将被重新渲染，效果如下：

![](./img/1-3.5-02.gif)

由于 `<label>` 元素没有添加 key 属性，所以仍然会被高效地复用。

**v-show**

Vue还提供了一种根据条件展示元素的选项，这就是 `v-show` 指令，示例：

```html
<div id="app">
	被控制的内容：<span v-show="ok">Hello</span>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		ok: false
	}
})
```

与 `v-if` 不同的是，`v-show` 的值无论是什么，被该指令修饰的元素始终会被渲染并保留在DOM中，`v-show` 只是简单地切换元素的CSS属性 `display:none`。上面代码在浏览器中的效果如下：

![](./img/1-3.5-03.png)

这里需要注意的是，`v-show` 不支持 `<template>` 元素，也不支持 `v-else` 。

**v-if 和 v-show 的区别**

（1）显隐过程：

虽然两个指令都可以动态的显示DOM元素，但是在执行上还是有很大区别的：

- v-if是动态的向DOM树内添加或删除DOM元素；
- v-show是通过设置DOM元素的display样式属性控制显示或隐藏；

（2）编译过程：

- v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；
- v-show只是简单的基于css切换；

（3）编译条件：

- v-if是惰性的，如果初始条件为假，则什么都不做；只有在条件第一次为真时才开始局部编译（当编译被缓存后，再次切换时会进行局部卸载）；
- v-show是在任何条件下（首次条件是否为真）都会被编译，然后被缓存，而且DOM元素保留；

（4）性能消耗：

- v-if有更高的切换性能消耗；
- v-show有更高的初始渲染性能消耗；

（5）使用场景：

- v-if适合运行时条件少改变的场景；
- v-show适合频换切换的场景；

**总结**

v-if判断是否加载，可以减轻服务器的压力，在需要时加载，但是会造成更高的切换开销；

v-show调整DOM元素的CSS的display属性，可以使客户端操作更加流畅，但是有更高的初始渲染开销；

**v-if 注意事项**

官方文档中不建议 v-if 和 v-for 一起使用，当它们一起使用时，v-for 具有比 v-if 更高的优先级，这就意味着 v-if 将分别重复运行于每个 v-for 循环中。



### 3.6、v-for 列表渲染

#### 3.6.1、遍历数组

可以使用 `v-for` 指令基于一个数组来渲染列表。`v-for` 指令需要使用“`元素 in 数组`”形式的特殊语法，即 `item in items` 的语法形式，其中 `items` 是源数据的数组，`item` 是被遍历的数组元素的别名。示例代码：

```html
<ul id="app">
	<li v-for="item in list">{{item}}</li>
</ul>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		list: [1,2,3,4,5]
	}
})
```

运行结果：

- 1
- 2
- 3
- 4
- 5

 在 `v-for` 块中，我们可以访问所有父作用域的属性。`v-for` 还支持一个可选的第二个参数，即当前项的索引。 

```html
<ul id="app">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

```javascript
var vm = new Vue({
  el: '#app',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

运行结果：

- Parent - 0 - Foo
- Parent - 1 - Bar

 也可以用 `of` 替代 `in` 作为分隔符，因为它更接近 JavaScript 迭代器的语法： 

```html
<div v-for="item of items"></div>
```

#### 3.6.2、遍历对象

 可以用 `v-for` 来遍历一个对象的属性，示例代码：

```html
<ul id="app">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```

```javascript
new Vue({
  el: '#app',
  data: {
    object: {
      name: 'Tom',
      age: 20,
      sex: '男'
    }
  }
})
```

结果：

- Tom
- 20
- 男

 也可以提供第二个的参数为 property 名称 (也就是键名)： 

```html
<div v-for="(value, name) in object">
  {{ name }}: {{ value }}
</div>
```

结果：

```
name：Tom
age：20
sex：男
```

 还可以用第三个参数作为索引： 

```html
<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>
```

结果：

```
0. name：Tom
1. age：20
2. sex：男
```

注意：使用v-for遍历对象时，会按照 `Object.keys()` 的结果遍历，但是不能保证它的结果在通过的JavaScript引擎下都一致。

#### 3.6.3、遍历整数

 `v-for` 也可以接受整数。在这种情况下，它会把模板重复对应次数。 

```html
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```

结果：

```
 1 2 3 4 5 6 7 8 9 10
```

#### 3.6.4、在`<template>`上使用v-for

 类似于 `v-if`，你也可以利用带有 `v-for` 的 ` 来循环渲染一段包含多个元素的内容。比如： 

```html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

#### 3.6.5、使用key属性

 当 Vue 正在更新使用 `v-for` 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。 

 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，需要为每项提供一个唯一 `key` 属性： 

```html
<div v-for="item in items" v-bind:key="item.id">
  <!-- 内容 -->
</div>
```

 建议尽可能在使用 `v-for` 时提供 `key` 属性，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。 

key属性的注意事项：

- v-for循环时，key属性只能使用number和string类型；
- key在使用时，必须使用v-bind属性绑定的形式，指定key的值；
- 在组件中使用v-for循环时，必须在使用v-for的同时，指定唯一的key属性值；

#### 3.6.6、数组的更新操作

Vue将被侦听的数组的变异方法（mutation method）进行了包裹，这里的变异方法，是指数组对象提供的调用后会改变数组原始数据的方法。同时，也有非变异方法（non-mutation method），非变异方法不会改变原始数组，而是返回一个新数组。

Vue可以侦听数组的变异方法，所以数组的变异方法被调用后也会触发视图的更新，这些方法包括：

- `push()`： 向数组的末尾添加一个或更多元素，并返回新的长度；
- `pop()`： 删除数组的最后一个元素并返回删除的元素；
- `shift()`： 删除并返回数组的第一个元素；
- `unshift()`： 向数组的开头添加一个或更多元素，并返回新的长度；
- `splice()`： 从数组中添加或删除元素；
- `sort()`： 对数组的元素进行排序；
- `reverse()`： 反转数组的元素顺序；

非变异方法不会更改原始数组，总是返回一个新数组，非变异方法包括：

- `filter()`： 检测数值元素，并返回符合条件所有元素的数组；
- `concat()`： 连接两个或更多的数组， 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本；
- `slice()`： 选取数组的的一部分，并返回一个新数组；

所以当使用非变异方法时，可以用新数组替换旧数组：

```javascript
vm.lsit = vm.list.filter(function(item){
	return item.msg.match(/Foo/)
})
```

上面代码中，将 `filter()` 方法返回的新数组替换了Vue实例的数据对象中的数组，虽然对Vue实例的数据对象重新赋值，但是并不会重新渲染整个列表，因为Vue为了使得DOM元素得到最大范围的重用二实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。

但是，由于JavaScript的限制，Vue不能检测以下数组的变动：

- 使用索引直接设置数组项时，例如：`vm.items[indexOfItem] = newValue`
- 直接修改数组的长度，例如： `vm.items.length = newLength`

举个例子：

```javascript
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items[1] = 'x' // 不是响应性的
vm.items.length = 2 // 不是响应性的
```

解决第一类问题，即使用索引设置数组项：

```javascript
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
//或者使用 vm.$set 实例方法，该方法是全局方法Vue.set的一个别名
vm.$set(vm.items, indexOfItem, newValue)
```

```javascript
// 使用数组的splice方法
vm.items.splice(indexOfItem, 1, newValue)
```

解决第二类问题，即修改数组length属性，可以使用 splice 方法：

```javascript
vm.items.splice(newLength)
```

#### 3.6.7、对象的更新操作

 还是由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除： 

```javascript
var vm = new Vue({
  data: {
    a: 1
  }
})
// `vm.a` 现在是响应式的

vm.b = 2
// `vm.b` 不是响应式的
```

 对于已经创建的实例，Vue 不允许动态添加根级别的响应式属性。但是，可以使用 `Vue.set(object, propertyName, value)` 方法向嵌套对象添加响应式属性。例如，对于： 

```javascript
var vm = new Vue({
  data: {
    user: {
      name: 'Anika'
    }
  }
})
```

 你可以添加一个新的 `age` 属性到嵌套的 `user` 对象：

```javascript
Vue.set(vm.user, 'age', 27)
```

  你还可以使用 `vm.$set` 实例方法，它只是全局 `Vue.set` 的别名： 

```javascript
vm.$set(vm.user, 'age', 27)
```

 有时你可能需要为已有对象赋值多个新属性，比如使用 `Object.assign()` 或 `_.extend()`。在这种情况下，你应该用两个对象的属性创建一个新的对象。所以，如果你想添加新的响应式属性，  应该这样做： 

```javascript
vm.user = Object.assign({}, vm.user, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```

#### 3.6.8、显示过滤/排序后的结果

 有时，我们想要显示一个数组经过过滤或排序后的版本，而不实际改变或重置原始数据。在这种情况下，可以创建一个计算属性，来返回过滤或排序后的数组。 

 例如： 

```html
<li v-for="n in evenNumbers">{{ n }}</li>
```

```javascript
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
computed: {
  evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```

 在计算属性不适用的情况下 (例如，在嵌套 `v-for` 循环中) 你可以使用一个方法： 

```html
<li v-for="n in even(numbers)">{{ n }}</li>
```

```javascript
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
methods: {
  even: function (numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```



### 3.7、v-model 表单数据绑定

#### 3.7.1、基本用法

双向数据绑定是Vue的核心特性之一，Vue的响应式原理是实现了**数据—>视图**，而双向数据绑定，就是在完成前面那一步之后，又做了**视图—>数据**的操作。 `v-model` 指令可以在表单元素，例如：`<input>`、`<textarea>` 以及 `<select>` 等元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。

`v-model` 会忽略所有表单元素的 `value`、`checked`、`selected`属性的初始值，以Vue实例的数据作为数据来源，可以通过Vue实例中的数据对象data中声明表单的初始值。

**文本**

```html
<div id="app">
	<input v-model="msg" />
	<p>结果：{{msg}}</p>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		msg: ''
	}
})
```

**多行文本**

```html
<div id="app">
	<textarea v-model="msg"></textarea>
	<p>结果：{{msg}}</p>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		msg: ''
	}
})
```

 在文本区域插值 (`{{text}}`) 并不会生效，应用 `v-model` 来代替。 

**复选框**

单个复选框绑定布尔值：

```html
<div id="app">
	<input type="checkbox" v-model="checked" />
	<label>{{ checked }}</label>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		checked: false
	}
})
```

多个复选框，绑定到一个数组：

```html
<div id='app'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
</div>
```

```javascript
new Vue({
  el: '#app',
  data: {
    checkedNames: []
  }
})
```

**单选按钮**

```html
<div id="app">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
```

```javascript
new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})
```

**下拉框**

单选时：

```html
<div id="app">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
```

```javascript
new Vue({
  el: '#app'
  data: {
    selected: ''
  }
})
```

多选时：

```html
<div id="app">
  <select v-model="selected" multiple style="width: 50px;">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span>Selected: {{ selected }}</span>
</div>
```

```javascript
new Vue({
  el: '#app',
  data: {
    selected: []
  }
})
```

 用 `v-for` 渲染的动态选项： 

```html
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
```

```javascript
new Vue({
  el: '#app',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
```

#### 3.7.2、值绑定

 对于单选按钮，复选框及选择框的选项，`v-model` 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)： 

```html
<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">

<!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

 但是有时我们可能想把值绑定到 Vue 实例的一个动态属性上，这时可以用 `v-bind` 实现，并且这个属性的值可以不是字符串。 

**复选框**

```html
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no"
>
```

```javascript
// 当选中时
vm.toggle === 'yes'
// 当没有选中时
vm.toggle === 'no'
```

 这里的 `true-value` 和 `false-value` attribute 并不会影响输入控件的 `value` attribute，因为浏览器在提交表单时并不会包含未被选中的复选框。如果要确保表单中这两个值中的一个能够被提交，(比如“yes”或“no”)，请换用单选按钮。 

**单选按钮**

```html
<input type="radio" v-model="pick" v-bind:value="a">
```

```javascript
// 当选中时
vm.pick === vm.a
```

**下拉框的选项**

```html
<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
```

```javascript
// 当选中时
typeof vm.selected // => 'object'
vm.selected.number // => 123
```

#### 3.7.3、修饰符

**`.lazy`**

在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了[上述](https://cn.vuejs.org/v2/guide/forms.html#vmodel-ime-tip)输入法组合文字时)。你可以添加 `lazy` 修饰符，从而转变为使用 `change` 事件进行同步：

```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" >
```

**`.number`**

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```
<input v-model.number="age" type="number">
```

这通常很有用，因为即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 `parseFloat()` 解析，则会返回原始的值。

**`.trim`**

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符：

```
<input v-model.trim="msg">
```



## 4、综合练习

案例：

完成留言板的功能，需求如下：

1. 点击“提交”按钮添加留言，当多行文本输入框为空时不能添加留言；
2. 留言输入框显示剩余字符计数，最多不能超过100字；
3. 点击“提交”按钮，在留言列表中显示留言内容；
4. 每条留言内容的末尾处设计删除按钮，点击删除按钮，在留言列表中清除该条留言；
5. 点击“清空”按钮，清除所有的留言；



# 二、Vue基础进阶

### 1、methods

`methods` 是Vue提供的一种声明方法的操作，可以直接使用Vue实例对象访问这些方法，或者是在指令表达式中使用这些方法。`methods` 是以对象类型声明在Vue的实例中，这里需要注意的是，`methods`不支持箭头函数的方式声明方法，因为 `methods` 声明的方法中 `this` 自动绑定为当前的Vue实例，但是箭头函数中的 `this` 绑定的是父级作用域的上下文，所以在箭头函数中的 `this` 的值是 `undefined` 。

Vue实例的 `methods` 属性包含的是一个对象，其中键为函数的名，值为函数本身。语法：

```javascript
methods: {
	[key: string]: function([参数]){
		// 函数体
	}
}
```

示例代码：

```javascript
var vm = new Vue({
  data: { a: 1 },
  methods: {
    plus: function () {
      this.a++
    }
  }
})
vm.plus()
vm.a // 2
```

#### 1.1、基本用法

为了更容易地理解 `methods` 的用法，我们可以使用一个小的案例来说明。假如在 `data` 中有两个属性：`firstName` 和 `lastName` ，我们需要通过把两个属性的值做拼接，在模板中输出 `fullName` 。示例：

```html
<div id="app">
	<h2>{{ firstName }} {{ lastName }}</h2>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		firstName: '张',
		lastName: '小明'
	}
})
```

结果为：**张 小明**

使用这种文本插值的方式很容易就实现了这个功能，页面中会显示我们需要的 `fullName` 。

除了使用这种直接插值的方法外，我们还可以使用 `methods` 属性声明函数来实现这个过程。示例：
```html
<div id="app">
	<h2>{{ fullName() }}</h2>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		firstName: '张',
		lastName: '小明'
	},
	methods: {
		fullName: function(){
			return this.firstName+" "+this.lastName;
		}
	}
})
```

上面代码输出的结果和使用模板中直接插值的结果是一样的。 

我们在 `methods` 属性中声明了 `fullName` 属性，属性的值就是要执行的方法，所以我们可以理解为，使用 `methods` 属性声明了 `fullName()` 方法。Vue中的 `data` 和 `methods` 都是上下文中的变量，所以可以通过 `this.firstName` 的方式访问 `data` 中的 `firstName` 属性。同时，我们也可以使用相同的方式在 `fullName()` 方法中访问其他方法。

在调用 `methods` 定义的方法时，一定要加上小括号 `()` ，不然输出的将是整个函数的字符串，效果如下图：

![](./img/2-1.1-01.png)

#### 1.2、方法的参数

使用 `methods` 声明的函数和JavaScript中的函数用法是一样的，都可以为函数传递参数。我们还以上面的例子演示，`fullName` 中使用的变量是通过函数的参数传递到函数内的，例如：

```html
<div id="app">
	<h2>{{ fullName('王','大拿') }}</h2>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		firstName: '张',
		lastName: '小明'
	},
	methods: {
		fullName: function(firstName,lastName){
			return firstName+" "+lastName;
		}
	}
})
```

页面中显示的结果为： **王 大拿**

除了可以传递值，还可以将 `data` 中的变量作为参数传递，例如：

```html
<div id="app">
	<h2>{{ fullName(firstName,lastName) }}</h2>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		firstName: '张',
		lastName: '小明'
	},
	methods: {
		fullName: function(firstName,lastName){
			return firstName+" "+lastName;
		}
	}
})
```

页面中显示的结果为： **张 小明**

#### 1.3、方法的返回值

除了在方法中返回字符串之外，还可以返回对象和数组。我们可以把上面的例子改造一下，让 `fullName()` 方法返回一个对象，例如：

```html
<div id="app">
	<h2>{{ fullName(firstName,lastName).name }}</h2>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		firstName: '张',
		lastName: '小明'
	},
	methods: {
		fullName: function(firstName,lastName){
			return {
				name: firstName+" "+lastName
			}
		}
	}
})
```

页面中的输出结果：**张 小明**

上面代码中，模板处仍然是调用 `fullName()` 方法，但是该方法返回的是一个对象，对象中有 `name` 属性，这个 `name` 属性的值就是我们所需要的姓名，所以在模板处调用 `fullName().name` 就可以得到需要的结果。



### 2、computed

`computed` 看似和 `methods` 用法相同，但是还是有很多差别的，先来看一下 `computed` 的概念。

`computed` 是计算属性，该属性声明在Vue实例中，语法是：

```javascript
computed: { 
	[key: string]: Function | { get:Function, set:Function }
}
```

在 `computed` 中的所有 `getter` 和 `setter` 的 `this` 上下文自动绑定Vue实例，并且可以使用箭头函数，如果使用了箭头函数，那么函数内的 `this` 就不会指向这个组件的实例。

计算属性的结果会被缓存，当其中声明的属性的值发生变化时，才会被重新计算。

例子：

```html
<div id="app">
	姓：<input type="text" v-model="firstName">
	名：<input type="text" v-model="lastName">
	<p>{{fullName}}</p>
</div>
```

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		firstName: '',
		lastName: ''
	},
	computed:{
		fullName: function(){
			return this.firstName +" "+ this.lastName;
		}
	}
})
```

运行结果：

![](./img/2-2-01.gif)

### 3、watch

 在vue中，使用watch来响应数据的变化。watch的用法大致有三种。下面代码是watch的一种简单的用法： 

#### 3.1、基础用法

代码示例：

```html
<div id="app">
	<input v-model="val" />
</div>
		
<script type="text/javascript">
	new Vue({
		el: '#app',
		data: {
			val: ''
		},
		watch: {
			val: function(){
				console.log('change....');
			}
		}
	});
</script>
```

上面代码中，当输入框的内容发生改变时，会修改 `val` 属性的值，在 `watch` 监听器中就可以监听到 `val` 的变化，然后执行其方法。

或者是在 `watch` 中指定一个方法名，在 `methods` 中声明该方法，代码示例：

```javascript
new Vue({
	el: '#app',
	data: {
		val: ''
	},
	watch: {
		val: 'valChange' // 当监听到val属性的改变时，执行 valChange 方法
	},
	methods: {
		valChange: function(){
			console.log('change...')
		}
	}
});
```

也可以使用 `handler` 方法，获取属性被修改前和被修改后的值，代码示例：

```javascript
new Vue({
	el: '#app',
	data: {
		val: ''
	},
	watch: {
		val: {
			handler(newVal,oldVal){
				console.log(newVal); //修改后的值
				console.log(oldVal); //修改前的值
			}
		}
	}
});
```



#### 3.2、immediate属性

 上面的例子是值变化时候，watch才执行，我们想让值最初时候watch就执行就用到了`handler`和`immediate`属性。代码示例：

```javascript
new Vue({
	el: '#app',
	data: {
		val: ''
	},
	watch: {
		val: {
			handler(newVal,oldVal){
				console.log(newVal);
				console.log(oldVal);
			},
			immediate: true // 代表在wacth里声明了val这个方法之后立即先去执行handler方法，如果设置了false，那么效果和上边例子一样
		}
	}
});
```

使用watch时有一个特点，就是当值第一次绑定的时候，不会执行监听函数，只有值发生改变才会执行。如果我们需要在最初绑定值的时候也执行函数，则就需要用到immediate属性。

比如当父组件向子组件动态传值时，子组件props首次获取到父组件传来的默认值时，也需要执行函数，此时就需要将immediate设为true。

监听的数据后面写成对象形式，包含handler方法和immediate，之前我们写的函数其实就是在写这个handler方法；

immediate表示在watch中首次绑定的时候，是否执行handler，值为true则表示在watch中声明的时候，就立即执行handler方法，值为false，则和一般使用watch一样，在数据发生变化的时候才执行handler。

#### 3.3、deep属性

 当需要监听一个对象的改变时，普通的watch方法无法监听到对象内部属性的改变，只有data中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听。 

```html
<div id="app">
	<input v-model="user.name" />
</div>
		
<script type="text/javascript">
	new Vue({
		el: '#app',
		data: {
			user: {
				name: ''
			}
		},
		watch: {
			user: {
				handler(user){
					console.log(user.name);
				},
				deep: true
			}
		}
	});
</script>
```

 设置 `deep: true` 则可以监听到 `user.name` 的变化，此时会给 `user` 的所有属性都加上这个监听器，当对象属性较多时，每个属性值的变化都会执行handler。例如：

如果只需要监听对象中的一个属性值，则可以做以下优化：使用字符串的形式监听对象属性： 

```javascript
new Vue({
	el: '#app',
	data: {
		user: {
			name: '',
			age: 0
		}
	},
	watch: {
		'user.name': {
			handler(name){
				console.log(name);
			},
			deep: true,
			immediate: true
		}
	}
});	
```



### 4、class 与 style 绑定

class 与 style 是 HTML 元素的属性，用于设置元素的样式，我们可以用 v-bind 来设置样式属性。

Vue.js v-bind 在处理 class 和 style 时， 专门增强了它。表达式的结果类型除了字符串之外，还可以是对象或数组。

#### 4.1、class属性

 我们可以为 v-bind:class 设置一个对象，从而动态的切换 class: 

```html
<style>
    .active {
        width: 100px;
        height: 100px;
        background: green;
    }
</style>

<div id="app">
  <div v-bind:class="{ active: isActive }"></div>
</div>

<script>
    new Vue({
      el: '#app',
      data: {
        isActive: true
      }
    })
</script>
```

 以上实例 div class 为： 

```html
<div class="active"></div>
```

 我们也可以在对象中传入更多属性用来动态切换多个 class 。 代码示例：

```html
<style>
    .active {
        width: 100px;
        height: 100px;
        background: green;
    }
    .text-danger {
        background: red;
    }
</style>

<div id="app">
  <div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
  </div>
</div>

<script>
    new Vue({
      el: '#app',
      data: {
        isActive: true,
        hasError: true
      }
    })
</script>
```

 以上实例 div class 为： 

```html
<div class="static active text-danger"></div>
```

 我们也可以直接绑定数据里的一个对象： 

```html
<style>
    .active {
        width: 100px;
        height: 100px;
        background: green;
    }
    .text-danger {
        background: red;
    }
</style>

<div id="app">
  <div v-bind:class="classObject"></div>
</div>

<script>
    new Vue({
      el: '#app',
      data: {
        classObject: {
          active: true,
          'text-danger': true
        }
      }
    })
</script>
```

该实例的结果和上面的实例是一样的，当前实例 div class 为： 

```html
<div class="static active text-danger"></div>
```

 此外，我们也可以在这里绑定返回对象的计算属性。这是一个常用且强大的模式： 

```html
<style>
	.base {
		width: 100px;
		height: 100px;
	}

	.active {
		background: green;
	}

	.text-danger {
		background: red;
	}
</style>

<div id="app">
	<div v-bind:class="classObject"></div>
</div>

<script>
	new Vue({
		el: '#app',
		data: {
			isActive: true,
			error: {
				value: true,
				type: 'fatal'
			}
		},
		computed: {
			classObject: function() {
				return {
					base: true,
					active: this.isActive && !this.error.value,
					'text-danger': this.error.value && this.error.type === 'fatal',
				}
			}
		}
	})
</script>
```

 我们可以把一个数组传给 **v-bind:class** ，实例如下： 

```html
<style>
    .active {
        width: 100px;
        height: 100px;
        background: green;
    }
    .text-danger {
        background: red;
    }
</style>

<div id="app">
	<div v-bind:class="[activeClass, errorClass]"></div>
</div>

<script>
    new Vue({
      el: '#app',
      data: {
        activeClass: 'active',
        errorClass: 'text-danger'
      }
    })
</script>
```

 以上实例 div class 为： 

```html
<div class="active text-danger"></div>
```

 我们还可以使用三元表达式来切换列表中的 class 。errorClass 是始终存在的，isActive 为 true 时添加 activeClass 类： 

```html
<style>
    .text-danger {
        width: 100px;
        height: 100px;
        background: red;
    }
    .active {
        width: 100px;
        height: 100px;
        background: green;
    }
</style>

<div id="app">
	<div v-bind:class="[errorClass ,isActive ? activeClass : '']"></div>
</div>

<script>
    new Vue({
      el: '#app',
      data: {
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger'
      }
    })
</script>
```

 

#### 4.2、style绑定

 我们可以在 **v-bind:style** 直接设置样式： 

```html
<div id="app">
	<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
		Hello
	</div>
</div>

<script>
    new Vue({
      el: '#app',
      data: {
        activeColor: 'green',
        fontSize: 30
      }
    })
</script>
```

 以上实例 div style 为： 

```html
<div style="color: green; font-size: 30px;">Hello</div>
```

 也可以直接绑定到一个样式对象，让模板更清晰： 

```html
<div id="app">
  <div v-bind:style="styleObject">Hello</div>
</div>

<script>
    new Vue({
      el: '#app',
      data: {
        styleObject: {
          color: 'green',
          fontSize: '30px'
        }
      }
    })
</script>
```

 `v-bind:style` 可以使用数组将多个样式对象应用到一个元素上： 

```html
<div id="app">
  <div v-bind:style="[baseStyles, overridingStyles]">Hello</div>
</div>

<script>
    new Vue({
      el: '#app',
      data: {
        baseStyles: {
          color: 'green',
          fontSize: '30px'
        },
        overridingStyles: {
          'font-weight': 'bold'
        }
      }
    })
</script>
```

 注意：当 `v-bind:style` 使用需要特定前缀的 `CSS` 属性时，如 `transform` ，`Vue.js` 会自动侦测并添加相应的前缀。

### 5、filter 过滤器

过滤器，简单来理解，就是一个数据经过一系列操作之后（过滤）转换为另一个数据的形式。过滤器分为全局过滤器和局部过滤器。

**全局过滤器**

```html
<div id="app">
	{{msg | globalFilter}}
</div>
		
<script type="text/javascript">
	Vue.filter('globalFilter',function(msg){
		return msg + "!!!";
	})
			
	new Vue({
		el: '#app',
		data: {
			msg: 'hello',
		}
	})
</script>
```

运行结果：

```
hello!!!
```

**局部过滤器**

```html
<div id="app">
	{{msg | filterA}}
</div>
		
<script type="text/javascript">	
	new Vue({
		el: '#app',
		data: {
			msg: 'hello',
		},
		filters: {
			filterA: function(val){
				return val + "!!!";
			}
		}
	})
</script>
```

运行结果和全局过滤器一样。

常见的过滤器用法有两种：

1. 在双花括号中插值

```vue
{{'ok' | filterA}}
```

2. 在 `v-bind` 表达式中使用

```html
<div v-bind:data="'ok' | filterA"></div>
```

下面我们对过滤器的调用做简答的演示：

**（1）执行多个过滤器**

```html
<div id="app">
	{{'2018' | filterA | filterB}}
</div>
		
<script type="text/javascript">
	new Vue({
		el: '#app',
		filters: {
			filterA: function(val){
				return val + "年";
			},
			filterB: function(val){
				return val + " Hello World";
			}
		}
	})
</script>
```

运行结果：

```
2018年 Hello World
```

上面代码中，`2018` 作为参数传递给 `filterA` 函数，而 `filterA` 函数的返回值作为参数传递给 `filterB` 函数，最终结果显示的是 `filterB` 返回值。

**（2）过滤器传参**

```html
<div id="app">
	{{'2018' | filterA('07','17')}}
</div>
		
<script type="text/javascript">
	new Vue({
		el: '#app',
		filters: {
			filterA: function(val,arg1,arg2){
				return val + "-" + arg1 + '-' + arg2;
			}
		}
	})
</script>
```

运行结果：

```
2018-07-17
```

上述代码中，`filterA` 的第一个参数是模板中字符串的值，依次是 `filterA` 被调用时传递的参数。

**（3）多值过滤**

```html
<div id="app">
	{{'Hello','World' | filterA}}
</div>
		
<script type="text/javascript">
	new Vue({
		el: '#app',
		filters: {
			filterA: function(v1,v2){
				return v1 + " " + v2;
			}
		}
	})
</script>
```

运行结果：

```
Hello World
```

上述代码表示 `Hello`，`World` 两个字符串分别作为参数传递给 `filterA` 函数。

### 6、directive 自定义指令

 除了核心功能默认内置的指令 (`v-model` 和 `v-show`)，Vue 也允许注册自定义指令。注意，在 Vue2.0 中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。 

当页面加载时，该元素将获得焦点 (注意：`autofocus` 在移动版 Safari 上不工作)。事实上，只要你在打开这个页面后还没点击过任何内容，这个输入框就应当还是处于聚焦状态。现在让我们用指令来实现这个功能：

```
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```

如果想注册局部指令，组件中也接受一个 `directives` 的选项：

```
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

然后你可以在模板中任何元素上使用新的 `v-focus` 属性，如下：

```
<input v-focus>
```

#### 钩子函数

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

我们会在[稍后](https://cn.vuejs.org/v2/guide/render-function.html#虚拟-DOM)讨论[渲染函数](https://cn.vuejs.org/v2/guide/render-function.html)时介绍更多 VNodes 的细节。

- `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。

接下来我们来看一下钩子函数的参数 (即 `el`、`binding`、`vnode` 和 `oldVnode`)。

#### 钩子函数参数

指令钩子函数会被传入以下参数：

- `el`：指令所绑定的元素，可以用来直接操作 DOM。

- ```
  binding
  ```

  ：一个对象，包含以下属性：

  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。

- `vnode`：Vue 编译生成的虚拟节点。移步 [VNode API](https://cn.vuejs.org/v2/api/#VNode-接口) 来了解更多详情。

- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 [`dataset`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset) 来进行。



# 