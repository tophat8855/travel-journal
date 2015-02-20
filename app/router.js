import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('photos', function() {
    this.route('new');
    this.route('show', { path: '/:photo_id' });
  });
});

export default Router;
