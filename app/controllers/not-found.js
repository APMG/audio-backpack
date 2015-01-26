import Ember from "ember";

export default Ember.ObjectController.extend({

    badPath: function(){
        return window.location.href;
    }.property()
    
});