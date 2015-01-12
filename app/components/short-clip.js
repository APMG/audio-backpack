import Ember from "ember";

export default Ember.Component.extend({
    selectedList: null,
    actions: {
        play: function(model){
            //console.log(thing, thing.get('apm_audio'));
            console.log(model.get('apm_audio'));
            var playable = APMPlayerFactory.getPlayable({
                title: model.get('title'),
                identifier: model.get('apm_audio'),
                type: 'audio'
            });
            console.log(playable);
            //Playlist.add(playable);

            Ember.$('#apm_player_container').apmplayer_ui('addPlayable', playable);
            Ember.$('#apm_player_container').apmplayer_ui('gotoPlaylistItem', playable.identifier);


        },
        openModal: function(modalName, model) {

            console.log(modalName, model);

            //Hmm
            console.log(  this.controllerFor(modalName) ) ;

            // this.controllerFor(modalName).set('model', model);
            // return this.render(modalName, {
            //     into: 'application',
            //     outlet: 'modal'
            // });
        },
    },

   
});