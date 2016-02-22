import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('collective-decision');
  },

  //setupController: function (controller, model) {
  //  this._super(controller, model);
  //  controller.set('title', 'Create a new collective decision');
  //  controller.set('buttonLabel', 'Create');
  //},
  //
  //renderTemplate() {
  //  this.render('collective-decisions/form');
  //},
  actions: {
    saveCollectiveDecision: function (newCollectiveDecision) {
      newCollectiveDecision.save().then((response) => {
        let message="Collective Decision successfully added: "+ newCollectiveDecision.get('code')+ " (transaction id: "+ response.get('id')+ ")";
        this.controllerFor('collective-decisions').set('responseMessage', message);
        this.transitionTo('collective-decisions'); // λέμε στη route να μας ξαναπάει στο collective-decisions path
      });

      // Aυτός είναι ο σωστός τρόπος για response messages. Στην ουσία πρέπει να λέμε ΠΟΙΟ είναι το response message
      // Αν σηκώνουμε μόνο flag εδώ τότε χρειάζεται switch μέσα στην view για να διαλέγει ποιό από όλα τα messages θα δείξει
      // κάτι που είναι μεγάλη βλακεία
    },

    // αν φύγουμε από τη σελίδα χωρίς να γράψουμε τίποτε, κάνε reset
    willTransition: function () {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }

    } // willTransition

  }// actions

});
