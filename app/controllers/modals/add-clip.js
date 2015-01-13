import Ember from "ember";

export default Ember.ObjectController.extend({
    selectedList: null,
    
    playlists: function(){

        var userID = this.get('session.user.id');
        var myPlaylists = this.model.store.find('playlist',{user:userID});

        console.log(myPlaylists);

        // console.log(myPlaylists);
        // myPlaylists.forEach(function(playlist){
        //     console.log('woo',playlist.id);
        //     playlist.has_clip = 'YES';
        // });
        return myPlaylists;




    }.property('playlists'),

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