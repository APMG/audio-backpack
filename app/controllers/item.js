import Ember from "ember";

export default Ember.Controller.extend({
    apm_audio: Ember.computed('model', function(){
        return this.model.get('apm_audio');
    }),

    clip: Ember.computed('clip', function(){
        var apm_audio = this.model.get('apm_audio');

        var promise = this.store.find('clip',{apm_audio: apm_audio}); 
        return promise;

    }),

    actions: {
         play: function(){
            var playable = APMPlayerFactory.getPlayable({
                //title: this.model.get('title'),
                identifier: this.model.get('apm_audio'),
                type: 'audio'
            });
            apmplayer_ui.playlist.replacePlayables([playable]);
        } 
    },

});