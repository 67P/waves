import Ember from 'ember';

export default Ember.Controller.extend({

  messagesBinding: 'model.archive.today.messages',
  previousBinding: 'model.archive.today.previous',
  nextBinding: 'model.archive.today.next',

  previousClass: function() {
    return Ember.isPresent(this.get('previous')) ? 'enabled' : 'disabled';
  }.property('previous'),

  nextClass: function() {
    return Ember.isPresent(this.get('next')) ? 'enabled' : 'disabled';
  }.property('next'),

  actions: {

    goToPreviousDay() {
      if (!this.get('previous')) { return; }

      let path = '/logs/'+this.get('model.network')+
                 '/'+this.get('model.channel')+
                 '/'+this.get('previous');

      this.transitionToRoute(path);
    },

    goToNextDay() {
      if (!this.get('next')) { return; }

      let path = '/logs/'+this.get('model.network')+
                 '/'+this.get('model.channel')+
                 '/'+this.get('next');

      this.transitionToRoute(path);
    }

  }

});
