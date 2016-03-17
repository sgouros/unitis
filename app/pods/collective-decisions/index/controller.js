import Ember from 'ember';
import {debug,info,warn,error} from 'unitis/utils/ULogger';

export default Ember.Controller.extend({

  actions: {

    // createCollectiveDecision(cd){
    //   info(this,'log');
    // },

    deleteCollectiveDecision(cd) { // TODO -05-
      let confirmation = confirm('Are you sure you want to delete this?');

      if (confirmation) {
        let responseMessage = 'collective decision with id: ' + cd.get('id') + ' deleted';
        cd.destroyRecord();
        this.set('responseMessage', responseMessage);
        info(this, responseMessage);
      }
    }
  }

});
