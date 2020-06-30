# HTML 第四天

## 目标
* 了解表单以及表单的使用场景
* 表单标签
* 表单标签的属性
* 掌握表单控件
* label 标签
* 案例

## 表单
表单在网页设计中的作用非常重要，网页要实现采集数据的功能，表单是不可或缺的。通过使用表单，可以采集访问者的信息，如姓名、性别、年龄、职业、联系方式等，也可以制作调查表、留言簿等，从而获取重要的数据以满足各种需要。

#### 表单的应用场景
* Form 表单：注册登陆、收集用户信息
* 编辑、提交信息
* 问卷调查、用户反馈调查
* 搜索引擎

### HTML 表单用于收集不同类型的用户输入。
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>HTML 表单</title>
    </head>
    <body>
​   
        <form action="">
            Name : <input type="text" name="name"><br />
            Age : <input type="text" name="age">
        </form>
​
        <p><b>注意：</b>  表单本身是不可见的。并且注意一个文本字段的默认宽度是20个字符。</p>
​
    </body>
</html>
```
表单是一个包含表单元素的区域。表单元素是允许用户在表单中输入内容,比如：文本域(textarea)、下拉列表、单选框(radio-buttons)、复选框(checkboxes)等等。

表单使用表单标签 `<form>` 来设置:
```HTML
<form> //form表单
.
input 元素 // 用户输入空间
.
</form>
```

#### HTML 表单的的属性
###### action
action 属性规定当提交表单时，向何处发送表单数据。

语法：
```HTML
<form action="URL">
```
URL:当表单提交时向何处发送表单数据。

###### method
method 方法规定如何发送表单数据`form-data`（表单数据会被发送到在 `action` 属性中规定的页面中）。表单数据可被作为 `URL` 变量的形式来发送`method="get"`或者作为 `HTTP post` 事务的形式来发送`method="post"`。

* GET：

    将表单数据以名称/值对的形式附加到 URL 中

    URL 的长度是有限的（大约 3000 字符）

    绝不要使用 GET 来发送敏感数据！（在 URL 中是可见的）

    对于用户希望加入书签的表单提交很有用

    GET 更适用于非安全数据，比如在 Google 中查询字符串
* POST：

    将表单数据附加到 HTTP 请求的 body 内（数据不显示在 URL 中）

    没有长度限制

    通过 POST 提交的表单不能加入书签



#### HTML 表单的输入元素
多数情况下被用到的表单标签是输入标签 `<input>`。输入类型是由类型属性`type`定义的。大多数经常被用到的输入类型如下：

##### 文本域（Text Field）
文本域通过`<input type="text">` 标签来设定，当用户要在表单中键入字母、数字等内容时，就会用到文本域。
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>HTML 表单</title>
    </head>
    <body>
​   
        <form>
            First name: <input type="text" name="firstname"><br />
            Last name: <input type="text" name="lastname">
        </form>
​
        <p><b>注意：</b>  表单本身是不可见的。并且注意一个文本字段的默认宽度是20个字符。</p>
​
    </body>
</html>
```
##### 密码字段
密码字段通过标签`<input type="password">` 来定义，密码字段字符不会明文显示，而是以星号或圆点替代：
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>HTML 表单</title>
    </head>
    <body>
​   
        <form>
            First name: <input type="text" name="firstname"><br />
            Last name: <input type="text" name="lastname"><br />
            password: <input type="password" name="password">
        </form>
​
        <p><b>注意：</b>  表单本身是不可见的。并且注意一个文本字段的默认宽度是20个字符。</p>
​
    </body>
</html>
```
##### 单选按钮（Radio Buttons）
<input type="radio"> 标签定义了表单单选框选项:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>HTML 表单</title>
    </head>
    <body>
​   
        <form>
            First name: <input type="text" name="firstname"><br />
            Last name: <input type="text" name="lastname"><br />
            password: <input type="password" name="password"><br />
            <input type="radio" name="sex" value="male">Male<br />
            <input type="radio" name="sex" value="female">Female
        </form>
​
        <p><b>注意：</b>  表单本身是不可见的。并且注意一个文本字段的默认宽度是20个字符。</p>
​
    </body>
</html>
```

##### 复选框（Checkboxes）
`<input type="checkbox">` 定义了复选框. 用户需要从若干给定的选择中选取一个或若干选项:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>HTML 表单</title>
    </head>
    <body>
​   
        <form>
            First name: <input type="text" name="firstname"><br />
            Last name: <input type="text" name="lastname"><br />
            password: <input type="password" name="password"><br />
            <input type="radio" name="sex" value="male">Male<br />
            <input type="radio" name="sex" value="female">Female
            <input type="checkbox" name="vehicle" value="Bike">I have a bike<br />
            <input type="checkbox" name="vehicle" value="Car">I have a car
        </form>
​
        <p><b>注意：</b>  表单本身是不可见的。并且注意一个文本字段的默认宽度是20个字符。</p>
​
    </body>
</html>
```
##### 提交按钮(Submit Button)
`<input type="submit">` 定义了提交按钮.
当用户单击确认按钮时，表单的内容会被传送到另一个文件。表单的动作属性定义了目的文件的文件名。由动作属性定义的这个文件通常会对接收到的输入数据进行相关的处理。:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>HTML 表单</title>
    </head>
    <body>
​   
        <form>
            First name: <input type="text" name="firstname"><br />
            Last name: <input type="text" name="lastname"><br />
            password: <input type="password" name="password"><br />
            <input type="radio" name="sex" value="male">Male<br />
            <input type="radio" name="sex" value="female">Female
            <input type="checkbox" name="vehicle" value="Bike">I have a bike<br />
            <input type="checkbox" name="vehicle" value="Car">I have a car <br />
            <input type="submit" value="Submit">
        </form>
​
        <p><b>注意：</b>  表单本身是不可见的。并且注意一个文本字段的默认宽度是20个字符。</p>
​
    </body>
</html>
```

### label 标签
`<label>` 标签为 `input` 元素定义标注（标记）。
`label` 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果您在 `label` 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>W3Cschool(w3cschool.cn)</title>
    </head>
    <body>

        <p>点击其中一个文本标签选中选项：</p>

        <form action="/statics/demosource/demo-form.php">
            <label for="male">Male</label>
            <input type="radio" name="sex" id="male" value="male"><br>
            <label for="female">Female</label>
            <input type="radio" name="sex" id="female" value="female"><br><br>
            <input type="submit" value="提交">
        </form>

    </body>
</html>
```

```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>HTML 表单</title>
    </head>
    <body>
​   
        <form action="">
            Name : <input type="text" name="name"><br />
            Age : <input type="text" name="age">
        </form>
​
        <p><b>注意：</b>  表单本身是不可见的。并且注意一个文本字段的默认宽度是20个字符。</p>
​
    </body>
</html>

```
