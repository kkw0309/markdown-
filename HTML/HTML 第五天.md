# HTML 第五天(HTML 新元素)
## h5新增input类型

* (1)Input 类型 - email:用于应该包含 e-mail 地址的输入域。
	在提交表单时，会自动验证 email 域的值。
	E-mail: <input type="email" name="user_email" />
* (2)Input 类型 - url
	url 类型用于应该包含 URL 地址的输入域。

	在提交表单时，会自动验证 url 域的值。
	Homepage: <input type="url" name="user_url" />
* Input 类型 - number
	number 类型用于应该包含数值的输入域。

	您还能够设定对所接受的数字的限定：
	<input type="number" name="points" min="1" max="10" />

	Input 类型 - range
	range 类型用于应该包含一定范围内数字值的输入域。

	range 类型显示为滑动条。

	您还能够设定对所接受的数字的限定：
	<input type="range" name="points" min="1" max="10" />

* Input 类型 - Date Pickers（日期选择器）
	HTML5 拥有多个可供选取日期和时间的新输入类型：

	date - 选取日、月、年
	month - 选取月、年
	week - 选取周和年
	time - 选取时间（小时和分钟）
	datetime - 选取时间、日、月、年（UTC 时间）
	datetime-local - 选取时间、日、月、年（本地时间）

## 新媒体元素
### vedio
	<video> 元素支持三种视频格式：MP4、WebM、Ogg。
	可以在 <video> 和 </video> 标签之间放置文本内容，这样不支持 <video> 元素的浏览器就可以显示出该标签的信息。
	 ffmpeg




```HTML
    <!DOCTYPE html>
<html>
<body>

<video width="320" height="240" controls>
  <source src="/statics/demosource/movie.mp4"  type="video/mp4">
  <source src="/statics/demosource/movie.ogg"  type="video/ogg">
  您的浏览器不支持 HTML5 video 标签。
</video>

</body>
</html>
    ```

## 补充
HTML5 <col> 标签用于控制表格中的列，使你更加方便的为表格中的列应用样式。
    <colgroup> 和 <col>


id

class
*

电商
音视频网站
直播
数据可视化
echarts
功能性
小程序
node.js
