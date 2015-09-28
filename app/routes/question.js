import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash ({
      question: this.store.findRecord('question', params.question_id),
      answers: this.store.findAll('answer', params.question_id)
    });
  },

  actions: {
    submitAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      params.question.save();
      this.transitionTo('/question/:question_id');
    },
    deleteAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('/index');
    }
  }
});
