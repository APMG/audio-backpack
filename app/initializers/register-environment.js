import ENV from '../config/environment';
import Ember from "ember";


export function initialize(container, application) {
    var Config = Ember.Object.extend({ env: ENV });
    application.register('config:main', Config);
    application.inject('controller', 'config', 'config:main');
}

export default {
  name: 'register-environment',
  initialize: initialize
};
