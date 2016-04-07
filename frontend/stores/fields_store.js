var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FieldConstants = require('../constants/field_constants');

var _fields = [];
var _fieldIdsToDelete = [];

function _addField(field) {
  _fields.push(field);
}

function _resetFields(fields) {
  _fields = fields;
}

function _resetDeleteFields() {
  _fieldIdsToDelete = [];
}

function _updateField(field) {
  var fieldIndex = _findIndexByFormRankId(field.form_rank_id);
  _fields[fieldIndex] = field;
}

function _findIndexByFormRankId(id) {
  for (var i = 0; i < _fields.length; i++){
    if (_fields[i].form_rank_id === id) { return i; }
  }
}

//Remove field from store and update the form_rank_id
//Use form_rank_id to handle both fields in
function _removeField(field) {
	var removed = false;
	for (var i = 0; i < _fields.length; i++){
		if (removed) { _fields[i].form_rank_id--; }
		if (!removed && _fields[i].form_rank_id === field.form_rank_id) {
			removed = true;
      if (_fields[i].id) {
        _fieldIdsToDelete.push(_fields[i].id);
      }
			_fields.splice(i, 1);
			 i--;
		}
	}
}


var FieldStore = new Store(AppDispatcher);

FieldStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
      case FieldConstants.FIELDS_RECEIVED:
        _resetFields(payload.fields);
        _resetDeleteFields();
        FieldStore.__emitChange();
        break;
      case FieldConstants.FIELD_RECEIVED:
        _addField(payload.field);
        FieldStore.__emitChange();
        break;
      case FieldConstants.FIELD_UPDATED:
        _updateField(payload.field);
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

FieldStore.allRemoved = function () {
  return _fieldIdsToDelete.slice(0);
};

FieldStore.findByRank = function (id) {
  var index = _findIndexByFormRankId(id);
  return _fields.slice(0)[index];
};

module.exports = FieldStore;
