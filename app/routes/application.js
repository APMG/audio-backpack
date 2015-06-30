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

            //deal with timezone bullshit
            var tzOffset = 'T00:00-06:00';
            if (moment().isDST()){
                tzOffset = 'T00:00-05:00';
            }

            //Wipe out the local storage for this before starting import
            //ensures that our clip data is always fresh
            localStorage.removeItem(ENV.localStorageNamespace);
            for (var buid in data.data) {
                var item = {data: {
                    id: buid,
                    type: 'clip',
                    attributes: {}
                }};
                item.data.attributes = data.data[buid];
                item.data.attributes.duration = moment.duration(data.data[buid].duration).asMilliseconds();
                item.data.attributes.pub_date = new Date(data.data[buid].pub_date+tzOffset);  //make always at daybreak
                store.push(item).save();
            }
        });
    },
      actions: {
        openModal: function(modalName,model,secondaryModel) {
            //console.log('open modal from app called');

            this.controllerFor(modalName).set('model', model);
            this.controllerFor(modalName).set('secondaryModel', secondaryModel);

            return this.render(modalName, {
                into: 'application',
                outlet: 'modal'
            });
        },
        
        closeModal: function() {
            //console.log('close recieved!');
            Ember.$('.modal').modal('hide');  // close that sucker
            return this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'application'
            });
        },
        
        //Makes sure we reload to correct URL after logout
        sessionInvalidationSucceeded: function() {
            window.location.replace(ENV.baseURL);
        },
        //When we add a new playlist, we send this action and need it to be acted on globally
        invalidateModel: function() {
            Ember.Logger.log('Route is now refreshing...');
            this.refresh();
        }
    }
});
