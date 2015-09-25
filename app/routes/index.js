import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    delete(question) {
      if(confirm("Are you sure you want to delete?")) {
        question.destroyRecord();
        this.transitionTo('index');
      } else {
        this.transitionTo('index');
      }
    },
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
