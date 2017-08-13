import Marionette from 'backbone.marionette';
import RootTemplate from './todoapplication/templates/RootTemplate.tpl';
import InputFieldView from './todoapplication/InputFieldView';

export default Marionette.View.extend({
    template: RootTemplate,

    regions: {
        input: '#input-field'
    },

    onRender: function() {
        this.showChildView('input', new InputFieldView({
            collection: this.collection
        }));
    }
});
