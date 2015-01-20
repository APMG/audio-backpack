import Ember from "ember";

export default Ember.ArrayController.extend({
    //model: ['items'],
    sortProperties: ['position'],
    sortAscending: false // false for descending
});