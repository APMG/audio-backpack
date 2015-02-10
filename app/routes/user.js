import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';
import ENV from '../config/environment';

export default Ember.Route.extend(RouteMixin, {
    model: function(params){
        if (params.user_id) {
            params.user = params.user_id;
            delete params.user_id;
        }
        console.log(this.findPaged('list',params));
        return Ember.RSVP.hash({
            user: this.store.find('user', params.user),
            //lists: this.store.find('list', {user: params.user_id})
            lists: this.findPaged('list',params)
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
