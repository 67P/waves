import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chat-message', 'Integration | Component | chat message', {
  integration: true
});

test('it renders', function(assert) {
  this.set('message', {
    from: 'mendax',
    timestamp: '1452529841427',
    text: 'I\'m a short message with nothing to change.'
  });
  this.render(hbs`{{chat-message}}`);

  assert.equal(this.$('span.url').length, 0);
});

test('it links URLs and surrounds them with a span', function(assert) {
  this.set('message', {
    from: 'mendax',
    timestamp: '1452529841454',
    text: 'You guise! Check out https://hackerbeach.org -- silverbucket is hanging out in the pope\'s living room!'
  });
  this.render(hbs`{{chat-message}}`);

  assert.equal(this.$('span.url a').length, 1);
});

test('it does not link simple domain names', function(assert) {
  this.set('message', {
    from: 'mendax',
    timestamp: '1452529841454',
    text: 'I just bought an-awesome-domain.com, do you like it?'
  });
  this.render(hbs`{{chat-message}}`);

  assert.equal(this.$('span.url').length, 0);
});
