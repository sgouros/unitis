// models/collective-decision.js

import DS from 'ember-data';

export default DS.Model.extend({
  code       : DS.attr('string'),
  description: DS.attr('string'),

  projects   : DS.hasMany('project', {async:true})

});
