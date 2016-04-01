var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FieldConstants = require('../constants/field_constants');
var _fields = [];

function _add(field) {
  _fields.push(field);
}

function _resetForms(fields) {
  _fields = fields;
}

//Holds all of the forms without field information for a particular user
var FieldStore = new Store(AppDispatcher);

FieldStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
      case FieldConstants.FIELDS_RECEIVED:
        _resetForms(payload.fields);
        FieldStore.__emitChange();
        break;
      case FieldConstants.FIELD_RECEIVED:
        _addForm(payload.field);
        FieldStore.__emitChange();
        break;
      default:
      //no op
    }
};

FieldStore.all = function () {
  return _fields.slice(0);
};


module.exports = FieldStore;
