import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signup');
  this.route('almostready');
  this.route('activate', { path: '/activate/:token' });
  this.route('auth');
  this.route('signupfailed');
});

export default Router;
