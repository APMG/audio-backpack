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


            //window.APMPlayer.play(playable);

        }
    },
  
    lists: function(){
        return this.model.store.find('playlist');
    }.property('playlists'),

    onSelectedListChange:function(val){
        //do nothing if we've got an invalid value
        if (val.selectedList === null || val.selectedList === undefined){
            return;
        }

        //first, get our audio and put it in aar for use inside a closure
        var aud = this.model;
        var context = this;
        //find our list, then when we have it via a promise, add the audio to it
        this.store.find('playlist', val.selectedList).then(function(playlist){
            playlist.get('clip').addObject(aud);
            playlist.save();
            context.set('message','saved!');

            //clear out the run success message
            Ember.run.later(context, function() {
                context.set('message',null);
            }, 1000);

        });

        this.set('message','saving...');

        //done!        
        this.set('selectedList', null);


    }.observes('selectedList')  //makes it watch the selectedList
});