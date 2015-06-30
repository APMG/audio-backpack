import Ember from "ember";

export default Ember.Controller.extend({
    actions: {
        play: function(){
            var playable = APMPlayerFactory.getPlayable({
                title: this.model.get('title'),
                identifier: this.model.get('apm_audio'),
                type: 'audio'
            });
            apmplayer_ui.playlist.replacePlayables([playable]);
        },

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