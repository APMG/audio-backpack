import {
  moduleForModel,
  test
} from 'ember-qunit';

import Ember from "ember";


moduleForModel('user', {
  // Specify the other units that are required for this test.
  needs: ['model:list', 'model:item']
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});


test('a lists relationship exists', function(assert) {
  var User = this.store().modelFor('user');
  var relationship = Ember.get(User, 'relationshipsByName').get('lists');
  assert.equal(relationship.key, 'lists');
  assert.equal(relationship.kind, 'hasMany');
});