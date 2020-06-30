# Vue 初级

## 大纲知识点：

* Vue指令
* Vue 基本属性



## Vue 基本属性

#### data 属性

在.vue扩展名文件下，data属性必须定义为函数形式，在普通的Vue对象中，data属性就是一个对象。

相当于react中state，代表了当前组件的状态；组件呈现一个什么样的状态，data属性就必须有什么样的描述。

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











