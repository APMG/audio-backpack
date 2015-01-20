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
                
                that.transitionToRoute('user', user);

            }, function(error) {
                console.log('tried save, ERROR', error);
                return false;
            });

            return; 
        }
    }


});