# Tutorial of JavaScript

## Documents

* [Backbone.js Official](http://backbonejs.org/)
* [Marionette.js Official](http://marionettejs.com/)
* [Marionette.js Unofficial](https://marionette.gitbooks.io/marionette-guides/en/index.html)

## Tutorial

* [Backbone.js TODO](backbonejs.md)
* [Backbone.js Contact Manager](https://github.com/dmytroyarmak/backbone-contact-manager)
* [Marionette.js](http://todomvc.com/examples/backbone_marionette/)

## Important Components of Marionette.js

### Regions

* "領域"に名前を付けて管理する機能。主に子ビューのレンダリング領域として用いる

[Reference of Regions](http://marionettejs.com/docs/v3.1.0/marionette.region.html)

### UI

* "部品"に名前を付けて管理する機能。主にclickやchange等のイベントハンドリングで用いる

[Reference of UI](http://marionettejs.com/docs/v3.1.0/marionette.view.html#defining-ui)

### CollectionView

* Marionette.CollectionViewはtemplateを持たない。その代わりに、Nの子ビューを持つ
* \<table\>の場合なら、CollectionViewは\<tbody\>、子ビューは\<tr\>
* \<ul\>の場合なら、CollectionViewは\<ul\>、子ビューは\<li\>
* 正しく使えば、子ビュー達のレンダリング制御は自動でやってくれる

[Reference of CollectionView](http://marionettejs.com/docs/v3.1.0/marionette.collectionview.html)
