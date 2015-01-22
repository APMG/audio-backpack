import Ember from "ember";
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';
import ENV from '../../config/environment';

// import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

// export default Ember.Route.extend(AuthenticatedRouteMixin, {
//   model: function() {
//     return this.store.find('playlist');
//   }
// });


export default Ember.Route.extend(RouteMixin, {
    model: function(params) {
        return this.findPaged('list',params);
    },
    afterModel: function(){
        Ember.$(document).attr('title', "Playlists • "+ ENV.name);
    }
});
