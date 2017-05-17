/**
 * Created by Administrator on 2017/3/1.
 */

$(document).ready(function () {
    var $oImg = $('#boxImg');
    var $aLi = $oImg.find('li');
    var $aSpan = $oImg.find('span');
    var timer;
    var $bannerBg = $('.main');
    var bgColor = [
        '#3191ff',
        '#f8cbc5',
        '#e8e8e8',
        '#e8e8e8',
        '#f53737',
        '#000000'
    ];



    $(function () {
        function show(index) {
            var a = index%($aLi.length);
            $aLi.attr('class','');
            $aLi.eq(a).attr('class','topImg');
            $bannerBg.css('background',bgColor[a]);
            $aSpan.attr('class','');
            $aSpan.eq(a).attr('class','on');
            console.log(bgColor[a]);
        }

        function automatic() {
            timer = setInterval(function () {
                var index = $('.topImg').index();
                index += 1 ;
                show(index);
            },3000);
        }
        automatic();

        $aLi.mouseover(function () {
           clearInterval(timer);
        });
        $aLi.mouseout(function () {
            automatic();
        });

        $aSpan.mouseover(function () {
            $aSpan.attr('class','');
            $(this).attr('class','on');
            show($aSpan.index(this));
            clearInterval(timer);

        });

        $aSpan.mouseout(function () {
            automatic();
        });



    });


















});