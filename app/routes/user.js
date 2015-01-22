import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        invalidateModel: function() {
            Ember.Logger.log('Route is now refreshing...');
            this.refresh();
        }
    }, 
    model: function(params){
        return Ember.RSVP.hash({
            user: this.store.find('user', params.user_id),
            lists: this.store.find('list', {user: params.user_id})
        });
    }
});
