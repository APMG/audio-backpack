import Ember from "ember";

/**
 * 
 */

export default Ember.Component.extend({
    actions: {
        ok: function() {
            this.$('.modal').modal('hide');
            this.sendAction('ok');
        },
        close: function(){
            this.sendAction('close'); //console.log('got me some close action');
        }
    },
    show: function() {
        this.$('.modal').modal().on('hidden.bs.modal', function() {
        this.sendAction('close');  //so we get the close action in the future
        }.bind(this));
    }.on('didInsertElement')
});