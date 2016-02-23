import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('collectiveDecision');
  },

  actions: {

    deleteCollectiveDecision(cd) {
      let confirmation = confirm('Are you sure you want to delete this?');

      if (confirmation) {
        cd.destroyRecord();
        this.controllerFor('collective-decisions').set('responseMessage', 'Collective decision successfully deleted!');
      }
      // TODO τα μηνύματα επιτυχούς διαγραφής πχ να είναι σε στυλ postit popup
    },

    willTransition() {
      this.controllerFor('collective-decisions').set('responseMessage', '');
    }

  }

});
