import 'bootstrap';
import Marionette from 'backbone.marionette';
import TodoWidget from 'views/widgets/TodoWidget';

var Application = Marionette.Application.extend({
    region: '#todo-app',
    onStart() {
        this.showView(new TodoWidget());
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const app = new Application();

    app.start();
});
