import Ember from "ember";

export default Ember.Controller.extend({

    clip: Ember.computed('clip', function(){
        return this.model;
    }),
    
    actions: {
        close: function() {
            //console.log('sending close!');
            return this.send('closeModal');
        },
        addClip: function(list){
            var aud = this.model;
            var that = this;
            
            list.toggleProperty('isDoingSave'); //wanted to use isSaving, but is reserved name
                
            //first, create our playlist item
            var list_item = this.store.createRecord('item', {
                //list: list,
                position: null,
                apm_audio: aud.get('apm_audio'),
                notes: '',
            });

            //get the playlist we want to add to
            list.get('items').pushObject(list_item);
            //save them sequentially
            list.save().then(function(){
               list_item.save();
               list.toggleProperty('isDoingSave');
               list.toggleProperty('isSaved');
               // Have to use two run laters here so we can pass the list and the parent that
               // to different contexts for updating after close
               Ember.run.later(list, function() {
                   this.toggleProperty('isSaved');
               }, 500);
               Ember.run.later(that, function() {
                   this.send('closeModal');
               }, 500);

            },
            function(err){
                console.log('something went wrong', err);
            });

        }
    }


});
