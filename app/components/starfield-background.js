/* global Starfield */
import Ember from 'ember';

export default Ember.Component.extend({

  stars: function() {
    return Math.round(window.innerWidth / 20);
  }.property(),

  createStarfield: function() {
    let container = document.getElementById('starfield-container');
    let starfield = new Starfield();

    starfield.stars = this.get('stars');

    if (Ember.isPresent(this.get('bgColor'))) {
      starfield.bgColor = this.get('bgColor');
    }
    if (Ember.isPresent(this.get('fgColor'))) {
      starfield.fgColor = this.get('fgColor');
    }

    console.debug('stars', starfield.stars);

    starfield.initialise(container);
    starfield.start();
  }.on('didInsertElement')

});
