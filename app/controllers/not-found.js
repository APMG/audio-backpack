import Ember from "ember";

export default Ember.Controller.extend({

    badPath: function(){
        return window.location.href;
    }.property()
    
});