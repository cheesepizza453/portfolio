$(document).ready(function () {

	//19세 이상일 경우 레이어팝업 닫힘
	$('.age_a_y').click(function(){
		$('.age').hide();
		$('.main_wrap').show();
		AOS.init();
	})

	//메뉴 스크롤
	$(".menu").on("click", function (e) {
	e.preventDefault();//anchor이벤트의 기본동작을 막는다.
	var thisTarget = $(this).attr("href");
	$(window).scrollTop($(thisTarget).offset().top);
	});

	// 현재 스크롤에 따른 메뉴 활성화 표시
	$(window).scroll(function(){

		var factcheck_height = $('#factcheck').height();
		var story_height = $('#story').height();
		var people_height = $('#people').height();
		var position = $(window).scrollTop();

		if(position > 0 && position < factcheck_height ) {
			$('nav li .menu').removeClass('on');
			$('nav li:nth-child(1) .menu').addClass('on');
		}else if(position > factcheck_height && position < factcheck_height+story_height) {
			$('nav li .menu').removeClass('on');
			$('nav li:nth-child(2) .menu').addClass('on');
		}else if(position > factcheck_height+story_height && position < factcheck_height+story_height+position) {
			$('nav li .menu').removeClass('on');
			$('nav li:nth-child(3) .menu').addClass('on');
		}
	});


	//이미지 슬라이드
	$('.slick-items').slick({
		autoplay : true,
		dots: true,
		speed : 400,
		infinite: true,
		autoplaySpeed: 3000,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		fade: false,
	});

	$('.slick-track').css('width','100%');

	//피플 영상 레이어팝업 유튜브 연결
	$('.videolink').click(function(){
		var ytb_video = ['_RUropH9qXg','eJaUdZApZM0','stDXrYWjLRI'];
		var ww = $(this).attr("class");
		var v_number = ww.substr(-1,1);
		$('#play_video').attr('src', 'https://www.youtube.com/embed/'+ytb_video[v_number]);
		$('.video_popup').css('display','block');
	});


	$('.close_btn').click(function(){
		$('.video_popup').css('display','none');
	});


});
