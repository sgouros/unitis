import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('collective-decisions', function() {
    this.route('index');
    this.route('new');
    this.route('edit', {path:'/:collective_decision_id/edit'});
  });

  this.route('projects', function() {
    this.route('index');
    this.route('new');
    this.route('edit', {path:'/:project_id/edit'});
  });



});

// TODO να βάλω breadcrumbs

export default Router;
