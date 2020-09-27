$(document).ready(function (){

  // 화면 높이가 소개 영역의 min heigt보다 낮을 경우 포폴 영역 패딩값 설정
  // 1. NaN 오류 출력 -> 값을 문자로 인식해서 나오는 오류기 때문에  parseInt 추가했다. 자바스크립트에서는 if문으로 NaN인지 확인할수도 있음
    function slide_padding() {
      var height = 0;
      var intro_h = 0;
      var intro_min_h = 0;

      intro_h = parseInt($('.introduce').height());
      intro_min_h = parseInt($('.introduce .content_area').css( "min-height" ));
      height = intro_min_h - intro_h ;
       if( intro_h < intro_min_h ){
         $('.slide').css("padding-top", height + 80);
      }else{
        $('.slide').css("padding-top", height + 80);
      }
    };


function animation() {


  slide_padding();

  var windowWidth = $( window ).width();

    $(window).scroll(function(){

      var position = $(window).scrollTop();


      if( position > 100 ){
        $('header').css({opacity:'1', margin:'0 0 0 0'});
      }else if( position <= 100 ){
        $('header').css({opacity:'0', margin:'-80px 0 0 0'});
      };

      if(position > 0 && position < 200 ) {
        $('.introduce .content_area').css({top: '-100vh'});
        $('header').css({opacity:'0', margin:'-80px 0 0 0'});
        // $('.top .title_area').css({
        //   position: 'fixed',
        //   margin: '0',
        //   top:'12px',
        //   left: '5%',
        //   transform:'translateX(0%)',
        //   width:'200px'
        // });
      } else if (position > 200 && position < 1200 ) {
        $('.introduce .content_area').css({top: '0vh'});
        $('header').css({opacity:'1', margin:'0 0 0 0'});
        // $('.slide .title_area .title').css({opacity: '0'});
        // $('.slide .content_area .cont').css({opacity:'0'});
      }else if (position > 1200 && position < 5000 ) {
        $('.slide .title_area .title').css({opacity: '1'});
        $('.slide .content_area .cont').css({opacity:'1'});
        $('header').css({opacity:'1', margin:'0 0 0 0'});

      };
    });



  } animation();
    slide_padding();


// 화면 사이즈 바뀔 때에도 animation과 slide_padding 적용
  $( window ).resize(function (animation){
  });

  $( window ).resize(function ( slide_padding ){
  });

});
