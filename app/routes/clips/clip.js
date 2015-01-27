import Ember from "ember";
import ENV from '../../config/environment';


export default Ember.Route.extend({

    afterModel: function(model){
        Ember.$(document).attr('title', model.get('title') + " • "+ ENV.name);

        this.metaTags.setTags({
            title: model.get('title') + " • "+ ENV.name,
            description: model.get('description') ? model.get('description') : ENV.description,
            url: this.get('router.url')
        });
    }

});
