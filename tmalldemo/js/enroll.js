$(document).ready(function(){
	var $usernameInput = $('.un-input').find('input');
	var $usernameCode = $('.uc-input').find('input');
	var $passwdInput = $('.pd-input').find('input');
	
	var $usernameCue = $('.un-input').find('label');
	var $usernameCodeCue = $('.uc-input').find('label');
	var $passwdCue = $('.pd-input').find('label');
	
	var $unCue = $('.un-cue');
	var $ucCue = $('.uc-cue');
	var $pdCue = $('.pd-cue');
	var $ucButton = $('.uc-button');
	var reg = /^1[3|4|5|7|8][0-9]{9}$/;
	var regPd = /^[\w]{6,12}$/;
	
	$usernameInput.focus(function(){
		$usernameCue.css('display','none');
		$unCue.css('visibility','hidden');
	});
	$usernameCode.focus(function(){
		$usernameCodeCue.css('display','none');
	});
	$passwdInput.focus(function(){
		$passwdCue.css('display','none');
		$pdCue.css('visibility','hidden');
	});
		
	$usernameInput.blur(function(){
		if($usernameInput.val() == ''){
			$usernameCue.css('display','block');
		}
		
		if( reg.test( $usernameInput.val() ) == false){
			$unCue.css('visibility','visible');
		}else{
			$ucButton.click(function(){
				$ucCue.css('visibility','visible');
			})
		}
	})
	$usernameCode.blur(function(){
		if($usernameCode.val() == ''){
			$usernameCodeCue.css('display','block');
		}
	})
	$passwdInput.blur(function(){
		if($passwdInput.val() == ''){
			$passwdCue.css('display','block');
		}
		
		if( regPd.test( $passwdInput.val() ) == false){
			$pdCue.css('visibility','visible');
		}else{
			
		}
	})
	
	
	
	
	
	
	
	
})
