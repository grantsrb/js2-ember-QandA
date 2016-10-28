import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    displayForm (state) {
      if(state) {
        this.set('showForm', false);
      } else {
        this.set('showForm', true);
      }
    },
    newAnswer(question) {
      var date = new Date();
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        date: date.toDateString(),
        question: question
      };
      this.set('showForm', false);
      this.sendAction('makeAnswer', params);
    }
  }
});
