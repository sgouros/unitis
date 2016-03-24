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
    this.route('delete', {path:'/:collective_decision_id/delete'});
  });


  this.route('projects', function() {
    this.route('index');
    this.route('new');
    this.route('edit', {path:'/:project_id/edit'});
  });



});

// TODO -02-

export default Router;
