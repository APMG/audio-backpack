// app/authenticators/custom.js
import Ember from 'ember';
import Base from 'simple-auth-oauth2/authenticators/oauth2';


export default Base.extend({
    authenticate: function(options) {
        console.log('i tried to auth!', options);


        var _this = this;
        return new Ember.RSVP.Promise(function(resolve, reject) {
            var data = { grant_type: 'password', username: options.identification, password: options.password };
            if (!Ember.isEmpty(options.scope)) {
                var scopesString = Ember.makeArray(options.scope).join(' ');
                Ember.merge(data, { scope: scopesString });
            }
            _this.makeRequest(_this.serverTokenEndpoint, data).then(function(response) {
                Ember.run(function() {
                    var expiresAt = _this.absolutizeExpirationTime(response.expires_in);
                    _this.scheduleAccessTokenRefresh(response.expires_in, expiresAt, response.refresh_token);
                    if (!Ember.isEmpty(expiresAt)) {
                        response = Ember.merge(response, { expires_at: expiresAt });
                    }
                    resolve(response);
                });
            }, function(xhr, status, error) {
                Ember.run(function() {
                    reject(xhr.responseJSON || xhr.responseText);
                });
            });
        });
      },  
});