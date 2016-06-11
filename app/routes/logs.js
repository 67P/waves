import Ember from 'ember';
import config from 'waves/config/environment';
import ajax from 'ic-ajax';

export default Ember.Route.extend({

  model(params) {
    let logsUrl = config.publicLogsUrl+'/'+params.network+'/channels/'+params.channel+'/';
        logsUrl += [params.year, params.month, params.day].join('/');

    let fetchArchive = ajax({
      url: logsUrl,
      type: 'GET',
      dataType: 'json'
    }).then(dailyArchive => {
      return dailyArchive;
    }, error => {
      console.log(error);
      return {};
    });

    return Ember.RSVP.hash({
      network: params.network,
      channel: params.channel,
      archive: fetchArchive,
      dateParams: {
        year: params.year,
        month: params.month,
        day: params.day
      }
    });
  }

});
