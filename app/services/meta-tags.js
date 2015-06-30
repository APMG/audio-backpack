import Ember from 'ember';
import ENV from '../config/environment';

function _getTag(tagName, property, value) {
    var tags = document.head.getElementsByTagName(tagName),
        tag,
        i = tags.length;

    while(i--) {
        tag = tags[i];

        if(tag[property] && tag[property] === value) {
            return tag;
        }
    }
}

function _createTag(tagName, property, value) {
    var tag = document.createElement('meta');
    tag.setAttribute(property, value);
    document.head.appendChild(tag);

    return tag;
}


/*
        var baseDomain = ENV.baseDomain; //gracefully deal with local development
        if (baseDomain === ''){
            baseDomain = window.location.origin;
        }
 */

export default Ember.Object.extend({
    title: null,
    description: null,
    //type: null,
    // image: null,
    // tags: null,
    url: null,

    // DOM elements
    //_ogSiteName: null,
    _ogTitle: null,
    _description: null,
    _ogDescription: null,
    // _ogImage: null,
    // _twImage: null,
    // _ogTag: null,
    _ogUrl: null,
    // _twUrl: null,

    // propagate changes to DOM elements
    // siteNameChanged: function() {
    //     this.get('_ogSiteName').setAttribute('content', this.get('site_name'));
    //     this.notifyPropertyChange('_ogSiteName');
    // }.observes('site_name'),

    titleChanged: Ember.observer('title', function() {
        document.title = this.get('title');
        this.get('_ogTitle').setAttribute('content', this.get('title'));
        this.notifyPropertyChange('_ogTitle');
    }),

    descriptionChanged: Ember.observer('description', function() {
        this.get('_description').setAttribute('content', this.get('description'));
        this.get('_ogDescription').setAttribute('content', this.get('description'));
        this.notifyPropertyChange('_ogDescription');
    }),



    urlChanged: Ember.observer('url', function() {
        var baseDomain = ENV.baseDomain; //gracefully deal with local development
        if (baseDomain === ''){
            baseDomain = window.location.origin;
        }
        //clean up dupe slashes that occur if we dont
        var curUrl = this.get('url');
        if (curUrl.substr(0,1) === '/'){
            curUrl = curUrl.substr(1,curUrl.length);
        }
        var url = baseDomain + ENV.baseURL + curUrl;
        this.get('_ogUrl').setAttribute('content', url);
        this.notifyPropertyChange('_ogUrl');
    }),

    setUpMetaTags: Ember.on('init', function() {


        // ogTitle
        var _ogTitle = _getTag('meta', 'property', 'og:title');
        if (!_ogTitle) {
            _ogTitle = _createTag('meta', 'property', 'og:title');
        }
        this.set('_ogTitle', _ogTitle);

       
        
        // description
        var _description = _getTag('meta', 'name', 'description');
        if (!_description) {
            _description = _createTag('meta', 'name', 'description');
        }
        this.set('_description', _description);
        
        // ogDescription
        var _ogDescription = _getTag('meta', 'property', 'og:description');
        if (!_ogDescription) {
            _ogDescription = _createTag('meta', 'property', 'og:description');
        }
        this.set('_ogDescription', _ogDescription);
        
        
       

        // ogUrl
        var _ogUrl = _getTag('meta', 'property', 'og:url');
        if (!_ogUrl) {
            _ogUrl = _createTag('meta', 'property', 'og:url');
        }
        this.set('_ogUrl', _ogUrl);

      
    }),

    setTags: function(tags) {
        this.setProperties(tags);
    }
});