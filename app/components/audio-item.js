import Ember from "ember";

/**
 * 
 */

export default Ember.Component.extend({



    actions: {
        play: function(){
            console.log(this.get('title'), this.get('model.apm_audio'));

            var playable = APMPlayerFactory.getPlayable({
                title: this.get('model.title'),
                identifier: this.get('model.apm_audio'),
                type: 'audio'
            });
            console.log(playable);
            apmplayer_ui.playlist.replacePlayables([playable]);
        },
        
        // a click on the whole clip container li sends you to clip itself
        goToClip: function(){
            this.transitionToRoute('clips.clip',this.get('model.id'));
        }
    },
    
    // /**
    //  * Gets the list of playlists to pass to the modal component
    //  * components dont seem to bind to updates, so this works around that.
    //  */
    // lists: Ember.computed('lists', function(){
    //     var userID = this.get('session.user.id');
    //     return this.model.store.find('list', { user:userID, per_page:1000 });
    // }),
   




});