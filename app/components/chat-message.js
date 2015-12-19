import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  tagName: 'div',
  classNames: ['message'],

  time: function() {
    return moment(this.get('message.timestamp')).format('HH:MM');
  }.property('message.timestamp')

});
