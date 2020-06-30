## 执行环境对象
当JavaScript文件进入浏览器运行时，会隐式的创建一个全局执行环境对象：

```javascript
var globalContext = {
  全局变量名称：全局变量值,
  全局函数名称：全局函数，
  ......
}
```
把当前执行环境对象 currentContext 切换到全局执行环境对象

```javascript
var currentContext = globalContext;
```

当遇到函数调用或其他作用域运行时：
先创建局部或者其他作用域的执行环境对象：
```javascript
var partContext = {
  全局变量名称：全局变量值,
  全局函数名称：全局函数，
  局部变量名称：局部变量值，
  局部函数：
  ......
}
```
把当前执行环境切换到局部执行环境：
```javascript
currentContext = partContext;
```
局部执行环境执行完成时，将当前执行对象切换到全局执行对象，并且把局部执行环境对象销毁：
```javascript
currentContext = globalContext;
partContext = null;
```
