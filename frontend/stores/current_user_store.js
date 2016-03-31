var Store = require('flux/utils').Store;
var CurrentUserConstants = require('../constants/current_user_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var _currentUser;

var _currentUserHasBeenFetched = false;

//Holds all of the forms without field information for a particular user
var CurrentUserStore = new Store(AppDispatcher);

CurrentUserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
     case CurrentUserConstants.CURRENT_USER_RECEIVED:
       _currentUser = payload.currentUser;
       _currentUserHasBeenFetched = true;
       SessionStore.__emitChange();
       break;
     case CurrentUserConstants.LOGOUT:
       _currentUser = null;
       SessionStore.__emitChange();
       break;
   }
};

CurrentUserStore.currentUser = function () {
  return _currentUser;
};

CurrentUserStore.loggedIn = function () {
  return !!_currentUser;
};

CurrentUserStore.currentUserHasBeenFetched = function () {
  return _currentUserHasBeenFetched;
};


module.exports = CurrentUserStore;
