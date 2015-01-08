import Ember from "ember";
//import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend({
    /**
     * Do initial data load from json file into store, which should be backed by localstorage
     */
    beforeModel: function(){
        console.log('running before model');
        var store = this.store;
        return Ember.$.getJSON( this.get('router.rootURL') + 'audio.json').then(function(data) {
            for (var buid in data) {
                var item = data[buid];
                //convert duration from clock (e.g. 00:00:32) to milliseconds (e.g. 32000)
                item.duration = moment.duration(item.duration).asMilliseconds();
                item.id = buid;
                item.pub_date = new Date(item.pub_date);
                store.push('clip',item).save();
            }
        });
    }
});
