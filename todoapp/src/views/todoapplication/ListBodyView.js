import Marionette from 'backbone.marionette';
import ListItemView from './ListItemView';

export default Marionette.CollectionView.extend({
    tagName: 'tbody',

    childView: ListItemView
});
