import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('collective-decision-form', 'Integration | Component | collective decision form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{collective-decision-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#collective-decision-form}}
      template block text
    {{/collective-decision-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
