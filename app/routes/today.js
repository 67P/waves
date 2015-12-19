import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({

  beforeModel(transition) {
    let params = transition.params.today;
    let date = moment();
    let logsPath = '/logs/'+params.network+'/'+params.channel+'/';
        logsPath += date.format('YYYY/MM/DD');

    this.transitionTo(logsPath);
  }

});
