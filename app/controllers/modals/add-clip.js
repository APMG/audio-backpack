import Ember from "ember";

export default Ember.Controller.extend({
    selectedList: null,
    
    playlists: function(){

        /**
         * TODO: 
         * This doesn't update when you create new playlists after you have viewed the modal once
         * It might be because it's a shitty component, which is pretty annoying
         * But, it could potentially be worked around by this:
         * http://stackoverflow.com/questions/20521967/emberjs-how-to-load-multiple-models-on-the-same-route
         *
         * See the section in answer 2, "if you answered no"
         */

        var userID = this.get('session.user.id');
        
        return this.model.store.fetch('playlist',{user:userID});

        //console.log(myPlaylists);

        // console.log(myPlaylists);
        // myPlaylists.forEach(function(playlist){
        //     console.log('woo',playlist.id);
        //     playlist.has_clip = 'YES';
        // });
        //return myPlaylists;




    }.property(),


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