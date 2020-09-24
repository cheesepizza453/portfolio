$(document).ready(function (){

  $('.review_slide_area').slick({
				slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li
				infinite : true, 	//무한 반복 옵션
				slidesToShow : 3,		// 한 화면에 보여질 컨텐츠 개수
				slidesToScroll : 3,		//스크롤 한번에 움직일 컨텐츠 개수
				speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
				arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
				dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
				autoplay : true,			// 자동 스크롤 사용 여부
				autoplaySpeed : 10000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
				pauseOnHover : false,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
				dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
				draggable : true	//드래그 가능 여부

				// responsive: [ // 반응형 웹 구현 옵션
				// 	{
				// 		breakpoint: 960, //화면 사이즈 960px
				// 		settings: {
				// 			//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
				// 			slidesToShow:3
				// 		}
				// 	}


			});

      $('.sold_out_slide_area').slick({
            slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li
            infinite : true, 	//무한 반복 옵션
            slidesToShow : 4,		// 한 화면에 보여질 컨텐츠 개수
            slidesToScroll : 4,		//스크롤 한번에 움직일 컨텐츠 개수
            speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
            dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
            autoplay : true,			// 자동 스크롤 사용 여부
            autoplaySpeed : 10453530, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            pauseOnHover : false,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
            vertical : false,		// 세로 방향 슬라이드 옵션
            dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
            draggable : false 	//드래그 가능 여부

        });


        $('.visual_area').slick({
              slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li
              infinite : true, 	//무한 반복 옵션
              slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
              slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
              speed : 200,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
              arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
              dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
              autoplay : true,			// 자동 스크롤 사용 여부
              autoplaySpeed : 10000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
              pauseOnHover : false,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
              vertical : false,		// 세로 방향 슬라이드 옵션
              dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
              draggable : true	//드래그 가능 여부

            });


  $('a[href="#"]').click(function(e) {
    e.preventDefault();
  });


  $('.hamburger_btn').click(function(){
    var blockORnone = $('.all_menu_wrap').css('display');

    if(blockORnone == 'block'){
    $('.all_menu_wrap').css('display','none');
    }
    else{
      $('.all_menu_wrap').css('display','block');
    }
  });

  $('.all_menu_close_btn').click(function(){
    $('.all_menu_wrap').css('display','none');

  });

  // 안전구매 차량 리스트 전환
  $('.safe_car_menu').click(function(){
    var car_list = $('.safe_car_menu_area>li:first-child');

    $('.safe_car_menu').removeClass('active');
    $(this).addClass('active');

    if( $('.safe_car_menu_area>li:first-child').hasClass('active')){
      $('.safe_car_list_area').removeClass('active');
      $('.safe_car_list_area.hyundai_capital_area').addClass('active');
    }else{
      $('.safe_car_list_area').removeClass('active');
      $('.safe_car_list_area.ansim_buy_area').addClass('active');
    }
  });


	var floatPosition = parseInt($(".right_quicklink_wrap").css('top'));
	$(window).scroll(function() {

		var scrollTop = $(window).scrollTop();
		var newPosition = scrollTop + floatPosition + "px";

		$(".right_quicklink_wrap").stop().animate({
			"top" : newPosition
		}, 500);

	}).scroll();

  // var name = $('#selling_name').val();
  // var phone = $('#selling_phone').val();
  // var car = $('#selling_car_number').val();
  // var check_pe = $('#selling_agreement_personal_data').val();
  // var check_marketing = $('#selling_agreement_personal_datr').val();
  //
  // $('.division_request_area button').click(function(e) {
  //   if(name =='' && phone =='' && car ==''){
  //     alert('이름을 입력해주세요.');
  //   }else if(name !='' && phone =='' && car =='' ){
  //     if
  //     alert('이름을 입력해주세요.');
  //
  //   }
  //
  // });





});
