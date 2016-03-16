import Ember from 'ember';
import {d,i,w,e} from 'unitis/utils/ULogger';

export default Ember.Controller.extend({
  actions: {

    addProject(collectiveDecision) { // TODO πρέπει να δω αν θελω να το πιανω εδώ ή στη route

      let new_project = this.store.createRecord('project');

      new_project.code = 'default project code';

      i(this, 'project just created');

      if (!collectiveDecision.projects) {
        i(this, 'the cd has no projects');
        collectiveDecision.projects = [];
      }

      collectiveDecision.get('projects').pushObject(new_project);

      // TODO αυτή τη στιγμή τα projects είναι promises. πρέπει να δω πως γίνεται να γίνονται resolved μεσω του rsvp
    }

  }
});
