$(document).ready(function (){

  $(window).scroll(function(){

    var mt = 'margin-top';
    var ml = 'margin-left';
    var mr = 'margin-right';
    var to = 'transform-origin';

    var position = $(window).scrollTop();


    if(position > 0 && position < 200 ) {

      $('.introduce .content_area').css({top: '-100vh'});
      // $('.top .title_area').css({
      //   position: 'fixed',
      //   width: '100%',
      //   height: 'auto',
      //   top: '12vh',
      //   left: '50%',
      //   transform:'translateX(-50%)',
      //   transition: 'top 1s, left 0.8s, transform 0.8s, margin 0.81s',
      //   margin: '0 0 0 -430px'
      //})


    } else if (position > 200 && position < 1200 ) {
      $('.introduce .content_area').css({top: '0vh'});
      // $('.top .title_area').css({
      //   position: 'fixed',
      //   margin: '0',
      //   top:'30px',
      //   left: '30px',
      //   transform:'translateX(0%) scale(0.3)',
      //   width: '100%',
      //   height: 'auto',
      //   transition: 'top 0.8s, left 0.8s, transform 0.8s, margin 0.81s',
      //   margin: '0'
      //})




    } else if (position > 1200 && position < 1800) {

      // $('body').css('background', 'red');
      $('.block2').css({ opacity: '0' });
      $('.block3').css({ opacity: '1' });

      $('.stick1, .stick2, .stick3, .stick4').css('background', 'magenta');

      $('.stick1').css({
        transform:'rotate(15deg)',
        left: '84px',
        top: '-45px',
        height: '630px'
      });
      $('.stick2').css({
        transform:'rotate(-40deg)',
        left: '335px',
        top: '-105px',
        height: '790px'
      });
      $('.stick3').css({
        transform:'rotate(-15deg)',
        left: '467px',
        top: '-27px',
        height: '650px'
      });
      $('.stick4').css({
        transform:'rotate(-50deg)',
        left: '480px',
        top: '-50px',
        height: '375px'
      });

    }

  });

  $('.stick1, .stick2, .stick3, .stick4').mouseenter(function(){
				$('.stick1, .stick2, .stick3, .stick4').addClass('flash'); }).mouseleave(function() {
					$('.stick1, .stick2, .stick3, .stick4').removeClass('flash');
	});



});
