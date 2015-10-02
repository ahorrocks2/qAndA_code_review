import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    search() {
      var param = this.get('searchTerm');
      this.sendAction('search', param);
    }
  }
});
