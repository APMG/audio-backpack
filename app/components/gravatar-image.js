import Ember from "ember";
/**
 * Helper to make a gravatar from a md5 email hash
 * Hash must be pre-generated
 */
export default Ember.Component.extend({
    tagName: '',
    hash: '',
    size: 200,
    gravatarUrl: function(){
        var hash = this.get('hash');
        var size = this.get('size');
        return "https://www.gravatar.com/avatar/"+hash+".jpg?d=mm&r=pg&s="+size;
    }.property('email', 'size')
});