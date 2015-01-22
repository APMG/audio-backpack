import Ember from "ember";

export default Ember.ObjectController.extend({

    /**
     * Tells us if we're looking at the logged in users
     * @return {Boolean} [description]
     */
    isLoggedInUser: function(){
        if (this.get('session.isAuthenticated')){
            var loggedInId = this.get('session.user_id');
            var userId = this.get('model.user.id');
            if (loggedInId ===  userId){
                return true;
            }
        }
        return false;
       
    }.property(),

});