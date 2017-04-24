import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'div',
  classNames: ['message'],

  time: function() {
    return moment(this.get('message.timestamp')).format('HH:mm');
  }.property('message.timestamp'),

  // The location without the anchor
  href: window.location.href.replace(window.location.hash, ""),

  timestamp: function() {
    return "timestamp_" + this.get('message.timestamp');
  }.property('message.timestamp'),

  isCurrentTimestamp: function() {
    return window.location.hash.substr(1) === "timestamp_" + this.get('message.timestamp');
  }.property('message.timestamp'),

  nickColorClass: function() {
    return 'color-'+md5(this.get('message.from')).match(/\d/);
  }.property('message.from'),

  formattedText: function() {
    let text = linkifyStr(this.get('message.text'), {
      linkAttributes: { rel: 'nofollow' },
      validate: {
        url: function (value) {
          return /^(http)s?:\/\//.test(value);
        }
      }
    });
    return new Ember.Handlebars.SafeString(text);
  }.property('message.text')

});
