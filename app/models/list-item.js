// This is not used yet, but may be needed to turn the playlist into a clip and vice versa
// need the playlist api to exist in a more concrete form first

import DS from "ember-data";

export default DS.Model.extend({
    list: DS.belongsTo('list'),
    position: DS.attr('number'),
    apm_audio: DS.attr('string'),
    notes: DS.attr('string'),
    type: DS.attr('string',{defaultValue: 'audio'}),
    clip: DS.belongsTo('clip', {inverse: null}),
});