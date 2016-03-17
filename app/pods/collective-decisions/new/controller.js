import Ember from 'ember';
import {
  debug,
  info,
  warn,
  error
} from 'unitis/utils/ULogger';

export default Ember.Controller.extend({

  actions: {

    addProject(collectiveDecision) {
      let new_project = this.store.createRecord('project');

      new_project.code = 'default project code';

      info(this, 'project just created');

      if (!collectiveDecision.projects) {
        info(this, 'the cd has no projects');
        collectiveDecision.projects = [];
      }

      collectiveDecision.get('projects').pushObject(new_project);

      // TODO -01-
    }, // addProject action


    createCollectiveDecision(collectiveDecision) {
      debug(this,'createCollectiveDecision called');

      let route = this.get('target'); // the current route
      let promisesArray = [];

      collectiveDecision.save().then(function(aDecision) {
        aDecision.get('projects').forEach(function(aProject) {
          promisesArray.push(aProject.save());
        });

        return Ember.RSVP.all(promisesArray).then(function() {
          route.transitionTo('collective-decisions');
        }).catch(function() {
          error(this, 'one of the saves failed');
        });

      });
    } // createCollectiveDecision action

  } // actions

});
