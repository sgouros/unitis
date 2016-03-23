import Ember from 'ember';
import {debug,info,warn,error} from 'unitis/utils/ULogger';

export default Ember.Controller.extend({

  parentController: Ember.inject.controller('collective-decisions'),

  actions: {

    editCollectiveDecision(collectiveDecision) { //ερχεται από το collective-decision-item component
      debug(this,'editCollectiveDecision called');

      let route   = this.get('target');
      let message = 'EDITED collective decision with id: ' + collectiveDecision.get('id');
      let saveProjectPromisesArray = [];
      let _this=this;
      let pc=this.get('parentController');

// TODO #11
      collectiveDecision.save().then((theSavedDecision) => {
        theSavedDecision.get('projects').forEach(function addProjectsToPromiseArray(eachDecisionProject) {
          saveProjectPromisesArray.push(eachDecisionProject.save());
        });

        return Ember.RSVP.all(saveProjectPromisesArray).then(function transitionBack() {
          pc.set('responseMessage', message);// aυτό σετάρει τον collective-decisions.edit controller. Εγώ πρέπει να κοιτάω τον collective-decisions controller
          route.transitionTo('collective-decisions');
        }).catch(function failedToEdit() {
          error(_this, 'one of the saves failed inside editCollectiveDecision');
        });

      });
    },

    addProject(collectiveDecision) {
      let new_project = this.store.createRecord('project');
      new_project.code = 'default project code';
      info(this, 'project just created');
      if (!collectiveDecision.projects) {
        info(this, 'the cd has no projects');
        collectiveDecision.projects = [];
      }

      collectiveDecision.get('projects').pushObject(new_project);
        debug(this,'pushing inside addProject of edit');

      // TODO -01-
    }

  }
});
