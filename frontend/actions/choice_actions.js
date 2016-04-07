var AppDispatcher = require('../dispatcher/dispatcher.js');
var ChoiceConstants = require('../constants/choice_constants.js');

ChoiceActions = {
  receiveChoicesForField: function (choices) {
    AppDispatcher.dispatch({
      actionType: ChoiceConstants.CHOICES_RECEIVED,
      choices: choices
    });
  },

	receiveChoiceForField: function (choice) {
		AppDispatcher.dispatch({
			actionType: ChoiceConstants.CHOICE_RECEIVED,
			choice: choice
		});
	}
};

module.exports = ChoiceActions;
