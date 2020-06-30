# Vue 初级

## 大纲知识点：

* Vue指令
* Vue 基本属性
* Vue组件通信



## Vue 基本属性

#### data 属性

在.vue扩展名文件下，data属性必须定义为函数形式，在普通的Vue对象中，data属性就是一个对象。

相当于react中state，代表了当前组件的状态；组件呈现一个什么样的状态，data属性就必须有什么样的描述。

#### el属性

Vue 对象/组件将要挂载页面元素，可以使用选择器

- **类型**：`string | Element`   选择器|HTML元素

- **限制**：只在用 `new` 创建实例时生效。

- **详细**：

  提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。



```javascript
new Vue({
  el:"#app"
})
```

#### components属性

- **类型**：`Object`
- **详细**：

包含 Vue 实例可用组件的哈希表。

#### methods属性

事件处理函数、组件业务逻辑函数等等都必须定义在methods属性中，注意定义在method属性中的函数，不能使用箭头函数

- **类型**：`{ [key: string]: Function }` 对象

- **详细**：

  methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 `this` 自动绑定为 Vue 实例。

  

  > 注意，**不应该使用箭头函数来定义 method 函数** (例如 `plus: () => this.a++`)。理由是箭头函数绑定了父级作用域的上下文，所以 `this` 将不会按照期望指向 Vue 实例，`this.a` 将是 undefined。



#### computed计算属性

- **类型**：`{ [key: string]: Function | { get: Function, set: Function } }`

```
{
	key:function
	key:{
	
	}
}
```

计算属性对应的是定义在data属性中数据，当参与计算的data中的数据发生变化，相应的计算属性对应函数会被调用，重新计算并且返回结果。计算属性会监听data中参与计算的数据。



计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。注意，如果某个依赖 (比如非响应式属性) 在该实例范畴之外，则计算属性是**不会**被更新的。



#### watch 监听属性

监听定义在data属性中的数据，监听的数据发生变化，就会触发相应的处理函数

**类型**：`{ [key: string]: string | Function | Object | Array }` 

```javascript
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5
      }
    }
  },
  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 方法名
    b: 'someMethod',
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: 'someMethod',
      immediate: true
    },
    // 你可以传入回调数组，它们会被逐一调用
    e: [
      'handle1',
      function handle2 (val, oldVal) { /* ... */ },
      {
        handler: function handle3 (val, oldVal) { /* ... */ },
        /* ... */
      }
    ],
    // watch vm.e.f's value: {g: 5}
    'e.f': function (val, oldVal) { /* ... */ }
  }
})
vm.a = 2 // => new: 2, old: 1
```



#### 监听属性和计算属性的区别

https://www.cnblogs.com/jiajialove/p/11327945.html







## Vue 指令

#### v-show

根据表达式之真假值，切换元素的 `display` CSS 属性。

当条件变化时该指令触发过渡效果。

v-show绑定的boolean值，如果绑定值是true，则当前元素显示，如果绑定的值是false，则当前元素隐藏



#### v-bind

动态地绑定一个或多个属性，或一个组件 prop 到表达式。



#### v-if   v-else   v-else-if

有条件的渲染元素或者组件，只有v-if可以单独使用，v-else或者v-elsep-if必须与v-if联用

v-if：如果指令绑定的表达式的取值为true，则指令所在的元素被渲染，否则则不渲染

v-else：如果上一兄弟元素的v-if取值为false，则v-else所在元素被渲染，反之，上一兄弟元素的v-if绑定的值为true，则不渲染

v-else-if：如果上一兄弟元素绑定的表达式的值没有匹配到，则判断v-else-if的取值，如果是true，则指令所在元素被渲染，否则不渲染



#### v-text

更新元素的 `textContent`。如果要更新部分的 `textContent`，需要使用 `{{ Mustache }}`插值。



```html
<span v-text="msg"></span>
<!-- 和下面的一样 -->
<span>{{msg}}</span>
```



#### v-html

等同于innerHTML，更新元素的 innerHTML



#### v-for

基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 `alias in expression`，为当前遍历的元素提供别名：

```html
<div class="list_item" v-for="(number,index) in items" :key="index">{{number}}</div>
```



#### v-on

绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。

用在普通元素上时，只能监听原生 DOM 事件用在自定义元素组件上时，也可以监听子组件触发的自定义事件。

##### 事件修饰符

- `.stop` - 调用 `event.stopPropagation()`   阻止事件冒泡。
- `.prevent` - 调用 `event.preventDefault()`。阻止元素的默认行为。
- `.capture` - 添加事件侦听器时使用 capture 模式。
- `.self` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
- `.{keyCode | keyAlias}` - 只当事件是从特定键触发时才触发回调。
- `.native` - 监听组件根元素的原生事件。
- `.once` - 只触发一次回调。
- `.left` - (2.2.0) 只当点击鼠标左键时触发。
- `.right` - (2.2.0) 只当点击鼠标右键时触发。
- `.middle` - (2.2.0) 只当点击鼠标中键时触发。
- `.passive` - (2.3.0) 以 `{ passive: true }` 模式添加侦听器



