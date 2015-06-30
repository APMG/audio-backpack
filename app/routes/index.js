import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({

    // hack to deal with flash messages from account creation
    beforeModel: function(){
        if (window.location.search.indexOf('?activity=after-account-create') !== -1){
            this.controllerFor('login').set('flashMessage', 'Log in with your newly created MPR account information.');
            this.transitionTo('/login'); //?activity=after-account-create
        }
    },

    model: function(){
        return Ember.RSVP.hash({
            clips: this.store.peekAll('clip'),
            //dan nass, primary guy for MPR
            lists: this.store.query('list',{user:'ab5e79b332f1fee7b06a52a866028a6a9ac96dd3'})
        });
    },
    afterModel: function(){
        this.metaTags.setTags({
            title: ENV.name + " • Classical MPR",
            description: ENV.description,
            url: this.get('router.url')
        });
    }
});
