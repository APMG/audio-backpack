import Ember from "ember";

export default Ember.Route.extend({
  // model: function() {
  //   return this.store.find('playlist');
  // },
  renderTemplate: function() {
      console.log('render that guy');

    var controller = this.controllerFor('lists.list');

    console.log('where be it at',controller);

    this.render('lists/list-detail', {
      controller: controller
    });
  }

});
