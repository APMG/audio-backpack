import Ember from "ember";
//import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend({
    /**
     * Do initial data load from json file into store, which should be backed by localstorage
     */
    beforeModel: function(){
        console.log('running before model');
        var store = this.store;
        return Ember.$.getJSON( this.get('router.rootURL') + 'audio2.json').then(function(data) {
            for (var buid in data) {
                var item = data[buid];
                item.id = buid;
                store.push('audio',item).save();
            }
        });
    }
});
