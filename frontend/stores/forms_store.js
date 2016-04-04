var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FormConstants = require('../constants/form_constants');
var _forms = [];

function _addForm(form) {
	_forms = [];
  _forms.push(form);
}

function _resetForms(forms) {
  _forms = forms;
}

function _removeForm(form) {
	for (var i = 0; i < _forms.length; i++){
		if (_forms[i].id === form.id) {
			_forms.splice(i, 1);
			return true;
		}
	}
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
			case FormConstants.FORM_REMOVED:
				_removeForm(payload.form);
				FormStore.__emitChange();
				break;
      default:
      //no op
    }
};

FormStore.all = function () {
  return _forms.slice(0);
};

FormStore.first = function () {
	return _forms.slice(0)[0];
};


module.exports = FormStore;
