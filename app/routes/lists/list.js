import Ember from "ember";

export default Ember.Route.extend({
  // model: function() {
  //   return this.store.find('playlist');
  // },
  renderTemplate: function() {
    //console.log('render that guy');

    var controller = this.controllerFor('lists.list');

    //console.log('where be it at',controller);

    this.render('lists/list-detail', {
      controller: controller
    });
  },

    // setupController: function (controller, model) {
    //     // Call _super for default behavior
    //     this._super(controller, model);
    //     console.log('controller', this.controllerFor('items'));
    //     this.controllerFor('items').set('content', model.items);
    // }

});
