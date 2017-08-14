import Marionette from 'backbone.marionette';
import FooterTemplate from './templates/FooterTemplate.tpl';

export default Marionette.View.extend({
    template: FooterTemplate,

    ui: {
        filters: '.filters',
        active: '.all-active',
        completed: '.all-completed',
        all: '.all-entries'
    },

    collectionEvents: {
        all: 'render'
    },

    initialize: function() {
        this.listenTo(window.Application.channels.filter.request('filterState'), 'change:filter', this.updateFilterSelection, this);
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
        this.ui.filters.removeClass('selected');
        this.ui[window.Application.channels.filter.request('filterState').get('filter')].addClass('selected');
    },
});
