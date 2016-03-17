import Ember from 'ember';
import {debug,info,warn,error} from 'unitis/utils/ULogger';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('collective-decision', params.collective_decision_id);
  },

  actions: {

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

  // TODO -03-
  // TODO -04-

});
