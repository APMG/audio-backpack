import Ember from "ember";

export default Ember.Component.extend({
    actions: {
        play: function(){
            console.log(this.get('clip.title'), this.get('clip.apm_audio'));

            var playable = APMPlayerFactory.getPlayable({
                title: this.get('clip.title'),
                identifier: this.get('clip.apm_audio'),
                type: 'audio'
            });
            console.log(playable);
            apmplayer_ui.playlist.replacePlayables([playable]);
        },
        
        // a click on the whole clip container li sends you to clip itself
        // TODO: This doesn't seem to work -- action is not bubbling to controller or route
        // need to read this more: http://emberjs.com/api/classes/Ember.Templates.helpers.html#method_action
        goToClip: function(){
            console.log(this.get('clip.id'), this.get('parentView'));
            this.send('goToClipper', this.get('clip.id'));
            //return;
            //this.transitionToRoute('clips.clip',this.get('clip.id'));
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