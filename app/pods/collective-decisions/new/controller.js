import Ember from 'ember';
import {i,w} from 'unitis/utils/ULogger';

export default Ember.Controller.extend({

  actions: {

    addProject(collectiveDecision){

      console.log(collectiveDecision);

      let project = this.store.createRecord('project');
      project.code='a new project code';

      i(this,'project just created');
      
      if(!collectiveDecision.projects) {
        i(this,'the cd has no projects');
        collectiveDecision.projects = [];
      }

        collectiveDecision.get('projects').pushObject(project);


        // TODO αυτή τη στιγμή τα projects είναι promises. πρέπει να δω πως γίνεται να γίνονται resolved μεσω του rsvp


    }


  }


});
