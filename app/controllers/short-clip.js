import Ember from "ember";

export default Ember.ObjectController.extend({
    actions: {
         play: function(model){
            //console.log(thing, thing.get('apm_audio'));
            console.log(model.get('apm_audio'));
            var playable = APMPlayerFactory.getPlayable({
                title: model.get('title'),
                identifier: model.get('apm_audio'),
                type: 'audio'
            });
            //console.log(playable);
            //Playlist.add(playable);

            Ember.$('#apm_player_container').apmplayer_ui('addPlayable', playable);
            Ember.$('#apm_player_container').apmplayer_ui('gotoPlaylistItem', playable.identifier);
        } 
    },
    
    /**
     * Gets the list of playlists to pass to the modal component
     * components dont seem to bind to updates, so this works around that.
     */
    lists: function(){
        var userID = this.get('session.user.id');
        return this.model.store.find('playlist', {user:userID});
    }.property('playlists'),
   
});