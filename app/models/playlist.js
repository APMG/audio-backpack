import DS from "ember-data";

 export default DS.Model.extend({
    title: DS.attr(),
    clip: DS.hasMany('clip', {inverse: null, async: true}),



    clipCount: function(){
		var clips = this.get('clip');
		return clips.get('length');
	}.property('clipCount'),


	totalDuration: function(){	
		
		var clips = this.get('clip');
		/*
		This is 8 kinds of dirty, but it is what it is. Hmm. 
		 */
		for (var clip in clips.content.currentState){
			console.log(clips.content.currentState[clip]);
		}

		// for (var myClip in clips){

		// 	console.log(item);
		// }


		//return "1001ms";
	}.property('totalDuration')


});