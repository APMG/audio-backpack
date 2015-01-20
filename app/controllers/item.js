import Ember from "ember";

export default Ember.ObjectController.extend({
    apm_audio: function(){
        return this.model.get('apm_audio');
    }.property('model'),

    clip: function(){
        var apm_audio = this.model.get('apm_audio');

        var promise = this.store.find('clip',{apm_audio: apm_audio}); 
        return promise;

    }.property('clip'),

    actions: {
        removeItem: function(){
            // Helpful information on how to do this...
            // https://github.com/kurko/ember-localstorage-adapter/issues/40
            // but my simple method below seems to work fine from the client side, I think
            var item = this.get('model');
            item.deleteRecord();
            item.save(); 
        }
    }


});