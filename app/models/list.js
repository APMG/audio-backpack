import DS from "ember-data";

 export default DS.Model.extend({


    title: DS.attr(),
    description: DS.attr('string',{defaultValue: ''}),
    user: DS.belongsTo('user'),
    //clips: DS.hasMany('clip', {inverse: null, async: true}),
    list_items: DS.hasMany('list-item', {async: true}),  //this needs to be made not true once we have moved to not using localstorage
    created_at: DS.attr('date'),
    updated_at: DS.attr('date'), 
    uid: DS.attr(),

 
});