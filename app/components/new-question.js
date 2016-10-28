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
        author: this.get('author') ? this.get('author'):"Anonymous",
        content: this.get('content') ? this.get('content'):"What is life?",
        tags: this.get('tags') ? this.get('tags') : "none",
        date: now.toDateString(),
        details: this.get('details') ? this.get('details') : ""
      };
      this.set('showForm', false);
      this.sendAction("saveQuestion", params);
    }

  }
});
