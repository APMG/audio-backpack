import Ember from "ember";

export default Ember.ObjectController.extend({
    actions: {
        play: function(){
            console.log(this.model.get('apm_audio'));
            var playable = APMPlayerFactory.getPlayable({
                title: this.model.get('title'),
                identifier: this.model.get('apm_audio'),
                type: 'audio'
            });
            console.log(playable);
            //Playlist.add(playable);

            Ember.$('#apm_player_container').apmplayer_ui('addPlayable', playable);
            Ember.$('#apm_player_container').apmplayer_ui('gotoPlaylistItem', playable.identifier);


            //window.APMPlayer.play(playable);

        }
    },
    /**
     * Gets the list of playlists to pass to the modal component
     * components dont seem to bind to updates, so this works around that.
     */
    lists: function(){
        var userID = this.get('session.user.id');
        return this.model.store.find('list', {user:userID});
    }.property('lists'),

});