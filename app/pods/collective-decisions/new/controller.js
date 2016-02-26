import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    addProject(collectiveDecision){

      console.log('-----------got inside addProjecta of controller');

      let project = this.store.createRecord('project');
      project.code='cccode';

        console.log('-----------project just created');

        collectiveDecision.get('projects').pushObject(project);

        // TODO αυτή τη στιγμή τα projects είναι promises. πρέπει να δω πως γίνεται να γίνονται resolved μεσω του rsvp






    }


  }


});
