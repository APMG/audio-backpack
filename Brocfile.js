/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// Local storage adapter
app.import('bower_components/ember-localstorage-adapter/localstorage_adapter.js');


// Bring in SoundManager and the APMplayer
app.import('bower_components/soundmanager/script/soundmanager2-nodebug.js');
app.import('bower_components/soundmanager/swf/soundmanager2.swf');
app.import('bower_components/APMPlayer-Internal/script/apmplayer-all.min.js');


var pickFiles = require('broccoli-static-compiler');

// Copy only the relevant files. For example the WOFF-files and stylesheets for a webfont:
var extraAssets = pickFiles('bower_components/soundmanager/swf', {
   srcDir: '/',
   files: ['**/*.swf'],
   destDir: '/assets/swf'
});

// Providing additional trees to the `toTree` method will result in those
// trees being merged in the final output.
module.exports = app.toTree(extraAssets);