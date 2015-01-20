import Ember from "ember";

export default Ember.Route.extend({

  renderTemplate: function() {
    var controller = this.controllerFor('lists.list');
    this.render('lists/list-detail', {
      controller: controller
    });
  },

});
