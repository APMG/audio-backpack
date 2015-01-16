import Ember from "ember";

export default Ember.ObjectController.extend({

    clipCount: function(){
        var list_items = this.get('items');
        return list_items.get('length');
    }.property('model.items.@each'),


    totalDuration: function(){    
        return 50000;

        //commented out until work on playlist-items is done

        // var rel = this.get('clips').filterBy('duration');
        // // console.log(rel);
        // var totalDur = 0;
        // for (var key in rel){
        //     if (rel.hasOwnProperty(key)){
        //         var clip = rel[key];
        //         totalDur += clip.get('duration');
        //     }
        // }
        // return totalDur;
    }.property('model.clips.@each.duration'),

    //playlist_items: function

});