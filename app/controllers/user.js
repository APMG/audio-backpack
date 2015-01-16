import Ember from "ember";

export default Ember.ObjectController.extend({
    
    lists: function(){
        var userId = this.get('model.id');
        return this.model.store.find('list',{user:userId});
    }.property('lists'),

    /**
     * Tells us if we're looking at the logged in users
     * @return {Boolean} [description]
     */
    isLoggedInUser: function(){
        if (this.get('session.isAuthenticated')){
            var loggedInId = this.get('session.user_id');
            var userId = this.get('model.id');
            if (loggedInId ===  userId){
                return true;
            }
        }
        return false;
       
    }.property(),

    /*
     * cleans out annloying spaces that we do not want there 
     */
    ownerApos: function(){
        var fname = this.get('model.first_name');
        return fname.trim()+'\'s';
    }.property('model.first_name')
});