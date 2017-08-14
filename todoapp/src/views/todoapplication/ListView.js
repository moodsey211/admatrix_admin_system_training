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

    ui: {
        allCheckbox: 'label.btn'
    },

    events: {
        'click @ui.allCheckbox': 'markAllItem'
    },

    onRender: function() {
        this.showChildView('listBody', new ListBodyView({
            collection: this.collection
        }));
    },

    markAllItem: function() {
        let completed = !this.ui.allCheckbox.hasClass('active');

        this.collection.each(function(item) {
            if (completed) {
                item.markAsCompleted();
            } else {
                item.markAsIncomplete();
            }

            item.save();
        });
    }
});
