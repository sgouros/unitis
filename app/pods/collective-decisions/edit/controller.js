import Ember from 'ember';
import * as log from 'unitis/utils/ULogger';

export default Ember.Controller.extend({

  parentController: Ember.inject.controller('collective-decisions'),

  saveAllChildProjects(parentCD){
    log.info(this,"inside saveAllProjects");
    log.info(this,parentCD);
    return parentCD.saveAllProjects();
  },

// είσαι εδώ***************************
  failedToEdit(error) {
     log.error(this, 'one of the project saves failed inside editCollectiveDecision with error code:' + error);
  },

  // transitionBack() {
  // let route   = this.get('target');
  // let message = 'EDITED collective decision with id: ' + collectiveDecision.get('id');
  // this.get('parentController').set('responseMessage', message);// aυτό σετάρει τον collective-decisions controller
  //   log.info(this,message);
  //   route.transitionTo('collective-decisions');
  // },

  actions: {

// TODO #11
    editCollectiveDecision(collectiveDecision) { //ερχεται από το collective-decision-item component
      collectiveDecision.save()
        .then( savedCD => savedCD.saveAllProjects() )
        .then( () => this.transitionBack)
        .catch((error) => this.failedToEdit(error));)
    },


    addProject(collectiveDecision) {
      let new_project = this.store.createRecord('project');
      new_project.code = 'default project code';
      log.info(this, 'project just created');
      if (!collectiveDecision.projects) {
        log.info(this, 'the cd has no projects');
        collectiveDecision.projects = [];
      }

      collectiveDecision.get('projects').pushObject(new_project);
        log.debug(this,'pushing inside addProject of edit');

      // TODO -01-
    }

  }
});
