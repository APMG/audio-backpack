import Ember from "ember";

export default Ember.View.extend({
    templateName: "apmplayer",
    didInsertElement: function(){
        Ember.$('#apm_player_container').apmplayer_ui({
            playables : [],
            onMetadata : function (playable) {
                var snippet = '';
                if (playable.title !== '' ) {
                    snippet = "<p>"+playable.title+"</p>";
                }
                Ember.$('#apm_player_info').html(snippet);
            }
        });
    }
});