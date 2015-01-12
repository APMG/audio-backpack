import Ember from "ember";
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import ENV from '../config/environment';

export default Ember.Route.extend(ApplicationRouteMixin, {
    /**
     * Do initial data load from json file into store, which should be backed by localstorage
     */
    beforeModel: function(transition){
        this._super(transition); //need to call the partent class method before doing our own logic
        var store = this.store;
        return Ember.$.getJSON( ENV.baseURL + 'data/catalog.json').then(function(data) {

            //Wipe out the local storage for this before starting import
            //ensures that our clip data is always fresh
            localStorage.removeItem(ENV.localStorageNamespace);

            for (var buid in data) {
                var item = data[buid];
                //convert duration from clock (e.g. 00:00:32) to milliseconds (e.g. 32000)
                item.duration = moment.duration(item.duration).asMilliseconds();
                item.id = buid;
                item.pub_date = new Date(item.pub_date);
                store.push('clip',item).save();
            }
        });
    },
      actions: {
        openModal: function(modalName, model) {
            console.log('open modal from app called');
            console.log(modalName);

            this.controllerFor(modalName).set('model', model);
            return this.render(modalName, {
                into: 'application',
                outlet: 'modal'
            });
        },

        closeModal: function() {
            console.log('close recieved!');
            return this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'application'
            });
        }
    }
});
