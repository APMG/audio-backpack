import Ember from "ember";

export default Ember.Controller.extend({

    // setup our query params
    queryParams: ["page", "perPage"],

    // binding the property on the paged array 
    // to the query params on the controller
    pageBinding: "model.lists.page",
    perPageBinding: "model.lists.perPage",
    totalPagesBinding: "model.lists.totalPages",

    needsPagination: Ember.computed('model.lists', function(){
        if (this.get('model.lists.totalPages') > 1){
            return true;
        } 
        return false;
    }),

    // set default values, can cause problems if left out
    // if value matches default, it won't display in the URL
    page: 1,
    perPage: 10,

    /**
     * Tells us if we're looking at the logged in users
     * @return {Boolean} [description]
     */
    isLoggedInUser: Ember.computed(function(){
        if (this.get('session.isAuthenticated')){
            var loggedInId = this.get('session.user_id');
            var userId = this.get('model.user.id');
            if (loggedInId ===  userId){
                return true;
            }
        }
        return false;
       
    }),

});