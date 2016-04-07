var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ChoiceConstants = require('../constants/choice_constants');

var _choices = [];
var _choiceIdsToDelete = [];

function _resetChoices(choices) {
  _choices = choices;
}

function _resetDeleteChoices() {
  _choiceIdsToDelete = [];
}

function _addChoice(choice) {
	_choices.push(choice);
}

var ChoiceStore = new Store(AppDispatcher);

ChoiceStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
      case ChoiceConstants.CHOICES_RECEIVED:
        _resetChoices(payload.choices);
        _resetDeleteChoices();
        ChoiceStore.__emitChange();
        break;
			case ChoiceConstants.CHOICE_RECEIVED:
				_addChoice(payload.choice);
				ChoiceStore.__emitChange();
				break;
      default:
      //no op
    }
};

ChoiceStore.allForField = function (field_form_rank_id) {
	return _choices.filter(function (choice) {
		return choice.field_form_rank_id === field_form_rank_id;
	});
};

ChoiceStore.allRemoved = function () {
  return _choiceIdsToDelete.slice(0);
};

module.exports = ChoiceStore;
