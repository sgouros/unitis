import Ember from 'ember';
import {debug,info,warn,error} from 'unitis/utils/ULogger';

export default Ember.Controller.extend({

  actions: {

  createCollectiveDecision(collectiveDecision) {
      debug(this,'createCollectiveDecision called');

      let route = this.get('target'); // the current route
      let message = 'CREATED collective decision with id: ' + collectiveDecision.get('id');
      let promisesArray = [];
      let _this=this;

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
    }, // createCollectiveDecision action

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
    } // addProject action


  } // actions

});
