var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FormConstants = require('../constants/form_constants');
var _forms = [];

function _add(form) {
  _forms.push(form);
}

function _resetForms(forms) {
  _forms = forms;
}

//Holds all of the forms without field information for a particular user
var FormStore = new Store(AppDispatcher);

FormStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
      case FormConstants.FORMS_RECEIVED:
        _resetForms(payload.forms);
        FormStore.__emitChange();
        break;
      case FormConstants.FORM_RECEIVED:
        _addForm(payload.form);
        FormStore.__emitChange();
        break;
      default:
      //no op
    }
};

FormStore.all = function () {
  return _forms.slice(0);
};


module.exports = FormStore;
