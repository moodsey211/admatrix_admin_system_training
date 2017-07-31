# Simple TODO application with Backbone

Do not copy and paste them and write them yourself.

## First step
[Hello Backbone.js](http://jasongiedymin.github.io/hello-backbonejs/)

## Second step

* [demo](http://todomvc.com/examples/backbone/)
* [source](https://github.com/tastejs/todomvc/tree/gh-pages/examples/backbone)

### The libraries you must use

* [Backbone.js](http://backbonejs.org/) / [annotated source code of backbonejs](http://backbonejs.org/docs/backbone.html)
* [Underscore.js](http://underscorejs.org / [annotated source code of underscore](http://underscorejs.org/docs/underscore.html))
* [jQuery](https://jquery.com/)
* [Bootstrap](http://getbootstrap.com/)

### Steps

1. Make "todo.html".
1. Place a reset style css "reset.css". There are many kinds of reset style css, choose by yourself.
1. Plact a "custom.css" which override styles.
  * Order is below.
  * reset.css --> bootstrap.css --> custom.css
1. Just use "Backbone.Collection","Backbone.Model" and "Backbone.View".
  * You don't have to use "Router". You can write all codes in a file.

todo.js
```javascript
$(function(){
  // You can write all codes here.
　
});
```

### Hint

#### Get the value in an input text box with JQuery

```html
<input type="text" id="js_name" />
```

```javascript
//Get
var bla = $('#js_name').val();

//Set
$('#js_name').val(bla);
```

### Reference
