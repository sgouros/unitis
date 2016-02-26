//app/pods/projects/index/route.js

import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('project');
  },

  actions: {

    deleteProject(pr) {
      let confirmation = confirm('Are you sure you want to delete this?');

      if (confirmation) {
        pr.destroyRecord();
        this.controllerFor('projects').set('responseMessage', 'Project successfully deleted!');
      }
      // TODO τα μηνύματα επιτυχούς διαγραφής πχ να είναι σε στυλ postit popup
    },

    willTransition() {
      this.controllerFor('projects').set('responseMessage', '');
    }

  }

});
