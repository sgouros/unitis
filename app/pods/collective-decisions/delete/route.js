import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('collective-decision', params.collective_decision_id);
  }

});
