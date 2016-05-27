//app/pods/collective-decisions/new/route.js

import Ember from 'ember';


export default Ember.Route.extend({

  model() {
    let cd = this.store.createRecord('collective-decision');
    cd.code = 'a new collective decision code';
    return cd;
  },

  actions: {



    willTransition() { // αν φύγουμε από τη σελίδα χωρίς να γράψουμε τίποτε, κάνε reset
      let model = this.controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }

  } // actions

});
