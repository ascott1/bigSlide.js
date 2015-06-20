jasmine.getFixtures().fixturesPath = 'test/fixtures';

describe('bigSlide default states', function() {
  var $menu

  beforeEach(function() {
    loadFixtures('test.html');
    $menu = $('#menu');
  });

  it('the menu should be position fixed', function() {
    expect($menu).toHaveCss({position: 'fixed'});
  });

  it('the menu should be positioned offscreen', function() {
    expect($menu).toHaveCss({left: '-250px'});
  });

});


describe('bigSlide click states', function() {
  var $menu

  beforeEach(function() {
    loadFixtures('test.html');
    $('.menu-link').bigSlide();
    $('.menu-link').trigger('click');
    $menu = $('#menu');
  });

  it('the menu should be visible', function() {
    expect($menu).toBeVisible();
  });

});

describe('open and close event callbacks', function() {
  var callback_value = false;

  beforeEach(function() {
    loadFixtures('test.html');
  });

  it('before open should be called', function() {
    $('.menu-link').bigSlide({
      'beforeOpen': function() {
        callback_value = "before-open";
      }
    });
    $('.menu-link').trigger('click');
    expect(callback_value).toEqual("before-open");
  });

  it('after open should be called', function() {
    $('.menu-link').bigSlide({
      'afterOpen': function() {
        callback_value = "after-open";
      }
    });
    $('.menu-link').trigger('click');
    expect(callback_value).toEqual("after-open");
  });

  it('before close should be called', function() {
    $('.menu-link').bigSlide({
      'beforeClose': function() {
        callback_value = "before-close";
      }
    });
    $('.menu-link').trigger('click');
    $('.menu-link').trigger('click');
    expect(callback_value).toEqual("before-close");
  });

  it('after close should be called', function() {
    $('.menu-link').bigSlide({
      'afterClose': function() {
        callback_value = "after-close";
      }
    });
    $('.menu-link').trigger('click');
    $('.menu-link').trigger('click');
    expect(callback_value).toEqual("after-close");
  });

});

describe('exposed internal components', function(){
  var $menu;
  var $menuLink;

  beforeEach(function() {
    loadFixtures('test.html');
    
    $menu = $('#menu');

    $menuLink = $('.menu-link').bigSlide({
      side:'left',
      menuWidth: '200px'
    });
  });

  it('the jQuery object should have a bigSlide property', function(){
    expect($menuLink.bigSlideAPI).toBeDefined();
  });

  it('all internal components should be exposed on the bigSlide property', function(){
    expect($menuLink.bigSlideAPI.settings).toBeDefined();
    expect($menuLink.bigSlideAPI.model).toBeDefined();
    expect($menuLink.bigSlideAPI.controller).toBeDefined();
    expect($menuLink.bigSlideAPI.view).toBeDefined();
    expect($menuLink.bigSlideAPI.destroy).toBeDefined();
  });

  it('properties of the exposed settings object should have expected values', function(){
    expect($menuLink.bigSlideAPI.settings.side).toEqual('left');
    expect($menuLink.bigSlideAPI.settings.menuWidth).toEqual('200px');
  });

  it('calling view.toggleOpen should open the menu', function(){
    $menuLink.bigSlideAPI.view.toggleOpen();

    expect($menuLink.bigSlideAPI.model.state).toEqual('open');
    expect($menu[0].style.left).toBe("0px");
    expect($menuLink).toHaveClass('active');
  });

  it('calling view.toggleClose should close the menu', function(){
    $menuLink.bigSlideAPI.view.toggleOpen();
    $menuLink.bigSlideAPI.view.toggleClose();
    
    expect($menuLink.bigSlideAPI.model.state).toEqual('closed');
    expect($menu[0].style.left).toBe("-200px");
    expect($menuLink).not.toHaveClass('active');
  });

});

describe('destroy method', function(){
  var $menuLink;
  var $panel;
  var $push;

  beforeEach(function() {
    loadFixtures('test.html');

    $panel = $('.panel').css('color', 'blue');    
    $push = $('.push').css('color', 'red');

    $menuLink = $('.menu-link').bigSlide({
      side:'left',
      menuWidth: '200px'
    });

    $menuLink.trigger('click.bigSlide');

    $menuLink.bigSlideAPI.destroy();
  });

  it('the jQuery object should not have a bigSlide property', function(){
    expect($menuLink.bigSlideAPI).not.toBeDefined();
  });

  it('inline CSS applied by bigSlide should be removed', function(){
    expect($push[0].style.left).toBe('');
    expect($panel[0].style.left).toBe('');    
  });

  it('inline CSS not applied by bigSlide should be preserved', function(){
    expect($push[0].style.cssText.trim()).toBe('color: red;');
    expect($panel[0].style.cssText.trim()).toBe('color: blue;');    
  });

  it('the menu link should not have the active class', function(){
    expect($menuLink.hasClass('active')).toBe(false);
  });

  it('no event handlers should be bound to the menu link', function(){
    expect($._data($menuLink[0], 'events')).toBe(undefined);
  });
});

