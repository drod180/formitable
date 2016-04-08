var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ChoiceConstants = require('../constants/choice_constants');
var FormConstants = require('../constants/form_constants');
var FieldConstants = require('../constants/field_constants');

var _choices = [];
var _choiceIdsToDelete = [];

function _addChoices(choices) {
  _choices = _choices.concat(choices);
}

function _resetDeleteChoices() {
  _choiceIdsToDelete = [];
}

function _resetChoices() {
	_choices = [];
}

function _addChoice(choice) {
	_choices.push(choice);
}

function _updateChoice(choice) {
	var fieldRank = choice.field_rank_id;
	var formRank = choice.field_form_rank_id;

	_choices[_findIndexByFormRankId(fieldRank, formRank)] = choice;
}

function _removeChoices(field) {
	var choices = _findChoicesForField(field.form_rank_id);
	choices.forEach(function (choice) {
		_removeChoice(choice);
	});
	_choices.forEach(function (choice) {
		if (choice.field_form_rank_id > field.form_rank_id) {
			choice.field_form_rank_id --;
		}
	});
}

function _findIndexByFormRankId(fieldRank, formRank) {
  for (var i = 0; i < _choices.length; i++){
    if (_choices[i].form_rank_id === fieldRank &&
				_choices[i].field_form_rank_id === formRank) {
			return i;
		}
  }
}

function _findChoicesForField(field_form_rank_id) {
	return _choices.filter(function (choice) {
		return choice.field_form_rank_id === field_form_rank_id;
	});
}

//Remove choice from store and update the form_rank_id
//Use form_rank_id to handle both fields in
function _removeChoice(choice) {
	var removed = false;
	for (var i = 0; i < _choices.length; i++){
		var matchField = (_choices[i].field_form_rank_id === choice.field_form_rank_id);
		var matchChoice = (_choices[i].field_rank_id === choice.field_rank_id);

		if (removed && matchField) {
			_choices[i].field_rank_id--;
		}
		if (!removed && matchChoice && matchField) {
			removed = true;
      if (_choices[i].id) {
        _choiceIdsToDelete.push(_choices[i].id);
      }
			_choices.splice(i, 1);
			 i--;
		}
	}
}

var ChoiceStore = new Store(AppDispatcher);

ChoiceStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
      case ChoiceConstants.CHOICES_RECEIVED:
        _addChoices(payload.choices);
        ChoiceStore.__emitChange();
        break;
			case ChoiceConstants.CHOICE_RECEIVED:
				_addChoice(payload.choice);
				ChoiceStore.__emitChange();
				break;
			case ChoiceConstants.CHOICE_UPDATED:
				_updateChoice(payload.choice);
				ChoiceStore.__emitChange();
				break;
			case ChoiceConstants.CHOICE_REMOVED:
				_removeChoice(payload.choice);
				ChoiceStore.__emitChange();
				break;
			case FormConstants.FORM_RECEIVED:
				_resetChoices();
				_resetDeleteChoices();
				ChoiceStore.__emitChange();
				break;
			case FieldConstants.FIELD_REMOVED:
				_removeChoices(payload.field);
				ChoiceStore.__emitChange();
				break;
      default:
      //no op
    }
};

ChoiceStore.allForField = function (field_form_rank_id) {
	return _findChoicesForField(field_form_rank_id);
};

ChoiceStore.allRemoved = function () {
  return _choiceIdsToDelete.slice(0);
};

ChoiceStore.all = function () {
	return _choices.slice(0);
};
module.exports = ChoiceStore;
