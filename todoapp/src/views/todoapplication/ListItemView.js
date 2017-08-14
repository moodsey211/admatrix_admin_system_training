import Marionette from 'backbone.marionette';
import ListViewTemplate from './templates/ListViewTemplate.tpl';

export default Marionette.View.extend({
    tagName: 'tr',
    template: ListViewTemplate
});
