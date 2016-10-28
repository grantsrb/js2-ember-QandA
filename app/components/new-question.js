import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    displayForm(state) {
      if(state) {
        this.set('showForm', false);
      } else {
        this.set('showForm', true);
      }
    },
    saveQuestion() {
      var now = new Date();
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        tags: this.get('tags'),
        date: now.toDateString(),
        answers: ""
      };
      this.set('showForm', false);
      this.sendAction("saveQuestion", params);
    }

  }
});
