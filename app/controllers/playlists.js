import Ember from "ember";

export default Ember.ArrayController.extend({
    actions: {
        createList: function() {
            //look up user from session
            var user = this.get('session.user');

            // Get the list title set by the text field
            var title = this.get('newTitle');
            if (!title.trim()) { return; }
            //create our list
            var playlist = this.store.createRecord('playlist', {
                title: title,
                user: user
            });
            playlist.save();
            this.set('newTitle', '');
        }
    }
});