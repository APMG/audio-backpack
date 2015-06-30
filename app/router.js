import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.reopen({
  location: 'history',
  notifyGoogleAnalytics: Ember.on('didTransition', function() {
    return ga('send', 'pageview', {
        'page': '/audio-backpack' + this.get('url'),
        'title':'/audio-backpack' +  this.get('url')
      });
  })
});

Router.map(function() {
    this.route('clips', function() {
        this.route('clip', { path: ':clip_id' });
    });    
    this.route('lists', { path: '/playlists' }, function() {
        this.route('list', { path: ':list_id' });
    });
    this.route('login');
    this.route('user', {path: '/user/:user_id'});

    this.route('not-found', { path: '/*path' }); //fallback / short URL redirecter

});

export default Router;
