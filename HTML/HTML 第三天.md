# HTML 第三天

## 目标
* 掌握表格的基本结构
* 掌握单元格的使用
* 完成简历的制作案例




## 表格
`<table>`标签用于定义文档中的表格,
`<table>` 标签定义 `HTML` 表格
一个 `HTML` 表格包括 `<table>` 元素，一个或多个 `<tr>`、`<th>`以及 `<td>` 元素。`<tr>` 元素定义表格行，`<th>` 元素定义表头，`<td>` 元素定义表格单元。更复杂的 HTML 表格也可能包括` <caption>`、`<col>`、`<colgroup>`、`<thead>`、`<tfoot>` 以及 `<tbody>` 元素。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。


## 表格的基本结构
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>表格学习</title>
    </head>
    <body>

        <table border="1">
            <tr>
                <th>姓名</th>
                <th>年龄</th>
            </tr>
            <tr>
                <td>张三</td>
                <td>20</td>
            </tr>
            <tr>
                <td>李四</td>
                <td>18</td>
            </tr>
        </table>

    </body>
</html>
```

### 表格的标题
`<caption>`标签定义表格的标题。
`<caption>` 标签必须直接放置到 `<table>` 标签之后。
您只能对每个表格定义一个标题。
>提示：通常这个标题会被居中于表格之上。然而，`CSS` 属性 `"text-align"` 和 `"caption-side"` 能用来设置标题的对齐方式和显示位置。

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>表格学习</title>
    </head>
    <body>

        <table border="1">
            <caption>信息登记表</caption>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
            </tr>
            <tr>
                <td>张三</td>
                <td>20</td>
            </tr>
            <tr>
                <td>李四</td>
                <td>18</td>
            </tr>
        </table>

    </body>
</html>
```
### 表格的行
`<tr>` 标签定义 `HTML` 表格中的行。一个 `<tr>` 元素包含一个或多个 `<th>` 或 `<td>` 元素。
#### 标签 `<tr>` 的属性
在 HTML 5 中，不支持 <tr> 标签在 HTML 4.01 中的任何属性。

`align`:定义表格行的内容对齐方式。

`bgcolor`:定义表格行的背景颜色。

`valign`:垂直对齐-- top/middle/bottom。

### 表格单元格和表头单元格
#### `<td>`
`<td>` 标签定义 `HTML` 表格中的标准单元格。

`HTML` 表格有两种单元格类型：

* 表头单元格: 包含头部信息（由 `<th>` 元素创建）
* 标准单元格: 包含数据（由 `<td>` 元素创建）

`<th>` 元素中的文本通常呈现为粗体并且居中。
`<td>` 元素中的文本通常是普通的左对齐文本。

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>表格学习</title>
    </head>
    <body>

        <table border="1">
            <caption>信息登记表</caption>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
            </tr>
            <tr>
                <td>张三</td> //标准单元格
                <td>20</td>
            </tr>
            <tr>
                <td>李四</td>
                <td>18</td>
            </tr>
        </table>

    </body>
</html>
```

#### `<th>`
`<th>` 标签定义 `HTML` 表格中的表头单元格。
`HTML` 表格有两种单元格类型：

* 表头单元格: 包含头部信息（由 `<th>` 元素创建）

* 标准单元格:包含数据（由 `<td>` 元素创建）

`<th>` 元素中的文本通常呈现为粗体并且居中。
`<td>` 元素中的文本通常是普通的左对齐文本。
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>表格学习</title>
    </head>
    <body>

        <table border="1">
            <caption>信息登记表</caption>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
            </tr>
            <tr>
                <td>张三</td> //标准单元格
                <td>20</td>
            </tr>
            <tr>
                <td>李四</td>
                <td>18</td>
            </tr>
        </table>

    </body>
</html>
```
### 合并单元格
#### colspan 合并列
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>表格学习</title>
    </head>
    <body>

        <table border="1">
            <caption>信息登记表</caption>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
            </tr>
            <tr>
                <td>张三</td> //标准单元格
                <td>20</td>
            </tr>
            <tr>
                <td>李四</td>
                <td>18</td>
            </tr>
            <tr>
                <td colspan="2">我是合并了一列</td>
            </tr>
        </table>

    </body>
</html>

```

#### rowspan 合并行
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>表格学习</title>
    </head>
    <body>

        <table border="1">
            <caption>信息登记表</caption>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>备注</th>
            </tr>
            <tr>
                <td>张三</td> //标准单元格
                <td>20</td>
                <td rowspan="2">我是一个好学生</td>
            </tr>
            <tr>
                <td>李四</td>
                <td>18</td>
            </tr>
        </table>

    </body>
</html>
```
### `<thead>` `<tfoot>` `<tbody>`
```HTML
<!DOCTYPE html>
<html>
    <head>
        <style type="text/css">
            thead {color:green;}
            tbody {color:blue;}
            tfoot {color:red;}
        </style>
    </head>
    <body>

        <table border="1">
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Savings</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td>Sum</td>
                    <td>$180</td>
                </tr>
            </tfoot>
            <tbody>
                <tr>
                    <td>January</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>February</td>
                    <td>$80</td>
                </tr>
            </tbody>
        </table>

        <p>提示: thead, tbody, 和 tfoot 元素默认不会影响表格的布局。不过，您可以使用 CSS 来为这些元素定义样式，从而改变表格的外观。</p>

    </body>
</html>
```

### 案例

#### 简历
#### 商品列表
