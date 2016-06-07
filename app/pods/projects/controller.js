import Ember from 'ember';

export default Ember.Controller.extend({

  resetResponseMessage(){
    this.set('responseMessage','');
  },

  setResponseMessage(message){
    this.set('responseMessage',message);
  }


});
