import DS from "ember-data";

export default DS.Model.extend({
    first_name: DS.attr(),
    last_name:  DS.attr(),
    gravatar: DS.attr(),
    lists: DS.hasMany('list'),

    full_name: function() {
        return this.get('first_name') + ' ' + this.get('last_name');
    }.property('first_name', 'first_name')
});