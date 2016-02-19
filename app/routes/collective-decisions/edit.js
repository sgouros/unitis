import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('collective-decision', params.collective_decision_id);
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('title', 'Edit a collective decision');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('collective-decisions/form');
  },

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


// TODO να έχει και ένα κουμπί cancel
// TODO να εμφανίζει μήνυμα επιτυχίας αν κάνεις επιτυχώς edit
