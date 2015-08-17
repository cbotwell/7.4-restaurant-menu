import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'collections',
  host: 'http://tiny-lr.herokuapp.com',

  pathForType: function(modelName) {
    return `co-${modelName}`;
  },
});
