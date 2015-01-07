import DS from "ember-data";

/**
 * Extends the data store to use the local storage adapter and set up the namespace
 */
export default DS.LSAdapter.extend({
    namespace: 'classicalMprEdu'
});

