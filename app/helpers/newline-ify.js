import Ember from "ember";

/**
 * Handlebars helper
 * Takes text and turns newlines (e.g. \r\n) into <br /> tags.
 */
export default Ember.Handlebars.makeBoundHelper(function(text) {
    text = Ember.Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Ember.Handlebars.SafeString(text);
});