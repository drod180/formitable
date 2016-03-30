var AppDispatcher = require('../dispatcher/dispatcher.js');
var FormConstants = require('../constants/form_constants.js');

FormActions = {
  receiveFormsForUser: function (forms) {
    AppDispatcher.dispatch({
      actionType: FormConstants.FORMS_RECEIVED,
      forms: forms
    });
  }
};

module.exports = FormActions;
