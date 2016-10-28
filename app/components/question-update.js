import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        tags: this.get('tags'),
        details: this.get('details')
      };
      this.sendAction('updateQuestion', question, params);
    }
  }
});
