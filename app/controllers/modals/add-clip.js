import Ember from "ember";

export default Ember.Controller.extend({

    clip: function(){
        return this.model;
    }.property('clip'),
    
    actions: {
        close: function() {
            console.log('sending close!');
            return this.send('closeModal');
        },
        addClip: function(list){
            var aud = this.model;

            console.log('MY AUDIO:', aud.get('apm_audio'));
                
            //first, create our playlist item
            var list_item = this.store.createRecord('item', {
                list: list,
                position: null,
                apm_audio: aud.get('apm_audio'),
                notes: '',
                clip: aud,
            });
            //get the playlist we want to add to
            list.get('items').pushObject(list_item);
            //save them sequentially
            list.save().then(function(){
               list_item.save();
            },
            function(err){
                console.log('something went wrong', err);
            });

            // Need to do some fancy animation stuff here

        }
    }


});
