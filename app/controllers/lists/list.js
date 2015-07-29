import Ember from "ember";
import ENV from '../../config/environment';

export default Ember.Controller.extend({

    init: function(){
        this._super();
        this.set('totalDuration',0);

        Ember.run.later(this, function() {
          this.addObserver('model.items', this.clipChanger);
        }, 500);
    },

    clipCount: Ember.computed('model.items', function(){
        var list_items = this.get('model.items');
        return list_items.get('length');
    }),

    clipChanger: Ember.on('init', function(){
        Ember.run.once(this, 'clipsDidChange');
    }), 


    // lists: Ember.computed('lists', function(){
    //     var userID = this.get('session.user.id');
    //     return this.model.store.find('list', { user:userID, per_page:1000 });
    // }),



    clipsDidChange: function() {
        // console.log('clipsDidChange ran');
        this.set('totalDuration',0);
    
        var items = this.get('model.items');
        var that = this;
        items.forEach(function(item){
            var apm_audio = item.get('apm_audio');
                 
            that.model.store.filter('clip',function(clip){
                //console.log(clip.get('apm_audio'));
                if (clip.get('apm_audio') === apm_audio){
                    var newDur = that.get('totalDuration') + clip.get('duration');
                    that.set('totalDuration', newDur); 
                    //return clip;
                }
                
            }); 
        });
    },

    isTitleEditing: false,
    isDescEditing: false,

    // items: (function() {
    //     return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
    //         sortProperties: ['position'],
    //         sortAscending: true,
    //         content: this.get('content.items')
    //     });
    // }).property('content.items'),

    /**
     * Even though this is set on the route, we need to update it here, too, because we also use this controller
     * as an item controller when listing playlists
     * @return {Boolean} 
     */
    isCurrentUserOwner: Ember.computed(function(){
        if (this.get('session.isAuthenticated')){
            var loggedInId = this.get('session.user_id');
            var userId = this.get('model.user.id');
            if (loggedInId ===  userId){
                return true;
            }
        }
        return false;
    }),


    actions: {
        playAll: function(){
            var clipsPlayable = [];
            var items = this.get('model.items');
            items.forEach(function(item){
                var playable = APMPlayerFactory.getPlayable({
                    identifier: item.get('apm_audio'),
                    type: 'audio'
                });
                clipsPlayable.push(playable);

            });
            apmplayer_ui.playlist.replacePlayables(clipsPlayable);
            return false;
        },
        editTitle: function() {
            //console.log('did an edit');
            this.set('isTitleEditing', true);
        },
        acceptTitleChanges: function() {
            this.set('isTitleEditing', false);
            if (!Ember.isEmpty(this.get('model.title'))) {
                this.get('model').save();
            }
        },
        editDesc: function() {
            //console.log('did an edit');
            this.set('isDescEditing', true);
        },
        acceptDescChanges: function() {
            this.set('isDescEditing', false);
            //if (!Ember.isEmpty(this.get('model.description'))) {
            this.get('model').save();
            //}
        },

        movedItem: function(item, oldIndex, newIndex){
            //server position starts counting at 1, not 0 like jquery ui 
            oldIndex++;
            newIndex++;
            item.set('position', newIndex);
            item.save();
            

        },
        
        removeItem: function(item){
            // Helpful information on how to do this...
            // https://github.com/kurko/ember-localstorage-adapter/issues/40
            // but my simple method below seems to work fine from the client side, I think
            item.deleteRecord();
            item.save(); 
        },

        // a click on the whole list container li sends you to clip itself
        goToList: function(){
            this.transitionToRoute('lists.list',this.get('model.id'));  //transition using ID so model hook is triggered
            return false;
        },

        goToClip: function(clipID){        
            //console.log('got clip', clipID);
            this.transitionToRoute('clips.clip',clipID);
        }

    },
    /**
     * Generates the short URL for the playlist
     * Needs to be kept in sync with the not found route
     * @return {String} url for playlist
     */
    listURL: Ember.computed('model', function(){
        var shareSlug = (parseInt(this.get('model.id'), 10) + 10000).toString(36);
        var baseDomain = ENV.baseDomain; //gracefully deal with local development
        if (baseDomain === ''){
            baseDomain = window.location.origin;
        }
        return baseDomain + ENV.baseURL + shareSlug;
    }),
    
    /**
     * Gives us a nice mailto link we can use with bind-attr
     * @return {String} includes a subject and body but no recipient
     */
    mailto: Ember.computed('model', function(){
        var mailString = "mailto:?subject=" + encodeURIComponent('Playlist from Audio Backpack');
        mailString += '&body=' + encodeURIComponent( this.get('title') + ":\n" + this.get('listURL'));
        return  mailString;
    })
});