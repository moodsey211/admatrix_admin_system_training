import Marionette from 'backbone.marionette';
import FooterTemplate from './templates/FooterTemplate.tpl';

export default Marionette.View.extend({
    template: FooterTemplate,

    ui: {
        filters: '.filters',
        active: '.all-active',
        completed: '.all-completed',
        all: '.all-entries',
        clearAll: 'a.clear-all-items',
        clearCompleted: 'a.clear-completed-items'
    },

    events: {
        'click @ui.clearAll': 'clearAllItems',
        'click @ui.clearCompleted': 'clearCompletedItems'
    },

    collectionEvents: {
        all: 'render'
    },

    initialize: function() {
        this.listenTo(window.Application.channels.filter.request('filterState'), 'change:filter', this.updateFilterSelection, this);
    },

    onRender: function() {
        this.updateFilterSelection();
    },

    serializeData: function() {
        let active = this.collection.getActive().length;
        let total = this.collection.length;

        return {
            allEntriesCount: total,
            activeEntriesCount: active,
            completedEntriesCount: total - active
        };
    },

    updateFilterSelection: function() {
        this.ui.filters.removeClass('active');
        this.ui[window.Application.channels.filter.request('filterState').get('filter')].addClass('active');
    },

    clearCompletedItems: function() {
        this.collection.each(function(item) {
            if (item.isCompleted()) {
                item.destroy();
            }
        });
    },

    clearAllItems: function() {
        this.collection.reset();
    }
});
