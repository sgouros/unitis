import Ember from 'ember';
import DS from 'ember-data';
import L from 'unitis/utils/unitisLogger';

export default Ember.Component.extend({

  actions: {

    createCollectiveDecision(param) {
      console.log('-----------createCollectiveDecision called');
      this.sendAction('action', param); // πιάνεται μέσα στο new/route.js ως saveCollectiveDecision καθώς έτσι περάστηκε κατα τη δημιουργία του component
    },
  //TODO να κάνω import τον logger μέσω mixin
    addProject(cd){

     //Ember.Logger.i(this,'this is a message');
      console.log(L);
      //L.l(this,'logggg');
      this.sendAction('addProject', cd);

      // TODO 07.03.2016 αυτό πιάνει στο new collective decision αλλά όχι στο edit collective decision

      }

    }




});
