import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.reopen({
  location: 'history'
});

Router.map(function() {
    this.resource('about');
    this.resource('audios');
    this.resource('audio', { path: '/audios/:audio_id' });
    this.resource('lists');
    this.resource('list', {path: '/lists/:list_id'});
});

export default Router;
