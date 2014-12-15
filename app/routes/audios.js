import Ember from "ember";

export default Ember.Route.extend({
    model: function() {
        //console.log(this.store.find('audio'));
        return this.store.find('audio');
    }
});