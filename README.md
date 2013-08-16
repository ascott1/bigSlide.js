bigSlide is a teeny tiny (~1kb compressed) jQuery plugin for creating off-screen slide panel navigation.

It will slide the navigation panel as well as any containers given the `.push` class (or a class of your choosing in the settings).

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

| Variable   | Default Value | Description       |
| ---------- |:-------------:| -----------------:|
| menu       | ('#menu')     | The attribute ID of the navigation menu |
| push       | ('.push')     | The class given to additional elements to 'push' when the nav is toggled  |
| menuWidth  | 15.6em        | The width of the navigation menu |
| speed      | 300           | The speed (in milliseconds) of the navigation menu    |

