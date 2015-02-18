/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
    vendorFiles: {
      'handlebars.js': null
    }
});

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

// Reqs for APMPlayer
//jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.slider.js
app.import('bower_components/jquery-ui/ui/core.js');
app.import('bower_components/jquery-ui/ui/widget.js');
app.import('bower_components/jquery-ui/ui/mouse.js');
app.import('bower_components/jquery-ui/ui/slider.js');

//helps the drag & drop on touch devices
app.import('bower_components/jquery-ui-touch-punch/jquery.ui.touch-punch.js');

//The Un-minified versions of APMPlayer
//app.import('bower_components/APMPlayer-Internal/script/apmplayer-all.min.js');
app.import('bower_components/APMPlayer-Internal/script/src/apmplayer_ui.jquery.js');
app.import('bower_components/APMPlayer-Internal/script/src/apmplayer.js');
app.import('bower_components/APMPlayer-Internal/script/src/custom_schemes.js');
app.import('bower_components/APMPlayer-Internal/script/src/apmplayer_init.js');

// Make it look nicer with bootstap
//app.import('bower_components/bootstrap/less/bootstrap.less');

//app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', { destDir: 'assets' });
// app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', { destDir: 'fonts' });
// app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', { destDir: 'fonts' });
// app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', { destDir: 'fonts' });
// app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', { destDir: 'fonts' });

app.import('bower_components/bootstrap/dist/js/bootstrap.js');






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