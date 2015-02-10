import Ember from "ember";

export default Ember.Controller.extend({   
    actions: {
        close: function() {
            return this.send('closeModal');
        },
        deleteList: function(){
            var loggedInId = this.get('session.user_id');
            var ownerId = this.get('model.user.id');

            if (loggedInId && (loggedInId === ownerId)){
                var that = this;
                var list = this.get('model');
                list.destroyRecord().then(function(){
                    // Success callback
                    that.send('closeModal');
                    //pass the loggedInId rather than the full user, because else the model hook on route doesn't run
                    that.transitionToRoute('user',loggedInId);
                }, function(error) {
                    console.error('tried save, ERROR', error);
                    return false;
                });
            }
            return;  
        }
    }


});