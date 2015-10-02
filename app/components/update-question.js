import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  updateQuestionShowing: false,

  actions: {
    cancel() {
      this.set('updateQuestionShowing', false);
    },
    updateFormShow() {
      this.set('updateQuestionShowing', true);
    },
    updateQuestion(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      }
      this.sendAction('updateQuestion', question, params);
      this.set('updateQuestionShowing', false);
    }
  }

});
