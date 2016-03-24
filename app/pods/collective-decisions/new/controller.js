import Ember from 'ember';
import {debug,info,warn,error} from 'unitis/utils/ULogger';

export default Ember.Controller.extend({

parentController: Ember.inject.controller('collective-decisions'),

  actions: {

  createCollectiveDecision(collectiveDecision) {
      debug(this,'createCollectiveDecision called');

      let route = this.get('target'); // the current route
      let message = 'CREATED collective decision with id: ' + collectiveDecision.get('id');
      let saveProjectPromisesArray = [];
      let _this=this;
      let pc=this.get('parentController');

      collectiveDecision.save().then(function(theSavedDecision) {
        theSavedDecision.get('projects').forEach(function addProjectsToPromiseArray(eachDecisionProject) {
          saveProjectPromisesArray.push(eachDecisionProject.save());
        });

        return Ember.RSVP.all(saveProjectPromisesArray).then(function transitionBack() {
          pc.set('responseMessage', message);// aυτό σετάρει τον collective-decisions.edit controller. Εγώ πρέπει να κοιτάω τον collective-decisions controller
          info(this,message);
          route.transitionTo('collective-decisions');
        }).catch(function failedToCreate() {
          error(this, 'one of the saves failed inside createCollectiveDecision');
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
