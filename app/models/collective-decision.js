// models/collective-decision.js

import DS from 'ember-data';
import * as log from 'unitis/utils/ULogger';

export default DS.Model.extend({
  code       : DS.attr('string'),
  description: DS.attr('string'),

  projects   : DS.hasMany('project', {async:true}),


  saveAllProjects(){
    log.info(this, "saving collective decision with code:" + this.get('code')  );
    let promiseArray = []; // we will use this to save all the promises for project-save

    this.get('projects').forEach((eachProject) => {
      let savePromise = eachProject.save();
       promiseArray.push(savePromise);
     });

     // now we have to execute all the promises inside promiseArray
    return Ember.RSVP.all(promiseArray);

  }


});
