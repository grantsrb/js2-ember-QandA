import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  tags: DS.attr(),
  date: DS.attr(),
  details: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
