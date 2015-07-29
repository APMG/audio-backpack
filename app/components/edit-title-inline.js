import Ember from "ember";

export default Ember.Component.extend({
  isEditing: false,  
  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
    },
    acceptTitleChanges: function(){
        // console.log('got some changes');
        this.toggleProperty('isEditing');
        this.sendAction('acceptTitleChanges');
    } 
  }
});