import Ember from "ember";

export default Ember.ObjectController.extend({
    selectedList: null,
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


        }
    },

   
});