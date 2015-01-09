import Ember from "ember";

export default Ember.ObjectController.extend({
    
    playlists: function(){
        return this.model.store.find('playlist');
    }.property('playlists'),

    /*
     * cleans out annloying spaces that we do not want there 
     */
    ownerApos: function(){
        var fname = this.get('model.first_name');
        return fname.trim()+'\'s';
    }.property('model.first_name')
});