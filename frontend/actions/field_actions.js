var AppDispatcher = require('../dispatcher/dispatcher.js');
var FieldConstants = require('../constants/field_constants.js');

FieldActions = {
  receiveFormsForUser: function (fields) {
    AppDispatcher.dispatch({
      actionType: FieldConstants.FIELDS_RECEIVED,
      fields: fields
    });
  },

  receiveFormForUser: function (field) {
    AppDispatcher.dispatch({
      actionType: FieldConstants.FIELD_RECEIVED,
      field: field
    });
  }
};

module.exports = FieldActions;
