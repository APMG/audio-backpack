import Ember from "ember";

export default Ember.Route.extend({
  // model: function() {
  //   return this.store.find('playlist');
  // },
  renderTemplate: function() {
      console.log('render that guy');

    var controller = this.controllerFor('playlist');
    this.render('playlist-detail', {
      controller: controller
    });
  }

});
