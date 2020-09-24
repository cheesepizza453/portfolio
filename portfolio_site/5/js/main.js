$(document).ready(function (){

// 하단 슬라이드
  $('.slide_area').slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
    infinite: true,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 5000,
    variableWidth: true,
    centerPadding: '0'
  });

  //슬라이드 이미지 화면 사이즈에 맞게 조정
  $(window).resize(function(){
    var what = $('.slide_area').width();
    $('.img_area').width(what);
  }).resize();



// a태그 클릭 차단
  $('a[href="#"]').click(function(e) {
    e.preventDefault();
  });

// 컨텐츠 리스트 영역 카테고리 선택 시 해당 콘텐츠 노출
  $('.ch_list').click(function(){
      $('.ch_list').removeClass('active');
      $(this).addClass('active');
      //같은 레벨에서 내가 몇 번째 요소인지 확인할 수 있는 index
      var index = $(this).index();
      // ALL (index=0) 클릭 시 모든 채널 노출,
      if(index == 0){
        $('.all_channel_area .channel').css('display','block');
      }else if (index >= 1){
      $('.all_channel_area .channel').css('display','none');
      // ALL외의 카테고리 클릭 시 채널 리스트 규칙에 맞게 노출 
      $('.channel').eq(index*2-1).css('display','block');
      $('.channel').eq(index*2-2).css('display','block');
      }
    });
});
