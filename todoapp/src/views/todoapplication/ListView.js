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

    collectionEvents: {
        all: 'toggleDefaultStatus'
    },

    initialize: function() {
        this.listenTo(window.Application.channels.filter.request('filterState'), 'change:filter', this.render, this);
    },

    toggleDefaultStatus: function() {
        var allCompleted = this.collection.reduce(function(left, right) {
            return left && right.isCompleted();
        }, true);

        this.ui.allCheckbox.removeClass('active');

        if (allCompleted) {
            this.ui.allCheckbox.addClass('active');
        }
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
