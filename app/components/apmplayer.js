import Ember from "ember";

export default Ember.Component.extend({
    //templateName: "apmplayer",
    didInsertElement: function(){

        Ember.$('#apm_player_container').apmplayer_ui({
            playables : [],
            onMetadata : function (playable) {
                Ember.$('body').addClass('has-fixed-player');
                var snippet = '';
                if (playable.title !== '' ) {
                    snippet = playable.title;
                }
                Ember.$('#apm_player_info').html(snippet);
            }
        });
    }
});