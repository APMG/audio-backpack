import Ember from "ember";

export default Ember.ArrayController.extend({
    actions: {
        createList: function() {
            // Get the list title set by the text field
            var title = this.get('newTitle');
            if (!title.trim()) { return; }
            //create our list
            var playlist = this.store.createRecord('playlist', {
                title: title,
            });
            playlist.save();
            this.set('newTitle', '');
        }
    }
});