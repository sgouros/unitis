import { test } from 'qunit';
import moduleForAcceptance from 'unitis/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | render layout');

test('it renders the layout', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(find('h1'));
  });
});
