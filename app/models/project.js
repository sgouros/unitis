// models/project.js

import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  title: DS.attr('string'),

  collectiveDecision: DS.belongsTo('collective-decision', {async: true} ),


  trace(){
    let msg="\n";
    msg+="  id: "     + this.get("id");
    msg+="\n";
    msg+="  code: "   + this.get("code");
    msg+="\n";
    msg+="  title: "  + this.get("title");
    return msg;
  }

});
