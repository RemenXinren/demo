/**
 * Created by Administrator on 2017/5/8.
 */
$(document).ready(function () {
    var $returnTop = $('.return-top');

    $(window).scroll(function(){
        if($(document).scrollTop() >= 300){
            $returnTop.css("visibility","visible");
        } else{
            $returnTop.css("visibility","hidden");
        }
    });
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'cube',
        grabCursor: true,
        autoplay: 2000
    });

});
