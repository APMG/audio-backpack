import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
    model: function(params){
        return Ember.RSVP.hash({
            user: this.store.find('user', params.user_id),
            lists: this.store.find('list', {user: params.user_id})
        });
    },
    afterModel: function(model){
        this.metaTags.setTags({
            title: model.user.get('full_name') + " • "+ ENV.name,
            description: ENV.description,
            url: this.get('router.url')
        });
    }
});
