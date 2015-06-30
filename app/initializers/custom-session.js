import Session from 'simple-auth/session';
import Ember from 'ember';


/**
 * Our session is customized with this exention. 
 * When a template calls {{session.user}}, we look up the user_id on the session and then check the 
 * user store for the info. 
 * This depends on app/authenticators/custom.js to set the user_id on initial authentication
 */

// Helpful things:
// http://stackoverflow.com/questions/25298436/ember-simple-auth-custom-authenticator
// https://github.com/simplabs/ember-simple-auth/blob/master/examples/4-authenticated-account.html

var SessionWithCurrentUser = Session.extend({
    user: Ember.computed('user_id', function() {
        //console.log('session user func run');
        var userId = this.get('user_id');
        //console.log('userId:', userId);

        if (!Ember.isEmpty(userId)) {
            return this.container.lookup('store:main').find('user', userId);
        } else {
            //console.log('sadly empty');
        }
    })

});

// lets us customize the session to contain more information
export default {
  name: 'session:custom',
  initialize: function(container) {
    //console.log('session init run');
    container.register('session:withCurrentUser', SessionWithCurrentUser);

  }
};