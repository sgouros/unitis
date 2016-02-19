import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.findAll('collectiveDecision');
  },

  actions: {

    deleteCollectiveDecision(collectiveDecision) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        collectiveDecision.destroyRecord();
      }
      // TODO να μπορεί να βγάζει μήνυμα επιτυχίας οτι διαγράφηκε η library (θέλω να εξαφανίζει τυχόν υπάρχον response message  και να βγάζει κάποιο popup στυλ postit που να λέει διαγραφηκε επιτυχώς)
    }

  }

});
