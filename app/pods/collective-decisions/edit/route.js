import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('collective-decision', params.collective_decision_id);
  },

// TODO να έχει και ένα κουμπί cancel
// TODO να εμφανίζει μήνυμα επιτυχίας αν κάνεις επιτυχώς edit
  actions: {

     saveCollectiveDecision(library) {
      library.save().then(() => this.transitionTo('collective-decisions'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't been saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }

});
