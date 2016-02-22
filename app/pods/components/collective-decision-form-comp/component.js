import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    buttonClicked(param) {
      console.log("-----------button clicked inside cd-form----------------");
      this.sendAction('action', param);
    }

  }


});
