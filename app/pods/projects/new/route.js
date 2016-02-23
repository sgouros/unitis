import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('project');
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
