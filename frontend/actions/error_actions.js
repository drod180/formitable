var AppDispatcher = require('../dispatcher/dispatcher.js');
var ErrorConstants = require('../constants/error_constants.js');

ErrorActions = {
  errorsReceived: function(errors) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERROR_RECEIVED,
      errors: errors
    });
  },
};

module.exports = ErrorActions;
