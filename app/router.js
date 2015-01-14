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
    
    this.resource('lists', { path: '/playlists' }, function() {
        this.route('list', { path: '/playlists/:list_id' });
    });


    this.resource('login');

    this.resource('user', {path: '/user/:user_id'});

});

export default Router;
