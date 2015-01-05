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
  currentUser: function() {
    console.log('i be runnin');
    // "this" should be the session, which will contain the token and token info
    console.log("this", this, this.get("access_token"));

    var url = 'http://localhost:3000/api/v1/me.json?access_token=' + this.get("access_token");
    console.log(url);

    Ember.$.getJSON( url ).then(function(data) {
        console.log(data);
    });


    var userId = this.get('user_id');
    if (!Ember.isEmpty(userId)) {
        console.log('i am not empty!');
        return this.container.lookup('store:main').find('account', userId);
    } else {
        console.log('i be empty!');
    }
  }.property('user_id')
});

// lets us customize the session to contain more information
export default {
  name: 'session:custom',
  initialize: function(container) {
    console.log('i be all init');
    container.register('session:withCurrentUser', SessionWithCurrentUser);

  }
};