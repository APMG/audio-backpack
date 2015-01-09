import Ember from "ember";

export default Ember.ObjectController.extend({
    
    playlists: function(){
        return this.model.store.find('playlist');
    }.property('playlists'),
});