jasmine.getFixtures().fixturesPath = 'test/fixtures';

describe('bigSlide default states', function() {
  var $menu

  beforeEach(function() {
    loadFixtures('test.html');
    $('.menu-link').bigSlide();
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