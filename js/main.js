$(document).ready(function (){




    // $( window ).resize(function (){
      var windowWidth = $( window ).width();

  if(windowWidth > 1024) {

    $(window).scroll(function(){
      var position = $(window).scrollTop();


      if(position > 0 && position < 200 ) {

        $('.introduce .content_area').css({top: '-100vh'});
        $('nav').css({background: 'transparent', height:'0px'});

        $('.top .title_area').css({
          position: 'fixed',
          top: '12vh',
          left: '50%',
          transform:'translateX(-50%)',
          width:'870px'
        });

      } else if (position > 200 && position < 1200 ) {
        $('.introduce .content_area').css({top: '0vh'});
        $('nav').css({background: 'rgba(255,255,255,0.9)', height:'100px'});
        $('.top .title_area').css({
          position: 'fixed',
          margin: '0',
          top:'15px',
          left: '30px',
          transform:'translateX(0%)',
          width:'200px'
        });
      };
    });

  } else {
      $(window).scroll(function(){
        var position = $(window).scrollTop();


        if(position > 0 && position < 200 ) {
          $('.introduce .content_area').css({top: '-100vh'});

        } else if (position > 200 && position < 1200 ) {
          $('.introduce .content_area').css({top: '0vh'});
        }

      });
    };
  // });





});
