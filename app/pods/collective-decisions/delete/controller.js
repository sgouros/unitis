import Ember from 'ember';
import * as log from 'unitis/utils/ULogger';

export default Ember.Controller.extend({

  parentController: Ember.inject.controller('collective-decisions'),

  getCollectiveDecisionsRoute(){
    return this.get('target');
  },


actions:{

  delete(collectiveDecision){
    let responseMessage = 'DELETED collective decision with id: ' + collectiveDecision.get('id');
    collectiveDecision.destroyRecord();
    this.get('parentController').set('responseMessage', responseMessage);
    log.info(this, responseMessage);
    this.getCollectiveDecisionsRoute().transitionTo('collective-decisions');
  },

  cancel(){
    this.getCollectiveDecisionsRoute().transitionTo('collective-decisions');
  }

}

});
