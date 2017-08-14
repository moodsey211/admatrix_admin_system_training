import 'bootstrap';
import jQuery from 'jquery';
import {Radio, Model} from 'backbone';
import TodoApplication from './TodoApplication';

window.Application = {
    instance: new TodoApplication(),
    channels: {
        filter: Radio.channel('todo-app-filter-channel')
    },
    router: null
};

var filterState = new Model({
    filter: 'all'
});

jQuery(document).ready(function() {

    window.Application.channels.filter.reply('filterState', function() {
        return filterState;
    });

    window.Application.instance.start();
});
