import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		// action to trigger authentication with github
		authenticateWithGithub: function() {
			this.get('session').authenticate('simple-auth-authenticator:torii', 'github-oauth2');
		},
	}

});
