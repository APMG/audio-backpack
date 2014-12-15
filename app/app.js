window.SM2_DEFER = true;


import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  ready: function(){
    console.log('ready!');
        var soundManager = new SoundManager();
        window.soundManager = soundManager;
        var settings = {
            preferFlash: true,
            swf: '/assets/swf/soundmanager2.swf'
        };
        var APMPlayer = APMPlayerFactory.getPlayer();
        window.APMPlayer = APMPlayer;
        APMPlayer.init(settings);
        soundManager.beginDelayedInit();

  }
});

loadInitializers(App, config.modulePrefix);

export default App;
