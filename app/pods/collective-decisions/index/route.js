import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('collectiveDecision');
  },

  actions: {

    willTransition() {
      this.controllerFor('collective-decisions').set('responseMessage', '');
    }

  }

});
