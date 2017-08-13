import Marionette from 'backbone.marionette';
import InputFieldTemplate from './templates/InputFieldTemplate.tpl';

export default Marionette.View.extend({
    template: InputFieldTemplate,

    ui: {
        input: '#todo-task-input'
    },

    events: {
        'keypress @ui.input': 'onInputKeyPress',
        'keyup @ui.input': 'onInputKeyUp'
    },

    onInputKeyPress: function(e) {
        let ENTER_KEY = 13;
        let todoText = this.ui.input.val().trim();

        if (e.which === ENTER_KEY && todoText) {
            this.collection.create({
                description: todoText
            });
            this.render();
        }
    },

    onInputKeyUp: function(e) {
        let ESC_KEY = 27;

        if (e.which === ESC_KEY) {
            this.render();
        }
    }
});
