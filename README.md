# MPR Music Education

This is an application for managing playlists of classical music for educational purposes. It is built using [Ember](http://www.emherjs.com) and [Ember-Cli](http://www.ember-cli.com/) along with several other dependicies, as defined in `bower.json` and `package.json`. This app also depends on the [MPR-User](https://gitlab.mpr.org/swag/mpr-user) rails app for handling oAuth and the [Playlist Maker API](https://gitlab.mpr.org/swag/playlist-maker-api) for persisting saved playlists, both of which we have not made open source (yet).


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

You may need to install [watchman](https://facebook.github.io/watchman/) for ember-cli to work properly. 

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

You will also need to set up the default data for the audio catalog. Duplicate `public/data/catalog-dev.json` to `public/data/catalog.json`. This latter file is ignored by git and is updated by cron jobs on dev/prod/stage servers, but this file is necessary for local development work.

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

At MPR, we use a seperate internal capistrano task to deploy the app and build the app. Internal users should please see that git package for details.


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

