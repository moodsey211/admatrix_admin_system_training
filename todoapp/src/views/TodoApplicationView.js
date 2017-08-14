import Marionette from 'backbone.marionette';
import RootTemplate from './todoapplication/templates/RootTemplate.tpl';
import InputFieldView from './todoapplication/InputFieldView';
import ListView from './todoapplication/ListView';
import FooterView from './todoapplication/FooterView';

export default Marionette.View.extend({
    template: RootTemplate,

    regions: {
        input: '#input-field',
        list: '#todo-list',
        footer: '#todo-footer'
    },

    onRender: function() {
        this.showChildView('input', new InputFieldView({
            collection: this.collection
        }));
        this.showChildView('list', new ListView({
            collection: this.collection
        }));
        this.showChildView('footer', new FooterView({
            collection: this.collection
        }));

        this.collection.on('all', this.hideElements, this);
    },

    hideElements: function() {
        $('#todo-list, #todo-footer').toggle(!!this.collection.length);
    }
});
