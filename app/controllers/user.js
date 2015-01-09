import Ember from "ember";

export default Ember.ObjectController.extend({
    
    playlists: function(){
        // TODO: Presently this does not correctly filter to the user in the route/url
        // That should be fixed
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