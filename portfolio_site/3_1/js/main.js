var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
for (var word in mobileKeyWords){
    if (navigator.userAgent.match(mobileKeyWords[word]) != null){
        location.href = "./portfolio_site/3_2/m_index.html";
        break;
    }
}


$(document).ready(function (){

 // a태그 무효화
  $('a[href=""]').click(function(e) {
    e.preventDefault();
  });

// gnb 검색박스
$('.search>a').click(function(){
  $('.search_box').fadeToggle(300);
})

$('.go_btn').click(function(){
  $('.search_box').fadeOut(300);
  $('.search_text').remove;
})

// 메인슬라이드 설정
$('.main_slide_wrap').slick({
  slidesToShow: 1,
  dots: true,
  arrows: true,
  infinite: true,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 5000,
  centerPadding: '0',
  fade: true,
  speed:1000
});

//최상단 버튼
$('.top_btn').click(function() {
$('html, body').animate({scrollTop:0}, 300 );
return false;
});

// 상품정보(장바구니)노출
$('.p_ordi>a').hover(function(){
  $(this).parent().children('.product_option').fadeIn(100);
});


// 2depth메뉴 노출
$('.menu').mouseover(function(){$(this).children('.menu_2depth').stop().css('display', 'block').animate({opacity:1},300);
});
$('.menu').mouseout(function(){$(this).children('.menu_2depth').stop().animate({opacity:0},300).css('display', 'none');
});


//우측메뉴 노출 숨김
$(".r_m_container").on('mousewheel',function(e){
var wheel = e.originalEvent.wheelDelta;
//스크롤값을 가져온다.
if(wheel>109){
//스크롤 올릴때
$(".r_m_container").css('display','none');
$('.r_m_close_btn>img').attr('src','./img/all_menu_close_icon.png');
} else {
//스크롤 내릴때
$(".r_m_container").css('display','block');
$('.r_m_close_btn>img').attr('src','./img/all_menu_icon.png');
}
});


$('.r_m_2depth>li>a').mouseover(function(){
  $(this).parent().parent().parent().children('a').css('border-bottom', '2px solid #222');
});
$('.r_m_2depth>li>a').mouseout(function(){
  $(this).parent().parent().parent().children('a').css('border-bottom', 'none');
});


$(window).scroll(function (){
var height = $(document).scrollTop();
if (height >= 150){
  $('.r_m_close_btn').animate({'opacity':'1'},50);
}else{
  if($('.right_menu_wrap').hasClass('on')){}
  else{
    $('.r_m_close_btn').animate({'opacity':'0'},50);
  }
}
});

//우측메뉴 여닫힘
$('.r_m_close_btn').click(function(){
  if($('.right_menu_wrap').hasClass('on')){
    $('.r_m_close_btn>img').attr('src','./img/all_menu_icon.png');
    $('.right_menu_wrap').removeClass('on');
    $('.r_m_close_btn').removeClass('on');
  }else{
    $('.r_m_close_btn>img').attr('src','./img/all_menu_close_icon.png');
    $('.right_menu_wrap').addClass('on');
    $('.r_m_close_btn').addClass('on');
  }
});


//  메인콘텐츠 페이드인 효과
$(window).scroll( function(){
  $('.fade').each( function(i){

      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_element ){
        if($(this).hasClass('slide_right')){
          $(this).animate({'opacity':'1', 'margin-right':'0px'},600);}
        else if($(this).hasClass('slide_left')){
          $(this).animate({'opacity':'1','margin-left':'0px'},600);}
        else if($(this).hasClass('slide_top')){
          $(this).css({'opacity':'1','padding-top':'0px'});}
      }
  });
});



});
