import Ember from "ember";
import ENV from '../../config/environment';

export default Ember.Route.extend({
    model: function() {
        return this.store.findAll('clip');
    },
    afterModel: function(){
        this.metaTags.setTags({
            title: "Clips • " + ENV.name, 
            description: ENV.description,
            url: this.get('router.url')
        });
    }
});