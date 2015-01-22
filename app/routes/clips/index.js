import Ember from "ember";
import ENV from '../../config/environment';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('clip');
    },
    afterModel: function(){
        Ember.$(document).attr('title', "Clips • "+ ENV.name);
    }
});