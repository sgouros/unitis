import Ember from 'ember';
import DS from 'ember-data';
import {d,i,w,e} from 'unitis/utils/ULogger';

export default Ember.Component.extend({

  actions: {

    createCollectiveDecision(param) {
      this.sendAction('action', param); // πιάνεται μέσα στο new/route.js ως saveCollectiveDecision καθώς έτσι περάστηκε κατα τη δημιουργία του component
    },

    addProject(cd){
      this.sendAction('addProject', cd);
      // TODO 07.03.2016 αυτό πιάνει στο new collective decision αλλά όχι στο edit collective decision
      }

    }

});
