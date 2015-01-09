// import DS from "ember-data";

// export default DS.RESTAdapter.extend({});



import DS from "ember-data";
import ENV from '../config/environment';

/**
 * Extends the data store to use the local storage adapter and set up the namespace
 */
export default DS.LSAdapter.extend({
    namespace: ENV.localStorageNamespace + "-list"
});

