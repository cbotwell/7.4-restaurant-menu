import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.ajax('http://tiny-lr.herokuapp.com/collections/menu');
  }
});
