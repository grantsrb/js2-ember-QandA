import Ember from 'ember';

export default Ember.Component.extend({
  showUpdate: false,
  actions: {
    displayUpdate(state) {
      if (state) {
        this.set('showUpdate', false);
      }else {
        this.set('showUpdate', true);
      }
    },
    deleteQuestion(question) {
      this.sendAction('destroyQuestion', question);
    },
    updateQuestion(question, params) {
      this.set('showUpdate', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
