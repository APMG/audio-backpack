/**
 * This may need to be customized to not cover the entire application, but rather the various models. 
 */

import DS from "ember-data";
import Ember from 'ember';

export default DS.RESTSerializer.extend({

    normalizePayload: function(payload) {
        console.log('list-payload',payload);
        delete payload.list_item_types;

        if (!Ember.isEmpty(payload.items)){
            for (var i = 0; i < payload.items.length; i++) {
                delete payload.items[i].created_at;
                delete payload.items[i].updated_at;
                delete payload.items[i].list_item_type_id;

            }
        }

        // delete payload.status;
        return payload;
    },




    keyForRelationship: function(attr) {
        if (attr === 'items'){
            return 'item_ids';
        }
        return attr;
    },



});
