import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
    afterModel: function(){
        this.metaTags.setTags({
            title: "Log in • " + ENV.name, 
            description: ENV.description,
            url: this.get('router.url')
        });
    },
    setupController: function(controller) {
        controller.set('errorMessage', null);
    }
});
