import Ember from "ember";

export default Ember.ObjectController.extend({
    

    playlists: function(){
        console.log('whut?');
        return this.model.store.find('playlist');
    }.property('playlists'),
});