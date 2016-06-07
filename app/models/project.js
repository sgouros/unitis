// models/project.js

import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  title: DS.attr('string'),

  collectiveDecision: DS.belongsTo('collective-decision', {async: true} ),

  getCD: function(){
    return get('collectiveDecision');
  }


});
