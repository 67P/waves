/* global md5 */
import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  tagName: 'div',
  classNames: ['message'],

  time: function() {
    return moment(this.get('message.timestamp')).format('HH:mm');
  }.property('message.timestamp'),

  nickColorClass: function() {
    return 'color-'+md5(this.get('message.from')).match(/\d/);
  }.property('message.from')

});
