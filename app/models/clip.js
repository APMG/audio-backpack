import DS from "ember-data";

 export default DS.Model.extend({
    title: DS.attr(),
    description: DS.attr(),
    notes: DS.attr(),
    duration: DS.attr('number'),
    apm_audio: DS.attr(),
    pub_date: DS.attr('date'),

    //Uses moment.js to format the date nicely
    //If it is published sometime during the current day, we say "today" instead of "nn minutes ago"
    prettyDate: function(){
        var now = moment();
        var pub_date = moment(this.get('pub_date'));
        
        var diff = now.diff(pub_date, 'minutes')  ;

        if (diff < 1440){
            return "today";
        } else{
            return moment(pub_date).fromNow(); 
        }
    }.property()

});