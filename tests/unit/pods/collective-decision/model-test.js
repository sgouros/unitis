import { moduleForModel, test } from 'ember-qunit';

moduleForModel('collective-decision', 'Unit | Model | collective decision', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
