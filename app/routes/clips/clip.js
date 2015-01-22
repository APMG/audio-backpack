import Ember from "ember";
import ENV from '../../config/environment';


export default Ember.Route.extend({

    afterModel: function(model){
        Ember.$(document).attr('title', model.get('title') + " • "+ ENV.name);
    }

});
