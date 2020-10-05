$(document).ready(function (){

  $(window).one('resize',function() {
  if($(window).width() <1000) {
    alert('PC사이즈에 최적화되어있는 화면입니다.');
  }
});

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


  // 상단 광고
  var main_slide = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop:'true',
    autoplay:{
              delay: 3000,
              disableOnInteraction: false,
    },
    navigation: {
                  nextEl: '.button-next',
                  prevEl: '.button-prev',
                },
    slidesPerView: 3
  });



// 핫이슈 슬라이드
  var channel_slide = new Swiper ('.channel_swiper', {
    direction: 'horizontal',
    spaceBetween: 30,
    loop:'true',
    slidesPerView: 5,
    breakpoints :{ 1600 : {slidesPerView: 5}, 1400 : {slidesPerView: 4},1000 : {slidesPerView: 3},0 : {slidesPerView: 2}},
    navigation: {
                  nextEl: '.ch-swiper-button-next',
                  prevEl: '.ch-swiper-button-prev',
                },
    autoplay:{
              delay: 3000,
              disableOnInteraction: false,
    }
  });
  $('.swiper_channel_pause').click(function(){
    if( !$(this).hasClass('play') ){
    channel_slide.autoplay.stop();
    $(this).addClass('play');
  }else if( $(this).hasClass('play') ){
    channel_slide.autoplay.start();
    $(this).removeClass('play');
  }

  });

  // 좌측메뉴 2depth메뉴 열림 효과
    $('.open_arrow').click(function(){
      if($(this).hasClass('on')){
        $('.open_arrow').removeClass('on');
        $('.depth2_menu').removeClass('on');
      }else{
        $('.open_arrow').removeClass('on');
        $('.depth2_menu').removeClass('on');
        $(this).addClass('on');
        $(this).next().addClass('on');
      }
    });

  // 광고배너 크기 변경
    $('.mode_change').click(function(){
      if($('.big_ad').hasClass('on')){
        $(this).addClass('on');
        $(this).children('.down_arrow').addClass('on');
        $('.big_ad').removeClass('on');
        $('.small_ad').addClass('on');
      }else{
        $(this).removeClass('on');
        $(this).children('.down_arrow').removeClass('on');
        $('.big_ad').addClass('on');
        $('.small_ad').removeClass('on');
      }
    });




// 핫이슈 리스트 콘텐츠 내용 배열
var live_time = ['09-28-16:42', '09-28-17:37', '08-16-18:23', '09-30-21"34', '09-30-00:01', '09-12-05:22']
var live_title =['쪼꼬의 이상한 밤','검은사막 만렙', '귀여워!', '치즈피자먹방+단타!', '배틀그라운드 후라이팬으로 치킨먹기', '생방송 도중 사건이 터졌습니다!!']
var live_bjname =['쪼꼬','피카츄','파이리','햇님','인기가요','연금술사']
var live_view=['546','16437','9882394','345','2','627831']
var vod_time = ['16:12', '07:57', '08:33', '01:02', '12:00', '05:22']
var vod_title =['[실시간뉴스] 코로나 속보','운동방송', '책읽어드립니다', '즐거운 추석 되세요!', '포트폴리오페이지입니다', '레버리지']
var vod_bjname =['뉴스','bj090909','bjITQ','000000','요가','사장']
var vod_view=['51346','731254637','9424','4989','15','741']


// 로딩 후 핫이슈-라이브 카테고리 리스트 노출
$('#hot_issue .swiper-slide').each(function(i){
   $('#channel'+i+' .img_area').attr('src','./img/hotissue_'+i+'.jpg');
   $('#channel'+i+' .bj_name').text(live_bjname[i-1]);
   $('#channel'+i+' .title').text(live_title[i-1]);
   $('#channel'+i+' .view').html('<em class="viewer_icon"></em> '+live_view[i-1]);
   $('#channel'+i+' .start_time').text(live_time[i-1]);
});

