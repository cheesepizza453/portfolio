$(document).ready(function (){


// 링크 영역
	$('.link_btn').click(function(){
		if(!$(this).hasClass('clicked')){
				$(this).addClass('clicked');
				$('.link_area').addClass('clicked');
			}else{
				$(this).removeClass('clicked');
				$('.link_area').removeClass('clicked');
		}
	});


});
