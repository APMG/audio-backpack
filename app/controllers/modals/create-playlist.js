import Ember from "ember";

export default Ember.Controller.extend({
    playlistTitle: '',
    playlistDescription: '',

    playlist: function(){
        return this.model;
    }.property('playlist'),
    
    actions: {
        close: function() {
            console.log('sending close!');
            return this.send('closeModal');
        },
        createPlaylist: function(){
            console.log('Ok/create recieved', this.playlistTitle, this.playlistDescription);

            var user = this.get('session.user');

            var cleanTitle = this.get('playlistTitle');

            if (!cleanTitle.trim()) { return; }
            //create our list
            var playlist = this.store.createRecord('playlist', {
                title: cleanTitle,
                description: this.playlistDescription,
                user: user
            });
            playlist.save();
            
            //clear out values for next use
            this.set('playlistTitle', '');
            this.set('playlistDescription', '');


            return this.send('closeModal');
        }
    }


});