var Store = require('flux/util').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _forms = [];

//Holds all of the forms without field information for a particular user
var FormStore = new Store(AppDispatcher);

FormStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
      case FormConstants.FORMS_RECEIVED:
        resetForms(payload.forms);
        FormStore.__emitChange();
        break;
    }
};

FormStore.resetForms = function (forms) {
  _forms = forms;
};

FormStore.all = function () {
  return _forms.slice(0);
};

module.exports = FormStore;
