[![Build Status](https://travis-ci.org/ascott1/bigSlide.js.png?branch=master)](https://travis-ci.org/ascott1/bigSlide.js)

bigSlide is a teeny tiny (~1kb compressed) jQuery plugin for creating off-screen slide panel navigation.

It will slide the navigation panel as well as any containers given the `.push` class (or a class of your choosing in the settings).

## Installation

Download the [minified](https://github.com/ascott1/bigSlide.js/blob/master/dist/bigSlide.min.js) or [unminified](https://github.com/ascott1/bigSlide.js/blob/master/dist/bigSlide.js) source.

### Using Bower?

Me too (high five)! bigSlide is available as a Bower package. Simply run:

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


For manual access to the open and close functions as well as the current state, initialize like this:

	<script>
    $(document).ready(function() {
    	//initialize
        var bigSlide = $('.menu-link').bigSlide();
        
        //jquery example for usage of menu functions and state:
        $('.custom-menu-button').on('click', function(){
	        if (bigSlide._state === 'open'){
	           bigSlide.close();	
	        }
	        else {
	           bigSlide.open();	
	        }
        });
        
    });
    </script>


## Options

| Variable   | Default Value | Description       |
| ---------- |:-------------:| -----------------:|
| menu       | ('#menu')     | The attribute ID of the navigation menu |
| push       | ('.push')     | The class given to additional elements to 'push' when the nav is toggled  |
| activeBtn   | ('.menu-open')| The class given to menu button |
| side       | left          | The side of the navigation menu (either 'right' or 'left') |
| menuWidth  | 15.6em        | The width of the navigation menu |
| speed      | 300           | The speed (in milliseconds) of the navigation menu    |


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

