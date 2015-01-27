export default {
    name: 'meta',
    initialize: function(container, app) {
        //var facebookId = app.FACEBOOK_APP_ID;
        //app.register('config:facebookId', facebookId, { instantiate: false });

        app.inject('route', 'metaTags', 'service:meta-tags');
        //app.inject('service:meta-tags', 'facebookId', 'config:facebookId');
    }
};