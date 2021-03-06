import DS from "ember-data";
import Ember from 'ember';
import ENV from '../config/environment';

/**
 * This is largely verbatim from the default RESTAdapter class. 
 * We are just modifiying the buildURL method to include ".json" at the end
 * of urls so that it works correctly with our API urls
 * We definitely need to not hard-code the host url at some point, or we 
 * need to use the environment flags and figure it out here 
 */

export default DS.RESTAdapter.extend({
    host: ENV.playlistMakerHostBase,
    namespace: 'api/v1',

    buildURL: function(type, id, record) { 

       // console.log('record', record, record.get('list'));

        var get = Ember.get;
        var url = [],
            host = get(this, 'host'),
            prefix = this.urlPrefix();
        // We need to include the parent list in the URL
        // e.g. /api/v1/lists/29.json, so we include "lists" and the list id from the parent record
        if (record){
            url.push('lists');
            url.push( record.get('list.id'));
        }    

        if (type) { url.push(this.pathForType(type)); }



        //We might get passed in an array of ids from findMany
        //in which case we don't want to modify the url, as the
        //ids will be passed in through a query param
        if (id && !Ember.isArray(id)) { url.push(encodeURIComponent(id)); }

        if (prefix) { url.unshift(prefix); }

        url = url.join('/');
        if (!host && url) { url = '/' + url; }

        //console.log('url', url+'.json');
        //return "http://localhost/playlist.php";
        return url+'.json';
    },

});