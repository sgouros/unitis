import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({

  actions: {

    createCollectiveDecision(param) {
      console.log('-----------createCollectiveDecision called');
      this.sendAction('action', param); // πιάνεται μέσα στο new/route.js ως saveCollectiveDecision καθώς έτσι περάστηκε κατα τη δημιουργία του component
    },

    addProject(cd){

      console.log('-----------addProject called');
      this.sendAction('addProject', cd);

      }

    }



});
