import Ember from "ember";

export default Ember.ObjectController.extend({
    //passes all the audio to the latest audio that we're gonna manipulate with an arrayController
    latestClips: function(){
        return this.store.all('clip');
    }.property('latestClips')
});