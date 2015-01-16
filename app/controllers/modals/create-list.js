import Ember from "ember";

export default Ember.Controller.extend({
    listTitle: '',
    listDescription: '',

    list: function(){
        return this.model;
    }.property('list'),
    
    actions: {
        close: function() {
            console.log('sending close!');
            return this.send('closeModal');
        },
        createList: function(){
            //console.log('Ok/create recieved', this.listTitle, this.listDescription);

            var user = this.get('session.user');

            var cleanTitle = this.get('listTitle');

            if (!cleanTitle.trim()) { return; }
            //create our list
            var list = this.store.createRecord('list', {
                title: cleanTitle,
                description: this.listDescription,
                user: user
            });
            //console.log(list);

            list.save();
            
            //clear out values for next use
            this.set('listTitle', '');
            this.set('listDescription', '');


            return this.send('closeModal');
        }
    }


});