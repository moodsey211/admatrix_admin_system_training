# Simple TODO application with Backbone

Please do not copy and paste them and write them yourself.

## 1st Tutorial.
[Hello Backbone.js](http://jasongiedymin.github.io/hello-backbonejs/)

## 2nd Tutorial.

* [demo](http://todomvc.com/examples/backbone/)
* [source](https://github.com/tastejs/todomvc/tree/gh-pages/examples/backbone)

### The libraries you must use

* [Backbone.js](http://backbonejs.org/) / [annotated source code of backbonejs](http://backbonejs.org/docs/backbone.html)
* [Underscore.js](http://underscorejs.org / [annotated source code of underscore](http://underscorejs.org/docs/underscore.html))
* [jQuery](https://jquery.com/)
* [Bootstrap](http://getbootstrap.com/)

### Requirements

* Please make "todo.html".
* Please use a reset style css "reset.css". There are a lot of reset style css, please choose one of them by yourself.
* Please make a "custom.css" which overrides `reset.css`'s style and `bootstrap.css`'s style.
* Please use just "Backbone.Collection", "Backbone.Model" and "Backbone.View".
* You don't have to use "Router". You can write all codes in one file.

### Hint

#### todo.html

```html
...
<head>
  ...
  <link rel="stylesheet" href="path/reset.css">
  <link rel="stylesheet" href="path/bootstrap.css">
  <link rel="stylesheet" href="path/custom.css">
  ...
</head>
...
```

#### todo.js

```javascript
$(function(){
  // You can write all codes here.
　
});
```

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
