/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
      'object-src': "'self' common.publicradio.org",
      'script-src': "script-src 'self' 'unsafe-eval' localhost:35729 0.0.0.0:35729 common.publicradio.org api.publicradio.org api.mpr.org",
      'img-src': "'self' common.publicradio.org",
      'style-src': "'self' 'unsafe-inline' common.publicradio.org",
      'connect-src': "'self' *",
      'media-src': "'self' *" //common.publicradio.org ondemand.publicradio.org
    },

    modulePrefix: 'favorites-cli',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // torii: {
    //   providers: {
    //     'github-oauth2': {
    //         apiKey:      'b39e086b398797a7c306',
    //         scope: 'email,user:email' //,
    //         //redirectUri: 
    //       },
    //   }
    // },
    session: 'session:withCurrentUser',

    "simple-auth": {
      crossOriginWhitelist: ['http://localhost:3000'],
      serverTokenEndpoint: 'http://localhost:3000/oauth/token',
      authorizer: 'simple-auth-authorizer:oauth2-bearer'
    },

    'simple-auth-oauth2':  {
      serverTokenEndpoint: 'http://localhost:3000/oauth/token'
    }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  // if (environment === 'production') {
  //     ENV.baseURL = '/jheideman/playlist/';
  //     ENV.torii.providers['github-oauth2'] = { apiKey: 'cb68b8d24fc892188ebd' }; 
  // }

  return ENV;
};
