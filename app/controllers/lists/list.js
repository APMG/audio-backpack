import Ember from "ember";

export default Ember.ObjectController.extend({

    clipCount: function(){
        var list_items = this.get('list_items');
        return list_items.get('length');
    }.property('model.list_items.@each'),


    totalDuration: function(){    
        /**
         * This is commented out and purposefully disabled until further work
         * on the playlist api is complete.
         * While using the localStorage adapter, serialization and 
         * deserialization of the relationships is not synchronous, and this
         * causes issues with this not allowing us to compute total durations.
         * See: https://github.com/kurko/ember-localstorage-adapter/issues/90
         */
        // //commented out until work on playlist-items is done
        // var list_items = this.get('list_items');
        // //var totalDur = 0;    
        // list_items.forEach(function(item) {
        //     console.log('aud',item.get('apm_audio'));
        //     //more work needed here
        // });       
        return 200000;
    }.property('model.list_items.@each'),


});