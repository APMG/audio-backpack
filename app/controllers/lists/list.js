import Ember from "ember";

export default Ember.ObjectController.extend({

    init: function(){
        this._super();
        this.set('totalDuration',0);
        this.set('clips',[]);

        Ember.run.later(this, function() {
          this.addObserver('model.items', this.clipChanger);
        }, 500);

    },

    clipCount: function(){
        var list_items = this.get('items');
        return list_items.get('length');
    }.property('model.items'),

    clipChanger: function(){
        //console.log('clip changer, yo');
        Ember.run.once(this, 'clipsDidChange');
    }.on('init'), 



    clipsDidChange: function() {
        // console.log('clipsDidChange ran');
        this.set('totalDuration',0);
        this.set('clips',[]);
    

        var items = this.get('items');
        // console.log(items);
        var that = this;
        items.forEach(function(item){
            var apm_audio = item.get('apm_audio');

            that.model.store.find('clip',{'apm_audio':apm_audio}).then(function(clip){
                var firstClip = clip.get('firstObject');
                that.clips.push(firstClip);
                var newDur = that.get('totalDuration') + firstClip.get('duration');
                that.set('totalDuration', newDur); 
                //console.log(firstClip.get('duration'));
            });
            
        });
    },


    actions: {
        playAll: function(){
            alert("Sorry, not done yet");
            return false;
        }
    }
});