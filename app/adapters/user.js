import DS from "ember-data";
import Ember from 'ember';

//import ENV from '../config/environment';

export default DS.RESTAdapter.reopen({
    host: 'http://localhost:3000',
    namespace: 'api/v1',

    buildURL: function(type, id, record) {
        var get = Ember.get;
        var url = [],
            host = get(this, 'host'),
            prefix = this.urlPrefix();

        if (type) { url.push(this.pathForType(type)); }

        //We might get passed in an array of ids from findMany
        //in which case we don't want to modify the url, as the
        //ids will be passed in through a query param
        if (id && !Ember.isArray(id)) { url.push(encodeURIComponent(id)); }

        if (prefix) { url.unshift(prefix); }

        url = url.join('/');
        if (!host && url) { url = '/' + url; }

        return url+'.json';
    },
    // if (ENV.environment === 'development') {
    // // ...
    // }
});