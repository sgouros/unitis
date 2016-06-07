//app/pods/projects/index/route.js

import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('project');
  },

  actions: {

    deleteProject(project) {
      let confirmation = confirm('Are you sure you want to delete this?');

      if (confirmation) {
        project.destroyRecord();
        this.controllerFor('projects').setResponseMessage('Project successfully deleted!');
      }

    },

    willTransition() {
      this.controllerFor('projects').resetResponseMessage();
    }
  }

});
