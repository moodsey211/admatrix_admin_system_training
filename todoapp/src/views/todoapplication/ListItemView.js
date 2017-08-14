import Marionette from 'backbone.marionette';
import ListViewTemplate from './templates/ListViewTemplate.tpl';

export default Marionette.View.extend({
    tagName: 'tr',
    template: ListViewTemplate,

    ui: {
        checkbox: 'label.btn',
        deleteButton: 'a.btn span.glyphicon-remove'
    },

    events: {
        'click @ui.checkbox': 'markItem',
        'click @ui.deleteButton': 'removeItem'
    },

    modelEvents: {
        change: 'render'
    },

    removeItem: function() {
        this.model.destroy();
    },

    markItem: function() {
        let completed = this.model.isCompleted();

        if (completed) {
            this.model.markAsIncomplete();
        } else {
            this.model.markAsCompleted();
        }

        this.model.save();
    },

    onRender: function() {
        let completed = this.model.isCompleted();

        if (completed) {
            if (!this.$el.hasClass('cleared')) {
                this.$el.addClass('cleared');
            }
        } else {
            this.$el.removeClass('cleared');
        }
    }
});
