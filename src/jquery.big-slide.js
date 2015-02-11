/*! bigSlide - v0.4.3 - 2014-01-25
* http://ascott1.github.io/bigSlide.js/
* Copyright (c) 2014 Adam D. Scott; Licensed MIT */

(function($) {
  'use strict';

  $.fn.bigSlide = function(options) {

    // plugin settings
    var settings = $.extend({
      'menu': ('#menu'),
      'push': ('.push'),
      'side': 'left',
      'menuWidth': '15.625em',
      'speed': '300',
      'activeBtn':'menu-open',
      'state': 'closed'
    }, options);

    // store the menu's state in the model
    var model = {
      'state': settings.state
    };

    var controller = {
      init: function(){
        view.init();
      },

      changeState: function(){
        //model.state === 'closed' ? model.state = 'open' : model.state = 'closed';
        if (model.state === 'closed') {
          model.state = 'open'
        } else {
          model.state = 'closed'
        }
      },

      getState: function(){
        return model.state;
      }
    };

    var view = {
      init: function(){
        this.$menu = $(settings.menu),
        this.$push = $(settings.push),
        this.width = settings.menuWidth;

        var = positionOffScreen = {
          'position': 'fixed',
          'top': '0',
          'bottom': '0',
          'settings.side': '-' + settings.menuWidth,
          'width': settings.menuWidth,
          'height': '100%'
        };

        var = animateSlide = {
          '-webkit-transition': settings.side + ' ' + settings.speed + 'ms ease',
          '-moz-transition': settings.side + ' ' + settings.speed + 'ms ease',
          '-ms-transition': settings.side + ' ' + settings.speed + 'ms ease',
          '-o-transition': settings.side + ' ' + settings.speed + 'ms ease',
          'transition': settings.side + ' ' + settings.speed + 'ms ease'
        };

        this.menu.css(positionOffScreen);
        this.push.css(settings.side, '0');
        this.menu.css(animateSlide);
        this.push.css(animateSlide);

        // register a click listener & touchend for mobile

        $(document).on('click.bigSlide', function(e) {
          if (controller.getState() === 'open') {
            view.toggleClose();
          } else {
            view.toggleOpen();
          }
        });

      },

      toggleOpen: function() {
        controller.changeState();
        this.$menu.css(settings.side, '0');
        this.$push.css(settings.side, width);
        //menuLink.addClass(settings.activeBtn);
      },

      toggleClose: function() {
        controller.changeState();
        this.$menu.css(settings.side, '-' + width);
        this.$push.css(settings.side, '0');
        //menuLink.removeClass(settings.activeBtn);
      }

    }

    controller.init();

  };

}(jQuery));
