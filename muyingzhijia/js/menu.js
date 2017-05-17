/**
 * Created by Administrator on 2017/5/4.
 */
$(document).ready(function () {
   var $aLi = $('.list-l').find('li');
   var $aDiv = $('.list-r').children('div');



    $aLi.click(function () {
       var index = $(this).index();
       $aLi.attr('class','');
       $(this).attr('class','active');
       $aDiv.attr('class','');
       $($aDiv[index]).attr('class','toplist');
   });




});