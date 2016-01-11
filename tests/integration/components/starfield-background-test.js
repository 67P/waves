import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('starfield-background', 'Integration | Component | starfield background', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{starfield-background}}`);

  assert.ok(this.$('canvas'));
});
