import Ember from "ember";
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
    //authenticator: 'simple-auth-authenticator:oauth2-password-grant'
    authenticator: 'authenticator:custom',

    //pre-fill form to help make debugging faster
    identification : "user@mpr.org",
    password: 'topsecret',
});