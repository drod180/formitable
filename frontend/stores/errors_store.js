var Store = require('flux/utils').Store;
var ErrorConstants = require('../constants/error_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var _errors = [];

function _resetErrors(errors) {
  _errors = errors;
}

//Holds all of the forms without field information for a particular user
var ErrorStore = new Store(AppDispatcher);

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
     case ErrorConstants.ERROR_RECEIVED:
       _resetErrors(payload.errors);
       ErrorStore.__emitChange();
       break;
   }
};

ErrorStore.all = function () {
  return _errors.slice();
};

module.exports = ErrorStore;
