/**
 * This may need to be customized to not cover the entire application, but rather the various models. 
 */

import DS from "ember-data";

export default DS.RESTSerializer.extend({

    normalizePayload: function(payload) {
        console.log('item-payload',payload);
        //delete payload.list_item_types;
        // delete payload.status;
        return payload;
    },



});

/**
 * WARNING: The payload for 'item' contains these unknown keys: [created_at,updated_at,list_item_type_id]. Make sure they've been defined in your model.
 */