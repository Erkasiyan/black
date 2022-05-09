$(document).ready(function(){
	$("input[name='']").change(function(){
		$('#avtlabel').css('visibility','visible');
		if(this.id == 'm'){
			$('#mvt').css('visibility','visible');
			$('#fvt').css('visibility','hidden');
		}
		else if(this.id == 'f'){
			$('#fvt').css('visibility', 'visible');
			$('#mvt').css('visibility','hidden');
		}
	});
});

$(document).ready(function(){
		// 홈버튼 이벤트 처리
		$('#hbtn').click(function(){
			$(location).attr('href', '/black/');			
		});
		// 리셋버튼 이벤트 처리
		$('#rbtn').click(function(){
			document.frm.reset();
		});
	});

$(document).ready(function() {
	$(document).ready(function(){
		$('#ckmsg').css('display', 'none');
		$('#pwck').keyup(function(){
			var pw = $('#pw').val();
			var pwck = $('#pwck').val();
			
			if(pw == pwck){
				$('#pwck').removeAttr('name');
				$('#ckmsg').html('*** 비밀번호가 일치합니다 ***').css('color', 'blue');
				$('#ckmsg').css('display', 'block');
			} else {
				$('#ckmsg').html('*** 비밀번호가 다릅니다. ***').css('color', 'red');
				$('#ckmsg').css('display', 'block');
			}
		});
	});
	
	$('#jbtn').click(function () {
  		$("#frm").submit();
	});
});