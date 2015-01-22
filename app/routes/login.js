import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
    afterModel: function(){
        Ember.$(document).attr('title', "Log in • " + ENV.name);
    }
});
