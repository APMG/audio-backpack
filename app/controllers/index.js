import Ember from "ember";

export default Ember.ObjectController.extend({

    sortedClips: function() {
        return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
            sortProperties: ['pub_date'],
            sortAscending: false,
            content: this.model.clips.get('arrangedContent')
        });
    }.property('model.clips'),
    
    trimmedClips: function(){
        return this.get('sortedClips.arrangedContent').splice(0,4);
    }.property('model.clips'),


    sortedLists: function() {
        return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
            sortProperties: ['updated_at'],
            sortAscending: false,
            content: this.model.lists.get('arrangedContent')
        });
    }.property('model.lists'),
    
    trimmedLists: function(){
        return this.get('sortedLists.arrangedContent').splice(0,4);
    }.property('model.lists')

});