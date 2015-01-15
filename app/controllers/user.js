import Ember from "ember";

export default Ember.ObjectController.extend({
    
    lists: function(){
        // TODO: Presently this does not correctly filter to the user in the route/url
        // That should be fixed
        var userId = parseInt(this.get('model.id'), 10);
        return this.model.store.find('list',{user:userId});
    }.property('lists'),

    /**
     * Tells us if we're looking at the logged in users
     * @return {Boolean} [description]
     */
    isLoggedInUser: function(){
        if (this.get('session.isAuthenticated')){
            var loggedInId = this.get('session.user_id');
            var userId = parseInt(this.get('model.id'), 10);
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