import Marionette from 'backbone.marionette';
import ListTemplate from './templates/ListTemplate.tpl';
import ListBodyView from './ListBodyView';

export default Marionette.View.extend({
    template: ListTemplate,

    regions: {
        listBody: {
            el: 'tbody',
            replaceElement: true
        }
    },

    onRender: function() {
        this.showChildView('listBody', new ListBodyView({
            collection: this.collection
        }));
    }
});
