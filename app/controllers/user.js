import Ember from "ember";

export default Ember.ObjectController.extend({

    // setup our query params
    queryParams: ["page", "perPage"],

    // binding the property on the paged array 
    // to the query params on the controller
    pageBinding: "model.lists.page",
    perPageBinding: "model.lists.perPage",
    totalPagesBinding: "model.lists.totalPages",

    // set default values, can cause problems if left out
    // if value matches default, it won't display in the URL
    page: 1,
    perPage: 10,

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