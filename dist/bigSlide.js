/*! bigSlide - v0.2.1 - 2013-11-13
* http://ascott1.github.io/bigSlide.js/
* Copyright (c) 2013 Adam D. Scott; Licensed MIT */
(function($) {
  'use strict';

  $.fn.bigSlide = function(options) {

    var settings = $.extend({
      'menu': ('#menu'),
      'push': ('.push'),
      'menuWidth': '15.625em',
      'speed': '300',
      'side': 'left'
    }, options);

    var menuLink = this,
        menu = $(settings.menu),
        push = $(settings.push),
        width = settings.menuWidth;

    if (settings.side == 'left'){
      var positionOffScreen = {
        'position': 'fixed',
        'top': '0',
        'bottom': '0',
        'left': '-' + settings.menuWidth,
        'width': settings.menuWidth,
        'height': '100%'
      };
    };
    
    if (settings.side == 'right'){
      var positionOffScreen = {
        'position': 'fixed',
        'top': '0',
        'bottom': '0',
        'right': '-' + settings.menuWidth,
        'width': settings.menuWidth,
        'height': '100%'
      };
    };

    var animateSlide = {
      '-webkit-transition': settings.side + ' ' + settings.speed + 'ms ease',
      '-moz-transition': settings.side + ' ' + settings.speed + 'ms ease',
      '-ms-transition': settings.side + ' ' + settings.speed + 'ms ease',
      '-o-transition': settings.side + ' ' + settings.speed + 'ms ease',
      'transition': settings.side + ' ' + settings.speed + 'ms ease'
    };

    menu.css(positionOffScreen);
    menu.css(animateSlide);
    push.css(animateSlide);

    menu.state = 'closed';

    menu.open = function() {
      menu.state = 'open';
      menu.css(settings.side, '0');
      push.css(settings.side, width);
    };

    menu.close = function() {
      menu.state = 'closed';
      menu.css(settings.side, '-' + width);
      push.css(settings.side, '0');
    };

    menuLink.on('click.bigSlide', function(e) {
      e.preventDefault();
      if (menu.state === 'closed') {
        menu.open();
      } else {
        menu.close();
      }
    });

    return menu;

  };

}(jQuery));
