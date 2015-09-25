import Ember from 'ember';

export default Ember.Component.extend({
  addQuestion: false,

  actions: {
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
