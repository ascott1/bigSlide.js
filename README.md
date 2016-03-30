[![Build Status](https://travis-ci.org/ascott1/bigSlide.js.png?branch=master)](https://travis-ci.org/ascott1/bigSlide.js)

bigSlide is a teeny tiny (~1kb compressed) jQuery plugin for creating off-screen slide panel navigation.

It will slide the navigation panel as well as any containers given the `.push` class (or a class of your choosing in the settings).

## Installation

Download the [minified](https://github.com/ascott1/bigSlide.js/blob/master/dist/bigSlide.min.js) or [unminified](https://github.com/ascott1/bigSlide.js/blob/master/dist/bigSlide.js) source.

### Using npm or Bower?

bigSlide is available as noth a npm and Bower package. Simply run:

```
npm install bigslide
```

**or**

```
bower install bigSlide
```


## Getting Started

In your document, include a link to toggle the navigation:

	<a href="#menu" class="menu-link">&#9776;</a>

And your nav menu:

	<nav id="menu" class="panel" role="navigation">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">The Ballad of El Goodo</a></li>
            <li><a href="#">Thirteen</a></li>
            <li><a href="#">September Gurls</a></li>
            <li><a href="#">What's Going Ahn</a></li>
        </ul>
	</nav>


Reference jQuery and the big-slide.js file:


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="jquery.big-slide.js"></script>


To initialize the plugin,:

	<script>
    $(document).ready(function() {
        $('.menu-link').bigSlide();
    });
    </script>

## Options

| Variable    | Default Value | Description       |
| ----------- |:-------------:| -----------------:|
| menu        | ('#menu')     | The attribute ID of the navigation menu |
| push        | ('.push')     | The class given to additional elements to 'push' when the nav is toggled  |
| side        | left          | The side of the navigation menu (either 'right' or 'left') |
| menuWidth   | 15.6em        | The width of the navigation menu |
| state       | closed        | The default state of the navigation menu (either 'closed' or 'open') |
| saveState   | false         | Set this to `true` to allow the navigation menu to remember it's previous state when navigating |
| speed       | 300           | The speed (in milliseconds) of the navigation menu    |
| easyClose   | false         | Set this to `true` to allow users to toggle the menu closed with any click    |
| activeBtn   | active        | This class is added to the menu button when it is open. By default the class is `.active`    |
| beforeOpen  | function() {} | A method called before the trigger open event |
| afterOpen   | function() {} | A method called after the trigger open event |
| beforeClose | function() {} | A method called before the trigger close event |
| afterClose  | function() {} | A method called after the trigger close event |

## Other notes

Although bigSlide will automatically position your menu off screen, I recommend adding the following to your CSS to prevent a flash of the menu on load:

	.panel {
		position: fixed;
		left: -15.625em; /*right or left and the width of your navigation panel*/
		width: 15.625em; /*should match the above value*/
	}

Additionally, any elements that use the `.push` class should be relatively positioned:

```
.wrap {
  position: relative;
}
```

If you want to shrink the main container div instead of only pushing it with the `.push` class so you can work in the application with the navbar open, the `.shrink` class will do the work.

## License

The MIT License (MIT)

Copyright (c) 2013 Adam Scott

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
