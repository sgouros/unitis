import Ember from 'ember';
import {debug,info,warn,error} from 'unitis/utils/ULogger';

export default Ember.Controller.extend({

  parentController: Ember.inject.controller('collective-decisions'),

  saveChildProjects: function saveChildProjects(parentDecision) {
    parentDecision.get('projects').forEach(function(aProject) {
      promisesArray.push(aProject.save());
      debug(editCollectiveDecisionsController,'pushing inside editCollectiveDecision');
    });

    return Ember.RSVP.all(promisesArray).then(function afterPromises() {
      collectiveDecisionsController.set('responseMessage', message);// aυτό σετάρει τον collective-decisions.edit controller. Εγώ πρέπει να κοιτάω τον collective-decisions controller
      info(editCollectiveDecisionsController,message);
      route.transitionTo('collective-decisions');
    }).catch(function failedToEdit() {
      error(editCollectiveDecisionsController, 'one of the saves failed inside editCollectiveDecision');
    });

  },

  actions: {

    editCollectiveDecision(collectiveDecision) { //ερχεται από το collective-decision-item component
      info(this,'editCollectiveDecision called');
      let route   = this.get('target');
      let message = 'EDITED collective decision with id: ' + collectiveDecision.get('id');
      let promisesArray = [];
      let editCollectiveDecisionsController = this;
      let collectiveDecisionsController = this.get('parentController');
      collectiveDecision.save().then(editCollectiveDecisionsController.saveChildProjects); // TODO #11
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
