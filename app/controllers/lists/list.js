import Ember from "ember";

export default Ember.ObjectController.extend({


    clips: [],
    totalDuration: 0,

    clipCount: function(){
        var list_items = this.get('items');
        return list_items.get('length');
    }.property('model.items.@each'),

    clipChanger: function(){
         Ember.run.once(this, 'clipsChanged');
    }.observes('model.items'), 


    clipsChanged: function() {
        this.clips = [];
        this.totalDuration = 0;
        var items = this.get('items');
        var that = this;
        items.forEach(function(item){
            var apm_audio = item.get('apm_audio');

            that.model.store.find('clip',{'apm_audio':apm_audio}).then(function(clip){
                var firstClip = clip.get('firstObject');
                that.clips.push(firstClip);
                that.totalDuration += firstClip.get('duration');
            });
            
        });
    }, //.observes('model.items'), //.on('init'), //.@each


    actions: {
        playAll: function(){
            alert("Sorry, not done yet");
            return false;
        }
    }
});