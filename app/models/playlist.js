import DS from "ember-data";

 export default DS.Model.extend({
    title: DS.attr(),
    clip: DS.hasMany('clip', {inverse: null, async: true})
});