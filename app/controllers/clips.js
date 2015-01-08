import Ember from "ember";
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.ArrayController.extend({
    searchTerm: '',  //keep track of what is in the search input field

    // setup our query params
    queryParams: ["page", "perPage"],

    // set default values, can cause problems if left out
    // if value matches default, it won't display in the URL
    page: 1,
    perPage: 10,

    // can be called anything, I've called it pagedContent
    // remember to iterate over pagedContent in your template
    pagedContent: pagedArray('content', {pageBinding: "page", perPageBinding: "perPage"}),

    showPaging: true,  //flag we use to determine whether or not to show pagination

    // binding the property on the paged array 
    // to a property on the controller
    totalPagesBinding: "pagedContent.totalPages",


    filteredClips: false,
    
    /**
     * Deals with changing the results list when the seachTerm changes
     * Uses the model.filter class to filter the results on the three fields we care about
     */
    onSearchTermChange: function(val){ 
        var term = val.searchTerm.toLowerCase();

        if (term.length > 2) {
            var results;
            results = this.model.filter(function(clip) {
                return clip.get('title').toLowerCase().indexOf(term) !== -1 ||
                    clip.get('description').toLowerCase().indexOf(term) !== -1 ||
                    clip.get('notes').toLowerCase().indexOf(term) !== -1;
            });
            this.set('filteredClips',results);
            this.set('showPaging',false);
       } else {
            this.set('filteredClips',false);
            this.set('showPaging',true);

       }
    }.observes("searchTerm")
});