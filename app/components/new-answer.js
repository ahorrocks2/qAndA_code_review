import Ember from 'ember';

export default Ember.Component.extend({
  addAnswer: false,

  actions: {
    answerFormShow() {
      this.set('addAnswer', true);
    },
    submitAnswer() {
      var params = {
        name: this.get('name'),
        text: this.get('text'),
        question: this.get('question'),
        date_added: Date.now()
      }
      this.sendAction('submitAnswer', params),
      this.set('addAnswer', false);
    }
  }
});
