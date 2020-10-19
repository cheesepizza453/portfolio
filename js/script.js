
// 스크롤에 따른 애니메이션
document.addEventListener( 'DOMContentLoaded', function () {
  var root = document.body.style;

  console.log(root);

  // Initialize variables
  //
  root.setProperty('--scroll',window.pageYOffset / (8820 - window.innerHeight));

  // Scroll events
  window.addEventListener('scroll',scroll,false);
  function scroll() {
    root.setProperty('--scroll',window.pageYOffset / (8820 - window.innerHeight));
  }
});
