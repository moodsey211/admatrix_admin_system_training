import Backbone from 'backbone';

export default Backbone.Model.extend({
    defaults: {
        description: '',
        completed: false,
        created: 0
    },

    initialize: function() {
        if (this.isNew()) {
            this.set('created', Date.now());
        }
    },

    markAsCompleted: function() {
        this.set('completed', true);
    },

    markAsIncomplete: function() {
        this.set('completed', false);
    },

    isCompleted: function() {
        return this.get('completed');
    },

    matchesFilter: function(filter) {
        if (filter === 'all') {
            return true;
        } else if (filter === 'active') {
            return !this.isCompleted();
        } else {
            return this.isCompleted();
        }
    }
});
