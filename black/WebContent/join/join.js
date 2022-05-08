$(document).ready(function(){
	$("input[name='user']").change(function(){
		if(this.id == 'm'){
			$('#mvt').css('visibility', 'visible');
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
			$(location).attr('href', '/black1/');			
		});
		// 리셋버튼 이벤트 처리
		$('#rbtn').click(function(){
			document.frm.reset();
		});	
	});

document.getElementById('jbtn').onclick = function(){
		document.frm.action="/black1/join/joinProc.html";
}
