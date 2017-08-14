import Marionette from 'backbone.marionette';
import ListItemView from './ListItemView';

export default Marionette.CollectionView.extend({
    tagName: 'tbody',

    childView: ListItemView,

    filter: function(item) {
        var filteredOn = window.Application.channels.filter.request('filterState').get('filter');
        return item.matchesFilter(filteredOn);
    }
});
