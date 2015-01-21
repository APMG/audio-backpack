import Ember from "ember";

/**
 * This is some workarounds. Out of the box, ember does not support having multiple events on an action.
 * We need to support both click and touch events on this, so we have to use a view. 
 * This lets us have event handlers for both click and touchUp (and whatever else) and then
 * send those events to the controller to do stuff with.
 * We have an attribute on the view that we set that tells us what action we want to run on the controller. 
 * I'm not 100% sure that this is the "right" way to do it, but it seems to work pretty well. 
 */
export default Ember.View.extend({
    targetAction: '',

    forwardEditEvent: function(){
        this.get('controller').send(this.targetAction);
    }, 

    click: Ember.aliasMethod('forwardEditEvent'),
    touchUp: Ember.aliasMethod('forwardEditEvent'),

});