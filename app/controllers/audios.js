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

    // binding the property on the paged array 
    // to a property on the controller
    totalPagesBinding: "pagedContent.totalPages",


    filteredAudio: function() {   //the property that willl always contain our list of audio
        return this.model;
    }.property('filteredAudio'),
    /**
     * Deals with changing the results list when the seachTerm changes
     * Uses the model.filter class to filter the results on the three fields we care about
     */
    onSearchTermChange: function(val){ 
        var term = val.searchTerm.toLowerCase();

        if (term.length > 2) {
            var results;
            results = this.model.filter(function(audio) {
                return audio.get('title').toLowerCase().indexOf(term) !== -1 ||
                    audio.get('description').toLowerCase().indexOf(term) !== -1 ||
                    audio.get('notes').toLowerCase().indexOf(term) !== -1;
            });
            this.set('filteredAudio',results);
       } else {
            this.set('filteredAudio',this.model);
       }
    }.observes("searchTerm")
});