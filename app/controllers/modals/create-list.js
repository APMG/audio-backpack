import Ember from "ember";

export default Ember.Controller.extend({

    listTitle: '',
    listDescription: '',

    list: function(){
        return this.model;
    }.property('list'),
    
    actions: {
        close: function() {
            return this.send('closeModal');
        },
        createList: function(){
            var that = this;

            var user = this.get('session.user');
            var loggedInId = this.get('session.user_id');

            var cleanTitle = this.get('listTitle');

            if (!cleanTitle.trim()) { return; }
            //create our list
            var list = this.store.createRecord('list', {
                title: cleanTitle,
                description: this.listDescription,
                user: user
            });

            list.save().then(function(){
                // Success callback
                that.set('listTitle', '');
                that.set('listDescription', '');
                that.send('closeModal');
                
                that.send('invalidateModel'); //user route listens for this action and refreshes model on it
                that.transitionToRoute('user', loggedInId);

            }, function(error) {
                console.log('tried save, ERROR', error);
                return false;
            });

            return; 
        }
    }


});