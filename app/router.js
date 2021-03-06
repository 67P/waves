import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logs', {path: '/logs/:network/:channel/:year/:month/:day'});
  this.route('today', {path: '/logs/:network/:channel/today'});
  this.route('loading');
});

export default Router;
