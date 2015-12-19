import Ember from 'ember';
import config from 'waves/config/environment';
import ajax from 'ic-ajax';

export default Ember.Route.extend({

  model(params) {
    let baseUrl = config.publicLogsUrl+'/'+params.network+'/channels/'+params.channel;
    let logsUrl = baseUrl+'/2015/12/19';
    let dailyArchives = [];

    let fetchArchives = ajax({
      url: logsUrl,
      type: 'GET',
      dataType: 'json'
    }).then(dailyArchive => {
      console.log(dailyArchive.today.messages);
      dailyArchives.push(dailyArchive);
      return dailyArchives;
    });

    return Ember.RSVP.hash({
      network: params.network,
      channel: params.channel,
      dailyArchives: fetchArchives
    });
  }

});
