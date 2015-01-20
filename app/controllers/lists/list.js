import Ember from "ember";
import ENV from '../../config/environment';

export default Ember.ObjectController.extend({

    init: function(){
        this._super();
        this.set('totalDuration',0);
        this.set('clips',[]);

        Ember.run.later(this, function() {
          this.addObserver('model.items', this.clipChanger);
        }, 500);

    },

    clipCount: function(){
        var list_items = this.get('items');
        return list_items.get('length');
    }.property('model.items'),

    clipChanger: function(){
        Ember.run.once(this, 'clipsDidChange');
    }.on('init'), 



    clipsDidChange: function() {
        // console.log('clipsDidChange ran');
        this.set('totalDuration',0);
        this.set('clips',[]);
    

        var items = this.get('items');
        console.log(items);
        var that = this;
        items.forEach(function(item){
            var apm_audio = item.get('apm_audio');

            console.log('item', item.get('position'));

            that.model.store.find('clip',{'apm_audio':apm_audio}).then(function(clip){

                console.log(this, this.get('position'));

                var list_item_position = this.get('position'); //item.get('position');
                //console.log('id', item.id, list_item_position);
                var firstClip = clip.get('firstObject');
                
                firstClip.set('item_id', this.id);
                firstClip.set('item_position', list_item_position);

                //console.log(firstClip);

                // that.clips.push(firstClip);
                that.clips.push(firstClip);
                 //pass the list item id in so we can use it to keep the sort and tracking
                //update durations
                var newDur = that.get('totalDuration') + firstClip.get('duration');
                that.set('totalDuration', newDur); 
                //console.log(firstClip.get('duration'));
            }.bind(item));
            
        });
    },

    isCurrentUserOwner: function(){
        if (this.get('session.isAuthenticated')){
            var loggedInId = this.get('session.user_id');
            var userId = this.get('model.user.id');
            if (loggedInId ===  userId){
                return true;
            }
        }
        return false;
    }.property(),


    actions: {
        playAll: function(){
            /**
             * This needs to be re-worked
             * Presently, we're sending each of the playbales to the player, then keeping track of which the first one was. 
             * THis is bad, because our playlist eventually gets realy long and not correct.
             * We need to be able to send a new playlist to the player, replacing the existing one, and then starting at the begining of said new playlist.
             * 
             */
            
            //var clipsPlayable = [];
            var firstClip;
            var clips = this.get('clips');
            clips.forEach(function(clip){
                var playable = APMPlayerFactory.getPlayable({
                    title: clip.get('title'),
                    identifier: clip.get('apm_audio'),
                    type: 'audio'
                });
                //clipsPlayable.push(playable);
                Ember.$('#apm_player_container').apmplayer_ui('addPlayable', playable);
                if (!firstClip){
                    firstClip = playable;
                }

            });
            if (firstClip !== null){
                Ember.$('#apm_player_container').apmplayer_ui('gotoPlaylistItem', firstClip.identifier);
            }

            //Ideally, would replace existing playlist here. 

            return false;
        },
    },
    /**
     * Generates the short URL for the playlist
     * Needs to be kept in sync with the not found route
     * @return {String} url for playlist
     */
    listURL: function(){
        var shareSlug = (parseInt(this.get('id'), 10) + 10000).toString(36);
        return window.location.origin + ENV.baseURL + shareSlug;
    }.property('model'),
    
    /**
     * Gives us a nice mailto link we can use with bind-attr
     * @return {String} includes a subject and body but no recipient
     */
    mailto: function(){
        var mailString = "mailto:?subject=" + encodeURIComponent('Playlist from Audio Backpack');
        mailString += '&body=' + encodeURIComponent( this.get('title') + ":\n" + this.get('listURL'));
        return  mailString;
    }.property('model')
});