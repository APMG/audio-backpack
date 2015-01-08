import Ember from "ember";

/**
 * Handlebars helper
 * Takes a duration value in milliseconds and converts it into a pretty duration
 * like "1min 32sec"
 */
export default Ember.Handlebars.makeBoundHelper(function(value) {
	var dur = moment.duration(value);
    var ret;
    if (dur.hours() !== 0){
        ret = dur.hours()+"hour " + dur.minutes()+"min " + dur.seconds() + "sec";
    } else if (dur.minutes() !== 0){
        ret = dur.minutes()+"min " + dur.seconds() + "sec";
    } else {
        ret = dur.seconds() + "sec";
    }
    ret = ret.replace(' 0sec', '');
    return ret;
});