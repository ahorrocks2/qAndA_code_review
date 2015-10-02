import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return this.store.findAll('question').then(function(questions) {
      return questions.filterBy('content', param.searchPage_id)
    })
  }

});
