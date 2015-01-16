import DS from "ember-data";

 export default DS.Model.extend({


    title: DS.attr(),
    description: DS.attr('string',{defaultValue: ''}),
    user: DS.belongsTo('user',{async: true}),
    //clips: DS.hasMany('clip', {inverse: null, async: true}),
    items: DS.hasMany('item'),
    created_at: DS.attr('date'),
    updated_at: DS.attr('date'), 
    uid: DS.attr(),

 
});