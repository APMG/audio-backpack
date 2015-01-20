import Ember from "ember";
import ENV from '../../config/environment';

export default Ember.ObjectController.extend({

    init: function(){
        this._super();
        this.set('totalDuration',0);

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
    

        var items = this.get('items');
        var that = this;
        items.forEach(function(item){
            var apm_audio = item.get('apm_audio');
            that.model.store.find('clip',{'apm_audio':apm_audio}).then(function(clip){
                var firstClip = clip.get('firstObject');
                //update durations
                var newDur = that.get('totalDuration') + firstClip.get('duration');
                that.set('totalDuration', newDur); 
            }.bind(item));
            
        });
    },

    items: (function() {
        return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
            sortProperties: ['position'],
            sortAscending: true,
            content: this.get('content.items')
        });
    }).property('content.items'),


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
            var items = this.get('items');
            items.forEach(function(item){
                var playable = APMPlayerFactory.getPlayable({
                    identifier: item.get('apm_audio'),
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
        var baseDomain = ENV.baseDomain; //gracefully deal with local development
        if (baseDomain === ''){
            baseDomain = window.location.origin;
        }
        return baseDomain + ENV.baseURL + shareSlug;
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