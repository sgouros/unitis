import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('project', params.project_id);
  },

  actions: {

    saveProject(pr) {
      pr.save().then(() => {
        this.controllerFor('projects').set('responseMessage', 'Project decision successfully edited!');
        this.transitionTo('projects');
      });

    },



    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't been saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
          this.controllerFor('projects').set('responseMessage', '');
        }
        else {
          transition.abort();
        }

      }
    }


  }

  // TODO να έχει και ένα κουμπί cancel


});
