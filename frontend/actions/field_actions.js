var AppDispatcher = require('../dispatcher/dispatcher.js');
var FieldConstants = require('../constants/field_constants.js');

FieldActions = {
  receiveFieldsForForm: function (fields) {
    AppDispatcher.dispatch({
      actionType: FieldConstants.FIELDS_RECEIVED,
      fields: fields
    });
  },

  receiveFieldForForm: function (field) {
    AppDispatcher.dispatch({
      actionType: FieldConstants.FIELD_RECEIVED,
      field: field
    });
  },

  updateFieldForForm: function (field) {
    AppDispatcher.dispatch({
      actionType: FieldConstants.FIELD_UPDATED,
      field: field
    });
  },

	removeFieldForForm: function (field) {
		AppDispatcher.dispatch({
			actionType: FieldConstants.FIELD_REMOVED,
			field: field
		});
	}
};

module.exports = FieldActions;
