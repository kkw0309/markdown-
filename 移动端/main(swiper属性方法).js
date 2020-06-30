// $('.swiper-scrollbar').html('');
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    // direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    // speed:10000,//滚动速度
    initialSlide :2,//设定初始化时slide的索引。
    grabCursor : true,//鼠标覆盖Swiper时指针会变成手掌形状
    autoplay:true,//自动轮播，默认三秒一次
    // autoplay: {
    //     delay: 3000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: true,//是否禁止自动轮播。默认为true：停止。为false时，用户操作之后自动轮播不会停
    //     },


    // slidesPerView: 4,//设置容器能够同时显示slide的数量
    // spaceBetween: 40,//设置slide的间隔
    // //breakpointsInverse: true,打开后，breakpoints将以反方向计算
    // breakpoints: { //断点：设置不同的值,与slidesPerView，spaceBetween同时使用
    //   //当宽度小于等于320
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 10
    //   },
    //  //当宽度小于等于480
    //   480: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   //当宽度小于等于640
    //   640: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   }
    // },

    effect:'cube',//设置滚动样式为3d滚动
    // effect:'flip',//设置滚动样式为自转
    // effect:'fade',//设置滚动样式为淡入淡出
    // effect:'slide',//默认值,设置滚动样式为左右位移
    // effect:'coverflow',//,设置滚动样式为左右位移(有间隔)


    uniqueNavElements:true,//默认为true，仅内部分页器有效，false时，外部的分页器有效

    nested:true,//默认是false,用于嵌套相同方向的swiper时，当切换到子swiper时停止父swiper的切换。把子swiper的nested设置为true。

    preventClicks:true,//当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转。

    slideToClickedSlide:false,//默认为false，设置为true则点击slide会过渡到这个slide。


    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    type: 'bullets',//设置分页器为圆点
    // type: 'fraction',//设置分页器为1/3
    // type : 'progressbar',//设置分页器为进度条
    // type : 'custom',//设置分页器为自定义
    // progressbarOpposite: true,//设置分页器为进度条是竖直排列
    // bulletElement : 'li',//设定分页器指示器（小点）的HTML标签(默认span)
    dynamicBullets:true,//当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
    dynamicMainBullets: 2,//动态分页器的主指示点的数量,默认1
    hideOnClick :true,//设置点击slide隐藏分页器
    clickable :true,//点击分页器的指示点分页器会控制Swiper切换。
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hideOnClick: true,//设置点击slide隐藏按钮(配合css的opacity属性)
    },

    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',//获取滚动条
    //   draggable: true,//设置滚动条可拖动
    //   snapOnRelease: false,//设置滚动条拖动松开是否自动贴合
    //   dragSize: 30,//设置滚动条长度
    //   hide: true,//设置滚动条是否自动隐藏
    // },

    //设置键盘切换
    // keyboard: {
    //     enabled: true,//设置键盘切换
    //     onlyInViewport: true,//默认仅控制当前窗口内的swiper切换。当swiper离开可视区域则无法切换。
    // },

    //设置鼠标切换
    freeMode: true,//默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
    mousewheel: {
        // sensitivity : 1,//设置鼠标切换速度
      },
    //   zoom:true,//设置图片放大缩小
})     
// mySwiper.scrollbar.$el.css('height','15px');//设置外滚动条css属性
// mySwiper.scrollbar.$dragEl.css('background','orange');//设置内滚动条css属性
// mySwiper.scrollbar.updateSize();//更新滚动条
// mySwiper.keyboard.disable()//禁止键盘控制
// mySwiper.keyboard.enable()//开启键盘控制

// 鼠标移入显示按钮,移出隐藏(配合css属性使用)
mySwiper.el.onmouseover=function(){
    mySwiper.navigation.$nextEl.removeClass('hide');
    mySwiper.navigation.$prevEl.removeClass('hide');
  }
  mySwiper.el.onmouseout=function(){
    mySwiper.navigation.$nextEl.addClass('hide');
    mySwiper.navigation.$prevEl.addClass('hide');
  }
