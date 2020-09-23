$(document).ready(function (){

  $('.main_slide_wrap').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: '0'
  });


  $('a[href=""]').click(function(e) {
    e.preventDefault();
  });

  $('.2dep_on_off').click(function(){
    if($(this).hasClass('active')){
      $('.2dep_on_off').removeClass('active');
    }else {
    $('.2dep_on_off').removeClass('active');
    $(this).addClass('active');
    }
  });

  $('.menu_close_btn').click(function(){
    $('.slide_menu_wrap').hide( 300, 'linear' );
  });


  $('#menubtn').click(function(){
    $('.slide_menu_wrap').show( 300, 'linear' );
  });

  var nav = $('nav');

  $(window).scroll(function () {
      if ($(this).scrollTop() > 64) {
          nav.addClass("f-nav");
      } else {
          nav.removeClass("f-nav");
      }
  });

  $('.m_top_btn').click(function() {
  $('html, body').animate({scrollTop:0}, 400 );
  return false;
  });



  $('.list_more').click(function() {
    var list ='.ordinary_wrap>ul>li:nth-child(n+7)';

     $(list).delay(300).fadeIn(500);
    $(this).delay(100).fadeOut(500);
  });

  $(window).scroll( function(){
    $('.fade').each( function(i){

        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1', 'padding-top':'0px'},700);
        }
    });
  });




});
