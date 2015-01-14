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
            playlist.get('clips').addObject(aud);
            playlist.save();

        }
    }


});