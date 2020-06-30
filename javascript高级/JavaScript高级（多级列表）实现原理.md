# 多级列表实现

## 下拉列表
### 布局

```HTML
<div class="container">
  <ul>
    <li>列表项1
      <div class="子列表1">
        <ul>
          <li class="">子列表项1
            <div class="details详情">

            </div>
          </li>
          <li class="">子列表项1</li>
          <li>子列表项1</li>
          <li>子列表项1</li>
          <li>子列表项1</li>
          <li>子列表项1</li>
        </ul>
      </div>
    </li>
    <li>列表项2
      <div class="子列表1">
        <ul>
          <li>子列表项1</li>
          <li>子列表项1</li>
          <li>子列表项1</li>
          <li>子列表项1</li>
          <li>子列表项1</li>
          <li>子列表项1</li>
        </ul>
      </div>
    </li>
    <li>列表项3</li>
    <li>列表项4</li>
    <li>列表项5</li>
  </ul>
</div>
```

```CSS
.container ul>li
{
  float: left;
}

.子列表1
{
  position: absolute;


  display: none;
}

..子列表1 div/ul
{

}
```

## 侧边栏




## JavaScript
### 下拉列表
```JavaScript
$(".container ul li").hover(function(){
  $(this).children('div').show();
  $(this).css({color:'red'})
},
function(){
  $(this).children('div').hide();
  $(this).css({color:''})
})
```
