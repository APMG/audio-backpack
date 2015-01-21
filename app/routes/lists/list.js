import Ember from "ember";

export default Ember.Route.extend({

  renderTemplate: function() {
    var controller = this.controllerFor('lists.list');
    this.render('lists/list-detail', {
      controller: controller
    });
  },

    setupController: function(controller, model){
        controller.set('model', model);

        var loggedInId = this.get('session.user_id');
        var userId = model.get('user.id');
        if (loggedInId === userId){
            controller.set('isCurrentUserOwner', true);
        } else {
            controller.set('isCurrentUserOwner', false);
        }
    }

});