// 핫이슈 카테고리 이동 시 컨텐츠 내용 변경
  $('.hot_issue_menu a').click(function(){
    $('.hot_issue_menu a').removeClass('on');
    $(this).addClass('on');
    if($(this).hasClass('menu_live') == true){
      $('#hot_issue .channel_img>a:first-child').after('<span class="exploration">탐방허용</span>');
      $('#hot_issue .hold').after('<span class="start"><span class="start_time">'+'-'+'</span> 방송시작</span>');
      $("#hot_issue .play_time").detach();
      $('#hot_issue .swiper-slide').each(function(i){
         $('#channel'+i+' .img_area').attr('src','./img/hotissue_'+i+'.jpg');
         $('#channel'+i+' .bj_name').text(live_bjname[i-1]);
         $('#channel'+i+' .title').text(live_title[i-1]);
         $('#channel'+i+' .view').html('<em class="viewer_icon"></em> '+live_view[i-1]);
         $('#channel'+i+' .start_time').text(live_time[i-1]);
      });
    }else{
      $("#hot_issue .exploration").detach();
      $("#hot_issue .start").detach();
      $('#hot_issue .hold').after('<span class="play_time">-</span>');
      $('#hot_issue .swiper-slide').each(function(i){
        $('#channel'+i+' .img_area').attr('src','./img/hotvod_'+i+'.jpg');
         $('#channel'+i+' .bj_name').text(vod_bjname[i-1]);
         $('#channel'+i+' .title').text(vod_title[i-1]);
         $('#channel'+i+' .view').html('<em class="viewer_icon"></em> '+vod_view[i-1]);
         $('#channel'+i+' .play_time').text(vod_time[i-1]);

       });
    }
});


  //전체 콘텐츠 리스트 내용 배열
  var channel = [
  {"image":"all_channel_img1","title":"강아지 첫 산책","bj_name":"이센스","view":"100","start_time":"09-30:13:15"},
  {"image":"all_channel_img2","title":"착한 리트리버 덕고만 보면 싸움 거는 달봉이","bj_name":"애니멀봐","view":"1024310","start_time":"09-30:14:15"},
  {"image":"all_channel_img3","title":"다발이 장가감","bj_name":"코기대왕","view":"13490","start_time":"09-30:14:15"},
  {"image":"all_channel_img4","title":"강아지24시간생방","bj_name":"bj242424","view":"158497400","start_time":"09-30:15:35"},
  {"image":"all_channel_img5","title":"반려견 웰시코기 양치질","bj_name":"코기tv","view":"47400","start_time":"09-30:16:15"},
  {"image":"all_channel_img6","title":"돌아온 8코기의 겨울나기","bj_name":"동물농장","view":"15800","start_time":"09-29:02:00"},
  {"image":"all_channel_img7","title":"사회생활에 찌든 강아지","bj_name":"망고와베리","view":"4941","start_time":"09-28:15:10"},
  {"image":"all_channel_img8","title":"웰리의 목욕하기","bj_name":"bj발자국","view":"18915","start_time":"09-25:18:57"},
  ];

  //전체 콘텐츠 뿌려주기
  $.each(channel,function(key,item) {
    $('.all_contents_area').append('<li><div class="channel_area"><div class="channel_img"><a href="javascript:;">'+
      '<img class="img_area" src="./img/'+item.image+'.jpg" alt="방송 썸네일 이미지"></a><span class="exploration">탐방허용</span><a class="hold" href="javascript:;"><span class="">나중에 보기</span></a>'+
      '<span class="start"><span class="start_time">'+item.start_time+'</span> 방송시작</span></div><div class="channel_text"><a class="title" href="">'+item.title+
      '</a><a class="bj_name" href="">'+item.bj_name+'</a><span class="view"><em class="viewer_icon"></em>'+item.view+'</span></div></div></li>');
  });

  var notice = [
    {"category":"안내", "title":"9월 베스트BJ 발표", "link":"javascript:;"},
    {"category":"안내", "title":"9월 악성채팅 제재조치 결과", "link":"javascript:;"},
    {"category":"안내", "title":"휴대폰결제 서비스 작업 안내", "link":"javascript:;"}
  ];

  var notice_length = Object.keys(notice).length;

  $.each(notice,function(key,item){
    if (key == 0){
    $('.bottom_notice ul').append('<li class="notice_list"><a class="notice_title" "href="'+item.link+'"><span>['+item.category+']</span>'+item.title+'</a></li>');
  }else{
    $('.bottom_notice ul').append('<li class="notice_list" style="display:none"><a class="notice_title" "href="'+item.link+'"><span>['+item.category+']</span>'+item.title+'</a></li>');}
  });

  //key, eq는 첫번째 요소를 0부터 카운트, length는 1부터

  //bottom notice 3초에 한 번씩 바뀌게 설정
  var ii = 1;

    setInterval(function(){
      $('.notice_list').css("display","none");
      $('.notice_list').eq(ii).css("display","block");
      ii = ii+1;
      if (ii == notice_length){
        ii = 0;
      }
    },3000);


$('.family_open').click(function(){
  if($(this).hasClass('on')){
      $(this).removeClass('on');
      $('.family_wrap').removeClass('on');
  }else{
    $(this).addClass('on');
    $('.family_wrap').addClass('on');
  }

})

$('#user').click(function(){
  if($(this).hasClass('on')){
      $(this).removeClass('on');
      $('.user_menu').removeClass('on');
  }else{
    $(this).addClass('on');
    $('.user_menu').addClass('on');
  }

})










});
