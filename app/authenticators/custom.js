// app/authenticators/custom.js
import Ember from 'ember';
import Base from 'simple-auth-oauth2/authenticators/oauth2';
import ENV from '../config/environment';

/**
 * This is a pretty straight up extension of the simple-auth-oauth2 authenticator
 * It re-impliments only the authenticate method, but in doing so adds a second
 * ajax request to the oauth server to find out more data about the user, the user_id
 * Do note that the "serverUserDataEndpoint" needs to be set in the approproate place in environment.js
 */
export default Base.extend({

    authenticate: function(options) {

        console.log('custom authenticator called!');

        var userDataEndpoint = ENV['simple-auth-oauth2']['serverUserDataEndpoint'];

        var _this = this;
        var loginProm = new Ember.RSVP.Promise(function(resolve, reject) {
                var data = { grant_type: 'password', username: options.identification, password: options.password };
                if (!Ember.isEmpty(options.scope)) {
                    var scopesString = Ember.makeArray(options.scope).join(' ');
                    Ember.merge(data, { scope: scopesString });
                }
                //console.log(_this.serverUserDataEndpoint);
                _this.makeRequest(_this.serverTokenEndpoint, data).then(function(response) {
                    var token = response.access_token;
                    //console.log(response);

                    Ember.$.getJSON(userDataEndpoint+'?access_token='+token).then(function(userResp){

                        //console.log(userResp);
                        if (!Ember.isEmpty(userResp.id)){
                            response.user_id = userResp.id;
                        }
                        console.log(response);
                        Ember.run(function() {
                            var expiresAt = _this.absolutizeExpirationTime(response.expires_in);

                            _this.scheduleAccessTokenRefresh(response.expires_in, expiresAt, response.refresh_token);
                            if (!Ember.isEmpty(expiresAt)) {
                                response = Ember.merge(response, { expires_at: expiresAt });
                            }
                            resolve(response);

                        });

                    });                  
                }, function(xhr) {  //, status, error
                    Ember.run(function() {
                        reject(xhr.responseJSON || xhr.responseText);
                    });
                });
            });

        return loginProm;
      },  
});