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
                var user = this.get('model.user');
                list.destroyRecord().then(function(){
                    // Success callback
                    that.send('closeModal');
                    that.transitionToRoute('user',user);
                }, function(error) {
                    console.log('tried save, ERROR', error);
                    return false;
                });
            }
            return;  
        }
    }


});