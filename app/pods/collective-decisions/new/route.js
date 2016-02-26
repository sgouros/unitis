//app/pods/collective-decisions/new/route.js

import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('collective-decision');
  },



  actions: {

    saveCollectiveDecision(cd) {
       // var model = this.get('controller.model');
      var _this = this;
      var promises = [];

      cd.save().then(function(collectiveDecision){

        collectiveDecision.get('projects').forEach(function(pr) {
          promises.push(pr.save());
        });

        return Ember.RSVP.all(promises).then(function () {
          _this.transitionTo('collective-decisions');
        }).catch(function () { console.log('one of the saves failed'); });



      });





    },





    //saveCollectiveDecision(cd) {
    //
    //  cd.save().then(() => {
    //    this.controllerFor('collective-decisions').set('responseMessage', 'Collective decision successfully added!');
    //    this.transitionTo('collective-decisions');
    //  });
    //
    //},




    willTransition() { // αν φύγουμε από τη σελίδα χωρίς να γράψουμε τίποτε, κάνε reset

      let model = this.controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }

    }



  }// actions

});
