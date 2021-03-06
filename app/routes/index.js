import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    delete(question) {
      if(confirm("Are you sure you want to delete?")) {
        var answer_deletions = question.get('answers').map(function(answer) {
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletions)
          .then(function() {
            return question.destroyRecord();
          })
        this.transitionTo('index');
      } else {
        this.transitionTo('index');
      }
    },
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
         question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    }
  }
});
