//  projects/new/route.js

import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let newProject=this.store.createRecord('project');

    let parentCollectiveDecision = this.store.findRecord('collective-decision',1).then((cd)=>{
      console.log('--------------just retrieved collective decision with id:',cd.id);
      newProject.collectiveDecision.pushObject(parentCollectiveDecision);
    });



    return newProject;
  },

  actions: {

    saveProject(pr) {

      pr.save().then(() => {
        this.controllerFor('projects').set('responseMessage', 'Project successfully added!');
        this.transitionTo('projects');
      });

    },


    willTransition() { // αν φύγουμε από τη σελίδα χωρίς να γράψουμε τίποτε, κάνε reset

      let model = this.controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }

    }



  }// actions

});
