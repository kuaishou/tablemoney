/**
 * Created by Administrator on 2017/3/9.
 */

'use strict';

$(function() {
    // 当文档加载完成才会执行
    /**
     * 根据屏幕宽度的变化决定轮播图片应该展示什么
     * @return {[type]} [description]
     */
    function resize() {
        // 获取屏幕宽度
        var windowWidth = $(window).width();
        // 判断屏幕属于大还是小
        var isSmallScreen = windowWidth < 0;
        // 根据大小为界面上的每一张轮播图设置背景
        // $('#main_ad > .carousel-inner > .item') // 获取到的是一个DOM数组（多个元素）
        $(' .carousel-inner > .item').each(function(i, item) {
            // 因为拿到是DOM对象 需要转换
            var $item = $(item);
            var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            if(isSmallScreen){
                $item.html('<img src="'+imgSrc+'">')
            }else{
                $item.empty();
            }

        });
    }
    $(window).on('resize', resize).trigger('resize');
});

/*
$('.footer-tab').mousemove(function(){
    $(".footer-im ").removeClass("shows ");
    $(".footer-im ").addClass("showr");

})

$('.footer-tab').mouseout(function(){
    $(".footer-im").removeClass("showr ");
    $(".footer-im").addClass("shows");
})*/
function footertab(id,obj,name1,name2){
    $(id).mousemove(function(){
        $(obj).removeClass(name1);
        $(obj).addClass( name2);

    })

    $(id).mouseout(function(){
        $(obj).removeClass(name2);
        $(obj).addClass(name1);
    })
}
footertab('#tab1',".footer-im1 ","shows1 ","showr1")
footertab('#tab2',".footer-im2 ","shows2 ","showr2")
footertab('#tab3',".footer-im3 ","shows3 ","showr3")
footertab('#tab4',".footer-im4 ","shows4 ","showr4")
footertab('#tab5',".footer-im5 ","shows5 ","showr5")
/*console.log($('.footer-tab'))*/


/*门票详情*/

/* 滚动监听 */
// 定义一个获取所有div的距离高度
var arrOffsetTop = [
    $('.men-li1').offset().top,
    $('.men-li2').offset().top,
    $('.men-li3').offset().top,
    $('.men-li4').offset().top,
];

// 获取每个div的平均高度
var fTotalHgt = 0;
for(var i=0; i<$('.men').length; i++) {
    fTotalHgt += $('.men').eq(i).outerHeight();
}
var fAverageHgt = parseFloat(fTotalHgt / $('.men').length);

// 滚动事件(每次滚动都做一次循环判断)
$(window).scroll(function() {
    for(var i=0; i<$('.men').length; i++) {
        if($(this).scrollTop() > arrOffsetTop[i] - fAverageHgt) {  // 减去一个固定值，是定位准确点
            $('.menpiao-nav').eq(i).addClass('active').siblings().removeClass('active');
        }
    }
});

$(function () {
    var H = 490;
    $(window).scroll(function () {
        var docSccrollTop = $(document).scrollTop();
        if(docSccrollTop > H){
            $("#menpiao-top").css({"position":"fixed","top":0});
            // 此时 nav的位置固定，如果不设置 main部分的margin-top的话，将有一部分内容被挡住 nav的高度+开始设置的20
            $(".men").css("margin-top",60);
        }else{
            $("#menpiao-top").css({"position":"static"});  /*静态定位*/
            $(".men").css("margin-top",0);
        }
    });
});





/* 点击事件 */
$('.menpiao-nav').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('body, html').animate({scrollTop: arrOffsetTop[$(this).index()]}, 500);
});


/*门票预订*/
var jian=document.getElementsByClassName('jian');
var shu=document.getElementsByClassName('shu');
var jia=document.getElementsByClassName('jia');
for(var i=0;i<jia.length;i++){
    jian[i].shu=shu[i];
    jia[i].shu=shu[i];
    jia[i].jian=jian[i];
    jian[i].onclick=function(){
        var n=parseInt(this.shu.innerHTML)
        if(n>0){
            n--;
        }
        if(n==0){
            this.id='jian1';
        }
        this.shu.innerHTML=n;
    };
    jia[i].onclick=function(){
        var n=parseInt(this.shu.innerHTML)
        n++;
        this.shu.innerHTML=n;
        this.jian.id='jian2';
    };
}



// 百度地图API功能
var map = new BMap.Map('allmap');
map.addControl(new BMap.NavigationControl());
map.centerAndZoom(new BMap.Point(109.609925,28.333864), 18);

/*3订票页面获取时间*/





