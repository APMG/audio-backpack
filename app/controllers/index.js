import Ember from "ember";

export default Ember.ObjectController.extend({
    latestAudio: function(){
        return this.store.findAll('audio');
    }.property('latestAudio')
});