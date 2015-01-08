import DS from "ember-data";

export default DS.Model.extend({
	first_name: DS.attr(),
	last_name:  DS.attr(),
	gravatar: DS.attr(),
	playlists: DS.hasMany('playlist')
});