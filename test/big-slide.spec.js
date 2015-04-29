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