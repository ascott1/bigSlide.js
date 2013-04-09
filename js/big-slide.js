$(document).ready(function() {
  $('.menu-link').click(function(){

    // toggle the active class on the content wrapper
    $('.wrap').toggleClass('active');

    // prevent default link behavior
    return false;
  });
});
