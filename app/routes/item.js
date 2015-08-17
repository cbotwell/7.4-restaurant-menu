import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var menu = this.modelFor('index');

    return menu.find(function(item) {
      return item._id === params.id;
    });
  },

  actions: {
    addToOrder: function() {
      // add to order
    }
  },
});
