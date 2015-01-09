import Ember from "ember";

export default Ember.ObjectController.extend({
    //passes all the audio to the latest audio that we're gonna manipulate with an arrayController
    playlists: function(){
        return this.model.store.find('playlist');
    }.property('playlists'),
});