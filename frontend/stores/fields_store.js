var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FieldConstants = require('../constants/field_constants');

var _fields = [];

function _addField(field) {
  _fields.push(field);
}

function _resetFields(fields) {
  _fields = fields;
}

//Remove field from store and update the form_rank_id
function _removeField(field) {
	var removed = false;
	debugger
	for (var i = 0; i < _fields.length; i++){
		if (removed) { _fields[i].form_rank_id--; }
		if (!removed && _fields[i].id === field.id) {
			removed = true;
			_fields.splice(i, 1);
			i--;
		}
	}

	debugger
}

//Holds all of the forms without field information for a particular user
var FieldStore = new Store(AppDispatcher);

FieldStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
      case FieldConstants.FIELDS_RECEIVED:
        _resetFields(payload.fields);
        FieldStore.__emitChange();
        break;
      case FieldConstants.FIELD_RECEIVED:
        _addField(payload.field);
        FieldStore.__emitChange();
        break;
			case FieldConstants.FIELD_REMOVED:
				_removeField(payload.field);
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
