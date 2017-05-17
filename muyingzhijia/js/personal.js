/**
 * Created by Administrator on 2017/5/5.
 */
$(document).ready(function () {
    var $signout = $('.btn_signout');
    var $cancel = $('.cancel');
    var $mask = $('.touchweb_mask');



    $signout.click(function () {
        $($mask).css('display','block');
    });
    $cancel.click(function () {
        $($mask).css('display','none');
    });
});