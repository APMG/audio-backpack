import Ember from "ember";
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend({
    /**
     * Do initial data load from json file into store, which should be backed by localstorage
     */
    beforeModel: function(){
        var store = this.store;
        return Ember.$.getJSON( this.get('router.rootURL') + 'audio.json').then(function(data) {
            data.forEach(function(item){
                item.id = item.buid;  //make the ID the buid
                delete item.buid; //remove the buid so ember doesnt warn us
                store.push('audio',item).save();
            });
        });
    }
});


export default Ember.Route.extend(ApplicationRouteMixin);
