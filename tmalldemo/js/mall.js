/**
 * Created by Administrator on 2017/4/27.
 */
$(document).ready(function () {
   var $leftNav = $('.left-nav');
   var $rtop = $('.r-top');
   var $topSearch = $('.sid-search');



    $(window).scroll(function(){
        if($(document).scrollTop() >= 300){
            $leftNav.css("visibility","visible");
        } else{
            $leftNav.css("visibility","hidden");
        }
        if($(document).scrollTop() >= 100){
            $rtop.css("visibility","visible");
        } else{
            $rtop.css("visibility","hidden");
        }
        if($(document).scrollTop() >= 700){
            $topSearch.css("visibility","visible");
        } else{
            $topSearch.css("visibility","hidden");
        }
    });

    $('.left-nav a').each(function(){
        $(this).click(function () {
            var href=$(this).attr("href");
            var pos=$(href).offset().top;
            $('html,body').animate({scrollTop:pos - 60},800);
        })
    });
























});