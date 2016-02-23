import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('collective-decision');
  },

  actions: {


    saveCollectiveDecision(cd) {

      cd.save().then(() => {
        this.controllerFor('collective-decisions').set('responseMessage', 'Collective decision successfully added!');
        this.transitionTo('collective-decisions');
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
