import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('collective-decision-item', 'Integration | Component | collective decision comp', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{collective-decision-comp}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#collective-decision-comp}}
      template block text
    {{/collective-decision-comp}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
