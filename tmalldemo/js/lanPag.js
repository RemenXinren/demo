/**
 * Created by Administrator on 2017/5/3.
 */
$(document).ready(function () {
    var $username = $('.username-field').find('input');
    var $cue = $('.usernamecue');
    var $denglu = $('.denglu');
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;

    $denglu.click(function () {
        if (reg.test($username.val())){
            location.href = 'index.html';
        }else {
            $cue.css('visibility','visible');
        }
    });
    $username.focus(function () {
        $cue.css('visibility','hidden');
    })

});