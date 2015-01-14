import Ember from "ember";

export default Ember.Controller.extend({

    clip: function(){
        return this.model;
    }.property('clip'),
    
    actions: {
        close: function() {
            console.log('sending close!');
            return this.send('closeModal');
        },
        addClip: function(playlist){
            var aud = this.model;
                
            //first, create our playlist item
            var playlist_item = this.store.createRecord('playlist-item', {
                playlist: playlist,
                position: null,
                apm_audio: aud.get('apm_audio'),
                notes: '',
                clip: aud,
            });
            //get the playlist we want to add to
            playlist.get('playlist_items').pushObject(playlist_item);
            //save them sequentially
            playlist.save().then(function(){
               playlist_item.save();
            },
            function(err){
                console.log('something went wrong', err);
            });

            // Need to do some fancy animation stuff here

        }
    }


});
