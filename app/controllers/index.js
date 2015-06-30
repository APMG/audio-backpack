import Ember from "ember";

export default Ember.Controller.extend({

    sortedClips: Ember.computed('model.clips', function() {
        return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
            sortProperties: ['pub_date','title'],
            sortAscending: false,
            content: this.get('model.clips')
        });
    }),
    
   trimmedClips: Ember.computed('model.clips', function(){
        return this.get('sortedClips.arrangedContent').splice(0,4);
    }),


    sortedLists: Ember.computed('model.lists', function() {
        return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
            sortProperties: ['updated_at','title'],
            sortAscending: false,
            content: this.get('model.lists')
        });
    }),
    
    trimmedLists: Ember.computed('model.lists', function(){
        return this.get('sortedLists.arrangedContent').splice(0,4);
    })

});