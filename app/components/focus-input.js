import Ember from "ember";

/**
 * Gives us a input type text element that self-focuses when clicked/tapped
 * @return {void}
 */
export default Ember.TextField.extend({
    becomeFocused: function() {
        this.$().focus( function(){ 
            Ember.$(this).select();
        });
    }.on('didInsertElement')
});