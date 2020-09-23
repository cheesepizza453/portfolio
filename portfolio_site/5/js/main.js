$(document).ready(function (){

  $('.slide_area').slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
    centerPadding: '0'
  });


  $('a[href="#"]').click(function(e) {
    e.preventDefault();
  });


  $('.ch_list').click(function(){
      $('.ch_list').removeClass('active');
      $(this).addClass('active');

      var index = $(this).index();

      if(index == 0){
        $('.all_channel_area .channel').css('display','block');
      }else if (index >= 1){
      $('.all_channel_area .channel').css('display','none');
      $('.channel').eq(index*2-1).css('display','block');
      $('.channel').eq(index*2-2).css('display','block');
      }
});
// .css({'display': 'block', 'opacity': 0}).animate({'opacity': 1}, 300);
//
//
// .animate({'opacity': 0}, 300, function() {
//             $(this).css({'display': 'none'})


// 5 8 9
// var clickEle = $('.left-div span');
// clickEle.click(function () {
//    var indexNo = $(this).index();
//    $('.right-div span').eq(indexNo).toggleClass('hide');
// })




      //
      // if($('.list_area>li:nth-child(1)').hasClass('active')){
      //   .all_channel_area > ul>li 전체 오퍼 1
      //   1,2,3,4,5,6 -2
      //   -1 1  :전체 op1
      //    0 2 : 전체 오퍼0, 12
      //   1 3 : 34
      //   2 4:45
      //   3 5:56
      //   4 6:67
      //
      // }
  });
