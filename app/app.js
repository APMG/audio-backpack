window.SM2_DEFER = true;


import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';


Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  LOG_TRANSITIONS: true,
  Resolver: Resolver,
  ready: function(){

        //take out the loading note
        Ember.$("#loading-note, svg").remove();
        var soundManager = new SoundManager();
        window.soundManager = soundManager;
        var settings = {
            preferFlash: true,
            swf: config.baseURL+'assets/swf/soundmanager2.swf'
        };
        var APMPlayer = APMPlayerFactory.getPlayer();
        window.APMPlayer = APMPlayer;
        APMPlayer.init(settings);
        soundManager.beginDelayedInit();

  }
});

loadInitializers(App, config.modulePrefix);

export default App;
