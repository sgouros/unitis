import Ember from 'ember';
import {debug,info,warn,error} from 'unitis/utils/ULogger';

export default Ember.Controller.extend({

  actions: {

    editCollectiveDecision(collectiveDecision) { //ερχεται από το collective-decision-item component
      debug(this,'editCollectiveDecision called');
      let route   = this.get('target');
      let message = 'EDITED collective decision with id: ' + collectiveDecision.get('id');

      collectiveDecision.save().then(() => {
        this.set('responseMessage', message);
        info(this,'message');
        route.transitionTo('collective-decisions');
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

      // TODO -01-
    }

  }
});
