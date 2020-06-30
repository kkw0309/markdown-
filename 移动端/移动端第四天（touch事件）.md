# 移动端事件

## 目标
* 掌握原生移动端事件
* 掌握Zepto


## 原生移动端touch事件

#### touchstart手指放到屏幕上的时候触发

#### touchmove手指在屏幕上移动的时候触发  

#### touchend手指从屏幕上拿起的时候触发

#### touchcancel系统取消touch事件的时候触发


##  原生移动端touch属性

#### 触摸点相对于浏览器窗口viewport的位置 client / clientY

#### 触摸点相对于页面的位置 pageX / pageY

#### 触摸点相对于屏幕的位置 screenX /screenY

#### touch对象的unique ID identifier

## Zepto下的移动端事件   

#### Tap

#### singleTap

#### doubleTap

#### longTap

#### Swipe

#### swipeLeft

```javascript
$(".class").swipeLeft(function(){

})
```

#### swipeRight

#### swipeUp

#### swipeDown
