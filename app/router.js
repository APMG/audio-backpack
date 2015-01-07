import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.reopen({
  location: 'history'
});

Router.map(function() {
    this.resource('clips');
    this.resource('clip', { path: '/clips/:clip_id' });
    this.resource('playlists');
    this.resource('playlist', {path: '/playlists/:playlist_id'});

    this.resource('login');

});

export default Router;
