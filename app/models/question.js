import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  tag: DS.attr(),
  date: DS.attr(),
  // answers: DS.hasMany("answer")
});
