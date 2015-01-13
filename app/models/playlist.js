import DS from "ember-data";

 export default DS.Model.extend({


    title: DS.attr(),
    description: DS.attr('string',{defaultValue: ''}),
    user: DS.belongsTo('user'),
    clips: DS.hasMany('clip', {inverse: null, async: true}),

    // clipCount: function(){
    //     var clips = this.get('clips');
    //     return clips.get('length');
    // }.property('clipCount'),  //.observes('clips'),


    // totalDuration: function(){    
    //     var rel = this.get('clips.content').filterBy('duration');
    //     var totalDur = 0;
    //     for (var key in rel){
    //         if (rel.hasOwnProperty(key)){
    //             var clip = rel[key];
    //             totalDur += clip.get('duration');
    //         }
    //     }
    //     return totalDur;
    // }.property('clips@each.duration') //.observes('clips')





    // title: DS.attr(),
    // description: DS.attr(),
    // owner: DS.belongsTo('user'),
    // items: DS.hasMany('playlist-item'),

    // itemCount: function(){
    //     var items = this.get('items');
    //     return items.get('length');
    // }.property('itemCount'),


    // // totalDuration: function(){   
    // //  var rel = this.get('clips.content').filterBy('duration');
    // //  var totalDur = 0;
    // //  for (var key in rel){
    // //      if (rel.hasOwnProperty(key)){
    // //          var clip = rel[key];
    // //          totalDur += clip.get('duration');
    // //      }
    // //  }
    // //  return totalDur;
    // // }.property('clips@each.duration')


});