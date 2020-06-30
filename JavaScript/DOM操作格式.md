1、添加
1）获取到要添加到的元素（父元素）
javaScript：由事件驱动的客户端脚本语言
var :定义变量的关键字
document：文档
get：获取
Element：元素
By：通过
Id：id名称
```javascript
var 父元素 = document.getElementById('id');
```


text：文本
Node：节点
element：元素
create：创建
append：拼接
Child：孩子
2）创建要添加的项目
```javascript
//文本节点的创建方式
var textNode = document.createTextNode('文本');
var elementNode = document.createElement('元素名称');

//调用：谁调用就是往谁添加  参数：要添加的对象
elementNode.appendChild(textNode);
```
3）添加到父元素
```javascript
父元素.appendChild(elementNode);
```
button：按钮
onclick：点击事件关键字
function：定义函数的关键字
remove：删除
parent：父级
2、单行删除
1）找到要被删除的项目
```javascript
var button = document.createElement('button');
button.onclick = function(){
  父元素.removeChild(button.parentElement.parentElement);
}
```

children：孩子们
length：长度
Array：数组
temp：临时的
check：检查
first：第一的
push：推入

3、选中删除
1）从那个里面删除
```javascript
var 父元素 = document.getElementById('id');
```
2）找出被选中的项目
3）放到新数组

```javascript
var array = 父元素.children;
var tempArray = new Array();
for(index = 1; index < array.length; index++){
  var checBox = array[index].firstElementChild.firstElementChild;
  if(checBox.checked){
    tempArray.push(array[index]);
  }
}
```
4）遍历执行删除
```javascript
for(index = 0; index < tempArray.length; index++){
  父元素.removeChild(tempArray[index]);
}
```


4、全部删除
1）从那个里面删除
```javascript
var 父元素 = document.getElementById('id');
```
2)找到所有的删除项目
```javascript
var array = 父元素.children;
var tempArray = new Array();
for(index = 1; index < array.length; index++){
  tempArray.push(array[index]);
}
```
3）放到新数组
4）遍历执行删除
```javascript
for(index = 0; index < tempArray.length; index++){
  父元素.removeChild(tempArray[index]);
}
```

5)全选
1）找出所有项目
2）判断全选按钮的状态
3）遍历所有项目将选择状态设置为全选按钮的选中状态
