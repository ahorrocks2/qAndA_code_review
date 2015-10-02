import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search(param) {
      this.transitionTo('searchPage', param);
    }
  }
});
