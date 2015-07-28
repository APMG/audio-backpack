// This is not used yet, but may be needed to turn the playlist into a clip and vice versa
// need the playlist api to exist in a more concrete form first

import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
    list: DS.belongsTo('list', {
      async: false
    }),
    position: DS.attr('number'),
    apm_audio: DS.attr('string'),
    notes: DS.attr('string'),
    //list_item_type_id: DS.attr('number',{defaultValue: 1}),
    //clip: DS.belongsTo('clip', {inverse: null}),
    //
    //
    clip: Ember.computed('apm_audio', function() {
        var clips = this.store.peekAll('clip');
        var apm_audio = this.get('apm_audio');
        var theClipICareAbout = null;
        // console.log(apm_audio);

        clips.forEach(function(maybeClip){
            if (maybeClip.get('apm_audio') === apm_audio){
                theClipICareAbout = maybeClip;
                return;
            }
        });
        // console.log(theClipICareAbout);
        return theClipICareAbout;
    })
});