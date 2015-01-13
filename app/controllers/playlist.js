import Ember from "ember";

export default Ember.ObjectController.extend({

    clipCount: function(){
        var clips = this.get('clips');
        return clips.get('length');
    }.property('model.clips.@each'),


    totalDuration: function(){    
        var rel = this.get('clips').filterBy('duration');
        // console.log(rel);
        var totalDur = 0;
        for (var key in rel){
            if (rel.hasOwnProperty(key)){
                var clip = rel[key];
                totalDur += clip.get('duration');
            }
        }
        return totalDur;
    }.property('model.clips.@each.duration')
});