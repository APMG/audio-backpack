import DS from "ember-data";
import Ember from 'ember';


/**
 * Takes our json data and makes it usable
 * we go from this:
 * 
 {
    "user": {
        "uid": "d83556e638789a166387a1cd845096a87db2aa6f",
        "email": "user@mpr.org",
        "role": "user",
        "gravatar": "d7bdf093d6b4959fea36ecce2c3b4d72",
        "profile": {
            "first_name": "Steve",
            "last_name": "Jobs",
            "email_flag": false,
            "postal_code": "90210"
        }
    }
}
to this:
{
    "user": {
        "user_id": "d83556e638789a166387a1cd845096a87db2aa6f",
        "email": "user@mpr.org",
        "gravatar": "d7bdf093d6b4959fea36ecce2c3b4d72",
        "first_name": "Steve",
        "last_name": "Jobs"
    }
}
 */

export default DS.RESTSerializer.extend({
    primaryKey: "uid",
    normalizePayload: function(payload) {
        //console.log(payload);
        try{
            delete payload.user.email;
            delete payload.user.role;
        } catch(e){
            Ember.assert('User payload did not have correct attribute formation', payload);
        }
        if (payload.user.profile !== null){
            payload.user.first_name = payload.user.profile.first_name;
            payload.user.last_name = payload.user.profile.last_name;
        }
        delete payload.user.profile;
        //console.log(payload);
        return payload;
      }

});
