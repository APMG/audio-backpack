import Session from 'simple-auth/session';
import Ember from 'ember';


// Helpful things:
// http://stackoverflow.com/questions/25298436/ember-simple-auth-custom-authenticator
// https://github.com/simplabs/ember-simple-auth/blob/master/examples/4-authenticated-account.html


var SessionWithCurrentUser = Session.extend({
  currentUser: function() {
    console.log('i be runnin');
    var userId = this.get('user_id');
    if (!Ember.isEmpty(userId)) {
        console.log('i am not empty!');
        return this.container.lookup('store:main').find('account', userId);
    } else {
        console.log('i be empty!');
    }
  }.property('user_id')
});

export default {
  name: 'session:custom',
  initialize: function(container) {
    console.log('i be all init');
    container.register('session:withCurrentUser', SessionWithCurrentUser);
  }
};