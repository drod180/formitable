var AppDispatcher = require('../dispatcher/dispatcher.js');
var CurrentUserConstants = require('../constants/current_user_constants.js');

CurrentUserActions = {
  currentUserReceived: function(currentUser) {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  },

  logout: function() {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.LOGOUT
    });
  }
};

module.exports = CurrentUserActions;
