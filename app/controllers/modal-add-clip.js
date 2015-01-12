import Ember from "ember";

export default Ember.ObjectController.extend({
    actions: {
        close: function() {
            console.log('sending close!');
            return this.send('closeModal');
        }
    }
});