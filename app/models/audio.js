import DS from "ember-data";

 export default DS.Model.extend({
    title: DS.attr(),
    description: DS.attr(),
    notes: DS.attr(),
    duration: DS.attr(),
    apm_audio: DS.attr()
});