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
        
        // a click on the whole clip container li sends you to clip itself
        goToClip: function(){
            this.transitionToRoute('clips.clip',this);
            //console.log('clicked',this);
        }
    },
    
    /**
     * Gets the list of playlists to pass to the modal component
     * components dont seem to bind to updates, so this works around that.
     */
    lists: Ember.computed('lists', function(){
        var userID = this.get('session.user.id');
        return this.model.store.find('list', { user:userID, per_page:1000 });
    }),
   
});