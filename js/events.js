$(function(){

// Sub Menu toggle
  // $('#subMenu').css('left', '-100%');
  $('#menu').hover(
  function() {
      $('#subMenu').css('left', '0%');
      $('#subMenu').hover(function(){
        $('#subMenu').removeClass('animated slideOutLeft');
      });
      $('#subMenu').removeClass('animated slideOutLeft');
      $('#subMenu').addClass('animated slideInLeft');
  }, function() {
    $('#subMenu').mouseleave(function(){
      $('#subMenu').addClass('animated slideOutLeft');
    });
        $('#subMenu').removeClass('animated slideInLeft');
        $('#subMenu').addClass('animated slideOutLeft');
  }
);
});
