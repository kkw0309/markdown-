# HTML、CSS 总结

### `<a>`target
`_blank _self _new`
属于a标签的一个属性，控制我们超链接标签打开方式，是否是当前页面打开或者是新开页面打开、页面跳转


### overflow属性：规定当内容溢出元素框时发生的事情。
* overflow:visible	|hidden	|scroll	|auto
* visible	默认值。内容不会被修剪，会呈现在元素框之外。
* hidden	内容会被修剪，并且其余内容是不可见的。
* scroll	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
* auto	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
* inherit	规定应该从父元素继承 overflow 属性的值。

* overflow-x:如果希望设置水平滚动条，需要同时设置white-space: nowrap;属性。
* overflow-y:

### visibility属性：设置或检索是否显示对象。
visible：设置对象可视
hidden：设置对象隐藏
#### visibility:hidden与display:none的区别
* visibility:hidden设置不可见的元素也会占据页面上的空间。
* display:none设置元素的不可见， 不占据页面空间。
* visibility: hidden; /*元素隐藏，位置保留*/
* display:none;/*元素隐藏，位置不保留*/


div+css
### 弹性盒子：弹性盒子是 CSS3 的一种新的布局模式,弹性盒（ Flexible Box 或 flexbox），是当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式.

引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。
1、 display属性定义为弹性盒子容器。
	语法:display：flex | inline-flex
2、flex-direction 属性指定了弹性子元素在父容器中的位置。
	语法：
    direction:方向
	flex-direction: row | row-reverse | column | column-reverse
	* row(行)：横向从左到右排列（左对齐），默认的排列方式。
	* row-reverse（反向）：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
	* column（列）：纵向排列。
	* column-reverse：反转纵向排列，从后往前排，最后一项排在最上面

3、（适用、适应）justify-content 属性
	内容对齐（justify-content）属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐。
	语法：
	justify-content: flex-start | flex-end | center | space-between | space-around

	* flex-start：弹性项目向行头紧挨着填充。这个是默认值。
	* flex-end：弹性项目向行尾紧挨着填充。
	* center：弹性项目居中紧挨着填充。
	* space-between：弹性项目平均分布在该行上。
	* space-around：弹性项目平均分布在该行上，两边留有一半的间隔空间。
4、align-items 属性设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式。
语法
align-items: flex-start | flex-end | center | baseline | stretch
各个值解析:
	flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
	flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
	center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
	baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
	stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。
5、flex-wrap： 属性规定flex容器是单行或者多行
	flex-wrap: nowrap|wrap|wrap-reverse|
	nowrap	默认值。规定灵活的项目不拆行或不拆列。
	*wrap	规定灵活的项目在必要的时候拆行或拆列。
	wrap-reverse	规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序。

6、子元素的属性：
	flex:指定弹性子元素如何分配空间
7、子元素的属性：
	align-self:定义flex子项单独在侧轴（纵轴）方向上的对齐方式
	align-self:stretch | center | flex-start |flex-end | baseline
	stretch	元素被拉伸以适应容器。
	center	元素位于容器的中心。
	flex-start	元素位于容器的开头。
	flex-end	元素位于容器的结尾。
	baseline	元素位于容器的基线上。
8、小技巧-子元素的属性：
	margin:auto;设置子元素在弹性盒子中自动主轴，侧轴居中对齐。
