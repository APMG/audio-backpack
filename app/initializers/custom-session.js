import Session from 'simple-auth/session';
import Ember from 'ember';


// Helpful things:
// http://stackoverflow.com/questions/25298436/ember-simple-auth-custom-authenticator
// https://github.com/simplabs/ember-simple-auth/blob/master/examples/4-authenticated-account.html
// 
// TODO:
// Now need to impliment a custom authenticator that handles the authentication requests, then does a second ajax request to get the deeper info for the user.  
// OR, easier, need to make it so that the intial auth token comes back with the user_id 

var SessionWithCurrentUser = Session.extend({
    user: function() {
        console.log('session user func run');
        var userId = this.get('user_id');
        console.log('userId:', userId);

        if (!Ember.isEmpty(userId)) {
            return this.container.lookup('store:main').find('user', userId);
        } else {
            console.log('sadly empty');
        }
    }.property('user_id')

});

// lets us customize the session to contain more information
export default {
  name: 'session:custom',
  initialize: function(container) {
    console.log('session init run');

    container.register('session:withCurrentUser', SessionWithCurrentUser);

  }
};