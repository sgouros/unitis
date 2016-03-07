import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    addProject(collectiveDecision){

      console.log('-----------got inside addProject of controller');

      console.log(collectiveDecision);

      let project = this.store.createRecord('project');
      project.code='a new project code';

      console.log('-----------project just created');


      if(!collectiveDecision.projects) {
        console.log('-----------the cd has no projects');
        collectiveDecision.projects = [];
      }

        collectiveDecision.get('projects').pushObject(project);


        // TODO αυτή τη στιγμή τα projects είναι promises. πρέπει να δω πως γίνεται να γίνονται resolved μεσω του rsvp


    }


  }


});
