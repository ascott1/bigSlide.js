/*
*
*     /\  \          ___        /\  \
*    /::\  \        /\  \      /::\  \
*   /:/\:\  \       \:\  \    /:/\:\  \
*  /::\~\:\__\      /::\__\  /:/  \:\  \
* /:/\:\ \:|__|  __/:/\/__/ /:/__/_\:\__\
* \:\~\:\/:/  / /\/:/  /    \:\  /\ \/__/
*  \:\ \::/  /  \::/__/      \:\ \:\__\
*   \:\/:/  /    \:\__\       \:\/:/  /
*    \::/__/      \/__/        \::/  /
*     ~~                        \/__/
*      ___           ___                   ___           ___
*     /\  \         /\__\      ___        /\  \         /\  \
*    /::\  \       /:/  /     /\  \      /::\  \       /::\  \
*   /:/\ \  \     /:/  /      \:\  \    /:/\:\  \     /:/\:\  \
*  _\:\~\ \  \   /:/  /       /::\__\  /:/  \:\__\   /::\~\:\  \
* /\ \:\ \ \__\ /:/__/     __/:/\/__/ /:/__/ \:|__| /:/\:\ \:\__\
* \:\ \:\ \/__/ \:\  \    /\/:/  /    \:\  \ /:/  / \:\~\:\ \/__/
*  \:\ \:\__\    \:\  \   \::/__/      \:\  /:/  /   \:\ \:\__\
*   \:\/:/  /     \:\  \   \:\__\       \:\/:/  /     \:\ \/__/
*    \::/  /       \:\__\   \/__/        \::/__/       \:\__\
*     \/__/         \/__/                 ~~            \/__/
*
* A tiny jQuery plugin for slide panel navigation
* Created by Adam D. Scott (www.adamdscott.com)
* You may use bigSlide.js under the terms of the MIT License.
*/

(function($) {
  'use strict';

  $.fn.bigSlide = function(options) {

    var settings = $.extend({
      'menu': ('#menu'),
      'push': ('.push'),
      'menuWidth': '15.625em',
      'speed': '300'
    }, options);

    var menuLink = this,
        menu = $(settings.menu),
        push = $(settings.push),
        width = settings.menuWidth;

    var positionOffScreen = {
      'position': 'fixed',
      'top': '0',
      'bottom': '0',
      'left': '-' + settings.menuWidth,
      'width': settings.menuWidth,
      'height': '100%'
    };

    var animateSlide = {
      '-webkit-transition': 'left ' + settings.speed + 'ms ease',
      '-moz-transition': 'left ' + settings.speed + 'ms ease',
      '-ms-transition': 'left ' + settings.speed + 'ms ease',
      '-o-transition': 'left ' + settings.speed + 'ms ease',
      'transition': 'left ' + settings.speed + 'ms ease'
    };

    menu.css(positionOffScreen);
    menu.css(animateSlide);
    push.css(animateSlide);

    menu._state = 'closed';

    menu.open = function() {
      menu._state = 'open';
      menu.css('left', '0');
      push.css('left', width);
    };

    menu.close = function() {
      menu._state = 'closed';
      menu.css('left', '-' + width);
      push.css('left', '0');
    };

    menuLink.on('click.bigSlide', function(e) {
      e.preventDefault();
      if (menu._state === 'closed') {
        menu.open();
      } else {
        menu.close();
      }
    });

    return menu;

  };

}(jQuery));
