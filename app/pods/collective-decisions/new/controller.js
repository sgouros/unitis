import Ember from 'ember';
import * as log from 'unitis/utils/ULogger';

export default Ember.Controller.extend({

parentController: Ember.inject.controller('collective-decisions'),

  actions: {

  createCollectiveDecision(collectiveDecision) {
    collectiveDecision.save() // first, save the collective decision along with projects
      .then( () => {          // then transition
        let responseMessage = 'CREATED collective decision:' + collectiveDecision.trace();
        log.info(this,responseMessage);
        this.get('parentController').set('responseMessage', responseMessage);// aυτό σετάρει τον collective-decisions controller
        return this.get('target').transitionTo('collective-decisions');
      })
      .catch( (theError) => { // finally catch and log errors
        log.error(this, 'one of the project saves failed inside createCollectiveDecision with error code:' + theError);
      });
    }, // createCollectiveDecision action

    addProject(collectiveDecision) {
      collectiveDecision.addProject(); // delegate to collective decision
    } // addProject action

  } // actions

});
