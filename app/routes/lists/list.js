import Ember from "ember";
import ENV from '../../config/environment';

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
    },
    afterModel: function(model){
        this.metaTags.setTags({
            title: model.get('title') + " • "+ ENV.name,
            description: model.get('description') ? model.get('description') : ENV.description,
            url: this.get('router.url')
        });
    }
});
