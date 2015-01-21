import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return Ember.RSVP.hash({
            clips: this.store.all('clip'),
            //dan nass, primary guy for MPR
            lists: this.store.find('list',{user:'ab5e79b332f1fee7b06a52a866028a6a9ac96dd3'})
        });
    }
});
