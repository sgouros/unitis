import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('collective-decision', params.collective_decision_id);
  },

  actions: {

    saveCollectiveDecision(cd) {

      cd.save().then(() => {
        this.controllerFor('collective-decisions').set('responseMessage', 'Collective decision successfully edited!');
        this.transitionTo('collective-decisions');
      });

    },


    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't been saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
          this.controllerFor('collective-decisions').set('responseMessage', '');
        }
        else {
          transition.abort();
        }

      }
    }


  }

  // TODO να έχει και ένα κουμπί cancel
  // TODO να εμφανίζει μήνυμα επιτυχίας αν κάνεις επιτυχώς edit

});
