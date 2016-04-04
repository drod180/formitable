var AppDispatcher = require('../dispatcher/dispatcher.js');
var FormConstants = require('../constants/form_constants.js');

FormActions = {
  receiveFormsForUser: function (forms) {
    AppDispatcher.dispatch({
      actionType: FormConstants.FORMS_RECEIVED,
      forms: forms
    });
  },

  receiveFormForUser: function (form) {
    AppDispatcher.dispatch({
      actionType: FormConstants.FORM_RECEIVED,
      form: form
    });
  },

	removeFormForUser: function (form) {
		AppDispatcher.dispatch({
			actionType: FormConstants.FORM_REMOVED,
			form: form
		});
	}
};

module.exports = FormActions;
