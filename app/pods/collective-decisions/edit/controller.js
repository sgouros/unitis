import Ember from 'ember';
import * as log from 'unitis/utils/ULogger';

export default Ember.Controller.extend({

  parentController: Ember.inject.controller('collective-decisions'),

  actions: {

    editCollectiveDecision(collectiveDecision) { //ερχεται από το collective-decision-item component
      collectiveDecision.save() // first, save the collective decision
        .then( () => {          // then transition
          let responseMessage = 'EDITED collective decision with id: ' + collectiveDecision.get('id');
          log.info(this,responseMessage);
          this.get('parentController').set('responseMessage', responseMessage);// aυτό σετάρει τον collective-decisions controller
          return this.get('target').transitionTo('collective-decisions');
        })
        .catch( (theError) => { // finally catch and log errors
          log.error(this, 'one of the project saves failed inside editCollectiveDecision with error code:' + theError);
        });
    }, // endof editCollectiveDecision

    addProject(collectiveDecision) {
      collectiveDecision.addProject(); // delegate to collective decision
    }

  } // endof actions
});
