import Ember from "ember";

export default Ember.ArrayController.extend({
    searchTerm: '',  //keep track of what is in the search input field

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