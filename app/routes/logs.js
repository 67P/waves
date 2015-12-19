import Ember from 'ember';
import config from 'waves/config/environment';
import ajax from 'ic-ajax';

export default Ember.Route.extend({

  model(params) {
    let logsUrl = config.publicLogsUrl+'/'+params.network+'/channels/'+params.channel+'/';
        logsUrl += [params.year, params.month, params.day].join('/');
    let dailyArchives = [];

    let fetchArchives = ajax({
      url: logsUrl,
      type: 'GET',
      dataType: 'json'
    }).then(dailyArchive => {
      dailyArchives.push(dailyArchive);
      return dailyArchives;
    }, error => {
      console.log(error);
      return dailyArchives;
    });

    return Ember.RSVP.hash({
      network: params.network,
      channel: params.channel,
      dailyArchives: fetchArchives
    });
  }

});
