import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  addQuestion: false,

  actions: {
    cancel() {
      this.set('addQuestion', false);
    },
    questionFormShow() {
      this.set('addQuestion', true);
    },
    saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      }
      this.sendAction('saveQuestion', params),
      this.set('addQuestion', false);
    }
  }
});
