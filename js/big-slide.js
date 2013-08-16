var settings.menuLink = $('.menu-link'),
  settings.menu = $('#menu'),
  $wrap = $('.wrap');

$(settings.menuLink).click(function(){

// toggle the active class on the content wrapper
$wrap.toggleClass('slide');
settings.menu.toggleClass('slide');

// prevent default link behavior
return false;
});
