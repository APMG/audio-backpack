import DS from "ember-data";

 export default DS.Model.extend({
    title: DS.attr(),
    description: DS.attr(),
    notes: DS.attr(),
    duration: DS.attr(),
    apm_audio: DS.attr(),
    pub_date: DS.attr('date'),
    
    /**
     * Gives a pretty duration for use in templates
     */
    prettyDuration: function(){
        var dur = this.get('duration');
        var hms = dur.split(':');
        var ret;
        if (hms[0] !== '00') {
            ret = hms[0] + 'hour '+ hms[1] + 'min ' + hms[2] + 'sec';
        } else if (hms[1] !== '00') {
            ret =  hms[1] + 'min ' + hms[2] + 'sec';
        } else {
            ret = hms[2] + 'sec';
        }
        ret = ret.replace(' 0sec', '');
        return ret;
    }.property('prettyDuration'),
});