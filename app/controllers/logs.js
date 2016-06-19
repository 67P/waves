import Ember from 'ember';

export default Ember.Controller.extend({

  messagesBinding: 'model.archive.today.messages',
  previousBinding: 'model.archive.today.previous',
  nextBinding: 'model.archive.today.next',

  archivePresent: function() {
    return !Ember.isEmpty(this.get('model.archive.today'));
  }.property('model.archive.today'),

  dateToday: function() {
    let dateParams = this.get('model.dateParams');
    return this.get('model.archive.today.[@id]') ||
           [dateParams.year, dateParams.month, dateParams.day].join('/');
  }.property('model.archive.today.[@id]', 'model.dateParams'),

  previousDay: function() {
    let dateParams = this.get('model.dateParams');
    let dateStr = [dateParams.year, dateParams.month, dateParams.day].join('-');
    return moment.utc(dateStr).subtract(1, 'days').format('YYYY/MM/DD');
  }.property('model.dateParams'),

  nextDay: function() {
    let dateParams = this.get('model.dateParams');
    let dateStr = [dateParams.year, dateParams.month, dateParams.day].join('-');
    let nextDay = moment.utc(dateStr).add(1, 'days');

    if (nextDay.isSameOrAfter(moment.utc())) {
     return null;
    } else {
     return nextDay.format('YYYY/MM/DD');
    }
  }.property('model.dateParams'),

  previousClass: function() {
    return Ember.isPresent(this.get('previousDay')) ? 'enabled' : 'disabled';
  }.property('previousDay'),

  nextClass: function() {
    return Ember.isPresent(this.get('nextDay')) ? 'enabled' : 'disabled';
  }.property('nextDay'),

  actions: {

    goToPreviousDay() {
      let path = '/logs/'+this.get('model.network')+
                 '/'+this.get('model.channel')+
                 '/'+(this.get('previous') || this.get('previousDay'));

      this.transitionToRoute(path);
    },

    goToNextDay() {
      if (!this.get('nextDay')) { return; } // next day in future

      let path = '/logs/'+this.get('model.network')+
                 '/'+this.get('model.channel')+
                 '/'+(this.get('next') || this.get('nextDay'));

      this.transitionToRoute(path);
    }

  }

});
