import DS from "ember-data";
//import ENV from '../config/environment';

export default DS.RESTAdapter.reopen({
	host: 'https://localhost:3000'

	// if (ENV.environment === 'development') {
	// // ...
	// }
});