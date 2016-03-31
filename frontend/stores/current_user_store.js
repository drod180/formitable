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
       CurrentUserStore.__emitChange();
       break;
     case CurrentUserConstants.LOGOUT:
       _currentUser = null;
       CurrentUserStore.__emitChange();
       break;
   }
};

CurrentUserStore.currentUser = function () {
  return _currentUser;
};

CurrentUserStore.isLoggedIn = function () {
  return !!_currentUser;
};

CurrentUserStore.currentUserHasBeenFetched = function () {
  return _currentUserHasBeenFetched;
};


module.exports = CurrentUserStore;
