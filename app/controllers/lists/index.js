import Ember from "ember";
//import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.ArrayController.extend({
    itemController: "lists.list",

    // setup our query params
    queryParams: ["page", "perPage"],

    // binding the property on the paged array 
    // to the query params on the controller
    pageBinding: "content.page",
    perPageBinding: "content.perPage",
    totalPagesBinding: "content.totalPages",

    // set default values, can cause problems if left out
    // if value matches default, it won't display in the URL
    page: 1,
    perPage: 10

});