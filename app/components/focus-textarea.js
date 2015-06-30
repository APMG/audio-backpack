import Ember from "ember";

/**
 * Gives us a input type text element that self-focuses when clicked/tapped
 * @return {void}
 */
export default Ember.TextArea.extend({
    becomeFocused: Ember.on('didInsertElement', function() {
        this.$().focus( function(){ 
            Ember.$(this).select();
        });
    })
});