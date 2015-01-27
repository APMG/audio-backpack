import Ember from "ember";
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
    //authenticator: 'simple-auth-authenticator:oauth2-password-grant'
    authenticator: 'authenticator:custom',
    identification : "",
    password: '',

    flashMessage: '',

    actions: {
        // display an error when authentication fails
        authenticate: function() {
            this.set('flashMessage','Attempting login...');
            that.set('errorMessage','');
            var that = this;
            this._super().then(null, function(error) {
                if (typeof error === 'undefined'){
                    that.set('flashMessage','');
                    that.set('errorMessage', "Sorry, the login server appears to be missing.");
                    return;
                }
                if (error.error === 'invalid_grant')  {
                    that.set('flashMessage','');
                    that.set('errorMessage', "Username or password invalid. Try again.");
                } else if (error) {
                    that.set('flashMessage','');
                    that.set('errorMessage', "An unknown login error occurred.");
                }
            });
        }
    }

});