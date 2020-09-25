$(document).ready(function (){


  // $(window).resize(function() {
  //   if($(window).width() <1000) {
  //     alert('PC사이즈에 최적화되어있는 화면입니다.');
  //   }
  // });



  var top_banner_slide = $('#top_banner_slide').bxSlider({
    slideWidth:656,
    pager: true,
    pagerType:'short',
    pagerSelector:'#top_count',
    autoControls: true,
    autoControlsCombine:true,
    autoControlsSelector:'#top_pause_play',
    startText:'<i class="fas fa-play"></i>',
    stopText:'<i class="fas fa-pause"></i>',
    auto: true,
    speed: 500,
    pause: 5000,
  });


  var madang_slide = $('#madang_slide').bxSlider({
    auto: true,
    pager: true,
    pagerType:'short',
    pagerSelector:'#madang_count',
    autoControls: true,
    autoControlsCombine:true,
    autoControlsSelector:'#madang_pause_btn',
    startText:'<i class="fas fa-play"></i>',
    stopText:'<i class="fas fa-pause"></i>',
    speed: 500,
    pause: 5000,
    mode:'horizontal',
    controls:false,
    slideWidth:310,
    });

    // if($(widow).width() < 771)
    // var madang_width = $('.contents_wrap.width1000').width();
    // $(window).resize(function(){
    //   var what = $('.madang_width').width();
    //   $('.madang_width').width(what);
    // }).resize();

      $('#prev_btn').on('click', function() {
      madang_slide.goToPrevSlide();  //이전 슬라이드 배너로 이동
      return false;
      });

      //다음 버튼을 클릭하면 다음 슬라이드로 전환
      $('#next_btn').on('click', function() {
      madang_slide.goToNextSlide();  //다음 슬라이드 배너로 이동
      return false;
      });


      // 문화행사 슬라이드
      var culture_slide = $('#culture_slide').bxSlider({
        slideWidth:1000,
        auto: true,
        speed: 500,
        pause: 3000,
        mode:'horizontal',
        autoControls: true,
        autoControlsCombine:true,
        autoControlsSelector:'#culture_pause_btn',
        startText:'<i class="fas fa-play"></i>',
        stopText:'<i class="fas fa-pause"></i>',
        controls:false,
        pager: true,
        pagerType:'short',
        pagerSelector:'#culture_count',
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 10,
      });

      $('#culture_prev_btn').on('click', function() {
      culture_slide.goToPrevSlide();  //이전 슬라이드 배너로 이동
      return false;
      });

      //다음 버튼을 클릭하면 다음 슬라이드로 전환
      $('#culture_next_btn').on('click', function() {
      culture_slide.goToNextSlide();  //다음 슬라이드 배너로 이동
      return false;
      });


      // 기업로고 슬라이드
      var footer_banner_slide = $('#footer_banner_slide').bxSlider({
        auto:true,
        speed: 500,
        pause:3000,
        slideWidth:930,
        pager: false,
        controls:false,
        autoControls: true,
        autoControlsCombine:true,
        autoControlsSelector:'#f_b_pause_btn',
        startText:'<i class="fas fa-play"></i>',
        stopText:'<i class="fas fa-pause"></i>',
        minSlides: 6,
        maxSlides: 6,
        moveSlides: 1,
        slideMargin: 20,
      });
      $('#f_b_prev_btn').on('click', function() {
      footer_banner_slide.goToPrevSlide();  //이전 슬라이드 배너로 이동
      return false;
      });

      //다음 버튼을 클릭하면 다음 슬라이드로 전환
      $('#f_b_next_btn').on('click', function() {
      footer_banner_slide.goToNextSlide();  //다음 슬라이드 배너로 이동
      return false;
      });


      //a태그 무효화
      $('a[href=""]').click(function(e) {
        e.preventDefault();
      });


      //하단 바로가기 링크 영역
      $('.site_select_btn>button').click(function(){
        var clicked_ul = $(this).parent().find('ul');

        if( clicked_ul.css('display') == 'none' ){
          $('.site_select_btn ul').not(clicked_ul).css('display','none');
          clicked_ul.css('display','block');
        }
        else if(clicked_ul.css('display') == 'block' ){
          $('.site_select_btn ul').css('display','none');
        }


      });




      //메뉴
      $('.menu_depth1').on("click",function() {

      if(!$('.menu_depth1').hasClass('active') && !$(this).hasClass('active')){
        $(this).addClass('active');
        $(this).children('div').addClass('active');

      }else if ($('.menu_depth1').hasClass('active') && !$(this).hasClass('active')) {
        $('.menu_depth1').removeClass('active');
        $('.menu_down_cont').removeClass('active');
        $(this).addClass('active');
        $(this).children('div').addClass('active');
      } else {
        $('.menu_depth1').removeClass('active');
        $('.menu_down_cont').removeClass('active');
      }
      });



      // 시정소식~고시/공고 게시판
      $('.notice_cate').on("click",function() {
        var tab = $(this).index()+1;

        $('.notice_cate').removeClass('active');
        $('.notice_list').removeClass('active');

        $(this).addClass('active');
        $('.notice_list_cont>ul:nth-child('+tab+')').addClass('active');
      });

      //민원행정
      $('.minwon_title>.balloontitle').on("click",function() {
        var tab = $(this).index()+1;

        $('.minwon_title>.balloontitle').removeClass('active');
        $('.minone_list').removeClass('active');

        $(this).addClass('active');
        $('.minone_list_cont>ul:nth-child('+tab+')').addClass('active');
      });

      //시민
      $('.simin_balloon').on("click",function() {
        var tab = $(this).index()+1;

        $('.simin_balloon').removeClass('active');
        $('.simin_list').removeClass('active');

        $(this).addClass('active');
        $('.simin_list_cont>ul:nth-child('+tab+')').addClass('active');
      });

    });
