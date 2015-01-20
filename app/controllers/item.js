import Ember from "ember";

export default Ember.ObjectController.extend({
    apm_audio: function(){
        return this.model.get('apm_audio');
    }.property('model'),

    clip: function(){
        var apm_audio = this.model.get('apm_audio');

        var promise = this.store.find('clip',{apm_audio: apm_audio}); 
        return promise;

    }.property('clip')


});