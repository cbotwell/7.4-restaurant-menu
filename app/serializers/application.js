import DS from 'ember-data';
import extend from 'lodash/object/extend';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',

  extractArray: function(store, type, payload) {
    var data = {};
    data[`${type.modelName}s`] = payload;

    return this._super(store, type, data);
  },

  extractSingle: function(store, type, payload) {
    var data = {};
    data[type.modelName] = payload;

    return this._super(store, type, data);
  },

  serializeIntoHash: function(hash, typeClass, snapshot, options) {
    extend(hash, this.serialize(snapshot, options));
  }
});
