// models/collective-decision.js
import Ember from 'ember';
import DS from 'ember-data';
// import * as log from 'unitis/utils/ULogger';

export default DS.Model.extend({
  code       : DS.attr('string'),
  description: DS.attr('string'),
  projects   : DS.hasMany('project', {async:true}),

  init(){
    // create an empty project array if nothing exists
    if (!this.projects){
      this.projects= [];
    }
  },


  // override save() in order to automatically save projects along with the collective decision
  save(){
    return this._super()   // firstly persist the collective decision
      .then( savedCD => savedCD._saveProjects() ); // then persist the child projects
  },


  // add an empty child project
  addProject(){
    return this.get('projects').pushObject(this.store.createRecord('project'));
  },

  trace(){
    let msg="\n";
    msg+="  id: "   +this.get("id");
    msg+="\n";
    msg+="  code: " +this.get("code");
    msg+="\n";
    msg+="  description: "  +this.get("description");
    msg+="\n\n";

    let projects = this.get('projects');
    
    if (projects.get('length') > 0){
      msg+="  projects: ";
      this.get('projects').forEach( function(project){
        msg+= "\n" + project.trace();
      });
    } else {
      msg+="  no projects";
    }
    return msg;
  },

  // PRIVATE:
  _saveProjects(){
    let promiseArray = []; // we will use this to save all the promises for project-save

    // fill the promise array with project save promises
    this.get('projects').forEach( (eachProject) => {
       promiseArray.push( eachProject.save() );
     });

    // now execute all the promises inside promiseArray
    return Ember.RSVP.all(promiseArray);
  }

});
