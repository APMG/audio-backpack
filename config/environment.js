/* jshint node: true */

module.exports = function(environment) {

  var accountsHostBase = 'http://localhost:3000';

  var ENV = {
    contentSecurityPolicy: {
      'object-src': "'self' common.publicradio.org",
      'script-src': "script-src 'self' 'unsafe-eval' localhost:35729 0.0.0.0:35729 common.publicradio.org api.publicradio.org api.mpr.org",
      'img-src': "'self' common.publicradio.org www.gravatar.com",
      'style-src': "'self' 'unsafe-inline' common.publicradio.org fast.fonts.net",
      'connect-src': "'self' *",
      'media-src': "'self' *" //common.publicradio.org ondemand.publicradio.org
    },

    modulePrefix: 'mpr-music-education',
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

    'accountsHostBase': accountsHostBase,

     session: 'session:withCurrentUser',

    "simple-auth": {
      crossOriginWhitelist: [accountsHostBase],
      serverTokenEndpoint: accountsHostBase + '/oauth/token',
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
      session: 'session:withCurrentUser'

    },

    'simple-auth-oauth2':  {
      serverTokenEndpoint: accountsHostBase + '/oauth/token',
      serverUserDataEndpoint: accountsHostBase + '/api/v1/me.json'
    },

    "localStorageNamespace": "mpr-music-education",

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    //ENV.baseURL = '/music_education/';
  }

  //Since "development" is the name ember-cli likes for local development,
  //we're gonna use something else on the server
  if (environment === 'server-development' || environment === 'stage'){

      accountsHostBase = 'https://accounts.devel.publicradio.org';


      ENV.baseURL = '/music_education/';

      ENV["simple-auth"] = {
        crossOriginWhitelist: [accountsHostBase],
        serverTokenEndpoint: accountsHostBase + '/oauth/token',
      };
      ENV['simple-auth-oauth2'] =  {
        serverTokenEndpoint: accountsHostBase + '/oauth/token',
        serverUserDataEndpoint: accountsHostBase + '/api/v1/me.json'
      };

      ENV['accountsHostBase'] = accountsHostBase;

      ENV.APP.LOG_ACTIVE_GENERATION = true;

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


  return ENV;
};
