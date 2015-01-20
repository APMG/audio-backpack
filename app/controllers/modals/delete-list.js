import Ember from "ember";

export default Ember.Controller.extend({   
    actions: {
        close: function() {
            return this.send('closeModal');
        },
        deleteList: function(){

            var that = this;
            var list = this.get('model');
            list.destroyRecord().then(function(){
                // Success callback
                that.send('closeModal');
                //that.transitionToRoute('lists');
            }, function(error) {
                console.log('tried save, ERROR', error);
                return false;
            });
            return;  
        }
    }


});