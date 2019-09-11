$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    var items=$(".carousel-inner .item");
    //屏幕大小改变事件
    $(window).on("resize",function () {
        var width=$(window).width();//获取当前屏幕宽度
        if (width>=768){//大屏时
            $(items).each(function (index,value) {
                var imgSrc=$(this).data("largeImage");
                // console.log(imgSrc);
                $(this).html($("<a href=\"javascript:;\" class=\"pcImg\" ></a>")
                    .css("backgroundImage","url('"+imgSrc+"')"))
            })
        }else {//小屏时
            $(items).each(function (index,value) {
                var imgSrc=$(this).data("smallImage");
                $(this).html( '<a href="javascript:;" class="mobileImg"><img src="'+ imgSrc+'" alt="..."></a>');
                console.log(imgSrc);
            });

        }
    }).trigger("resize");
    /*添加移动端的滑动操作*/
    var startX,endX;
    var carousel_inner=$(".carousel-inner")[0];

    /*获取当前轮播图*/
    var carousel=$(".carousel");

    carousel_inner.addEventListener("touchstart",function(e){
        startX= e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function(e){
        endX= e.changedTouches[0].clientX;
        if(endX-startX > 0){
            /*上一张*/
            carousel.carousel('prev');
        }
        else if(endX-startX < 0){
            /*下一张*/
            carousel.carousel('next');
        }
    });
 var ul=$(".wjs_product .nav-tabs");
 var li=ul.find("li");
 var totalWidth=0;
$(li).each(function (index,value) {
    totalWidth+=$(value).innerWidth();
});
    ul.width(totalWidth);
    //使用滑动插件
   var myScroll=new IScroll(".tabs_parent",{
       //设置水平滑动，禁止垂直滑动
       scrollX:true,scrollY:false
   });
});