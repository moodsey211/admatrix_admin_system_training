import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import TodoApplicationView from '../views/TodoApplicationView';
import TodoCollection from './collections/TodoCollection';

/*var TodoRouter = Marionette.AppRouter.extend({
    appRoutes: {
        '*filter': 'filterItems'
    }
});*/

export default Marionette.Application.extend({
    region: '#todo-app',
    todoList: null,

    initialize: function() {
        this.todoList = new TodoCollection();
    },

    onStart() {
        this.showView(new TodoApplicationView({
            collection: this.todoList
        }));

        /*ctl.router = new TodoRouter({
            controller: ctl
        });*/

        this.todoList.fetch();
        Backbone.history.start();
    }
});
