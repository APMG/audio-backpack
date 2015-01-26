import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({

    // hack to deal with flash messages from account creation
    beforeModel: function(){
        if (window.location.search.indexOf('?action=after-account-create') !== -1){
            this.transitionTo('/login?action=after-account-create');
        }
    },

    model: function(){
        return Ember.RSVP.hash({
            clips: this.store.all('clip'),
            //dan nass, primary guy for MPR
            lists: this.store.find('list',{user:'ab5e79b332f1fee7b06a52a866028a6a9ac96dd3'})
        });
    },
    afterModel: function(){
        Ember.$(document).attr('title', ENV.name + " • Classical Minnesota Public Radio");
    }
});
