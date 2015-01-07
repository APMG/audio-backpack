import Ember from "ember";

//Does some sorting for us
export default Ember.ArrayController.extend({
    sortProperties: ['pub_date'],
    sortAscending: false,
    latestAudio: function(){
        return this.get('arrangedContent').splice(0,4);
    }.property('latestAudio')
   
});