import Backbone from 'backbone';
import {LocalStorage} from 'backbone.localstorage';
import TodoModel from '../models/TodoModel';

export default Backbone.Collection.extend({
    model: TodoModel,

    localStorage: new LocalStorage('todo-app-storage'),
    comparator: 'created',

    getActive: function() {
        return this.reject(this._isCompleted);
    },

    _isCompleted: function(item) {
        return item.isCompleted();
    }
});
