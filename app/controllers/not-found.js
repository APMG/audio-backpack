import Ember from "ember";

export default Ember.Controller.extend({

    badPath: Ember.computed(function(){
        return window.location.href;
    })
    
});