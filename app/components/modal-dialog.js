import Ember from "ember";

/**
 * 
 */

export default Ember.Component.extend({
    actions: {
        close: function() {
        return this.sendAction();
        }
    },
    show: function() {
        console.log('show modal component called');
        this.$('.modal').modal();
        console.log('tried to launch modal!');

    }.on('didInsertElement')
});