import 'bootstrap';
import jQuery from 'jquery';
import {Radio} from 'backbone';
import TodoApplication from './TodoApplication';

window.Application = {
    instance: new TodoApplication(),
    channels: {
        filter: Radio.channel('todo-app-filter-channel')
    }
};

jQuery(document).ready(function() {
    window.Application.instance.start();
});