```HTML
<!-- 方法处理器 -->
<button v-on:click="doThis"></button>

<!-- 动态事件 (2.6.0+) -->
<button v-on:[event]="doThis"></button>

<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- 缩写 -->
<button @click="doThis"></button>

<!-- 动态事件缩写 (2.6.0+) -->
<button @[event]="doThis"></button>

<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>

<!-- 阻止默认行为 -->
<button @click.prevent="doThis"></button>

<!-- 阻止默认行为，没有表达式 -->
<form @submit.prevent></form>

<!--  串联修饰符 -->
<button @click.stop.prevent="doThis"></button>

<!-- 键修饰符，键别名 -->
<input @keyup.enter="onEnter">

<!-- 键修饰符，键代码 -->
<input @keyup.13="onEnter">

<!-- 点击回调只会触发一次 -->
<button v-on:click.once="doThis"></button>

<!-- 对象语法 (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```



#### v-model 双向绑定

只能输入元素上使用

##### 修饰符：

- [`.lazy`](https://cn.vuejs.org/v2/guide/forms.html#lazy) - 取代 `input` 监听 `change` 事件
- [`.number`](https://cn.vuejs.org/v2/guide/forms.html#number) - 输入字符串转为有效的数字
- [`.trim`](https://cn.vuejs.org/v2/guide/forms.html#trim) - 输入首尾空格过滤





## Vue 组件通信



#### props属性

- **类型**：`Array | Object`

- **详细**：

  props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。



#### 发布订阅模式



#### 父传子

*1* 、在父组件中的子组件标签中定义传递数据属性，需要使用动态绑定来传递数据

*2* 、在子组件中，增加props属性，在props属性中定义一个与传递数据时定义名称相同属性用来接受数据，然后表明数据数据类型

*3* 、使用数据

```vue
  //父组件
<NavigationBar title="我的"/>


//子组件
<template>
  <div class="navigation_bar_container">
    <div class="navigation_bar_wrapper">
      <div class="navigation_bar_back_icon">
        <img src="../assets/fanhui.png"
        v-on:click="onClicBack"/>
      </div>
      <div>{{title}}</div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  //props属性
  props:{
    title:String//如果传递的数据不符合定义时的数据类型，vue将抛出警告
  }
```



### 子传父

利用Vue提供的触发自定义事件$emit函数实现

*1* 、子组件需要向父组件传递数据时，使用$emit函数出发自定义事件，并传递数据

*2* 、在父组件中，增加对自定义事件的监听，子组件触发自定义事件后，父组件监听并执行事件对应的处理函数，然后获取子组件传递给父组件的数据



```javascript
//子组件
methods:{
    onClicBack(){
      // 函数
      //参数1：自定义事件名称
      //参数2:事件触发需要传递的数据
      this.$emit("goback",111111)
    }
  }

//父组件
//监听自定义事件goback，触发后执行函数back
  <NavigationBar title="我的"
    v-on:goback="back"/>
```



#### 跨组件传值（兄弟组件传值）

 在Vue中，兄弟组件传值我们使用的是eventBus方式

首先，创建一个名称为EventBus的Vue对象（组件）：

```javascript
import Vue from "vue";
//中转站
//创建了一个Vue对象，使用这个vue对象作为中转站
const EventBus = new Vue({

})

export default EventBus;
```



然后，在将要传递数据的组件中引入，当我们想要传递数据的时候，使用EventBus对象触发一个自定义事件，将需要传递的数据以事件触发方式传递：

```vue
<template>
  <div class="input_container">
    <div class="input">
      <input type="text" placeholder="请输入将要提交的内容"
      v-model="inputValue"/>
    </div>
    <div class="button">
      <button v-on:click="onClcikSumit">提交</button>
    </div>
  </div>
</template>

<script>
import EventBus from "../EventBus/EventBus";

export default {
  data(){
    return{
      inputValue:""
    }
  },
  methods:{
    onClcikSumit(){
      // var inputValue = this.$refs.input.value;
      // window.console.log(this.inputValue);
      //$emit触发一个自定义事件
      EventBus.$emit("submitMessage",this.inputValue);
    }
  }
}
</script>
```



最后，在接受数据的组件中，同样引入EventBus组件，在接受数据组件挂载结束的生命周期函数中，监听触发的自定义事件：

```vue
<template>
  <div class="content_container">
    {{content}}
  </div>
</template>

<script>
import EventBus from "../EventBus/EventBus";

export default {
  data(){
    return{
      content:""
    }
  },
  mounted(){
    EventBus.$on("submitMessage",(message)=>{
      this.content = message
      window.console.log(message)
    });
  }
}
</script>
```



当事件触发后，就会监听到事件，然后执行事件对应的函数，获取到传递的数据。































