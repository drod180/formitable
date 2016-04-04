var React = require('react');
var FieldIndex = require('./field_index');
var FieldsUtil = require('../../utils/fields_utils');
var FormUtil = require('../../utils/form_utils');
var FormStore = require('../../stores/forms_store');
var FieldStore = require('../../stores/fields_store');

var FieldBuilderView = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	saveForm: function () {
		var router = this.context.router;
		var fields = FieldStore.all();
		var form = FormStore.first();

		if (form === undefined) {
			form = {};
			form.name = "Untitled Form";
			form.description = "This is my form. Please fill it out. It's awesome!";
		}

		FormUtil.saveFormForUser(form, fields);

		router.push('/');
	},

  render: function () {
    return (
			<div>
				<FieldIndex />
				<button onClick={this.saveForm}>Save Form</button>
      </div>
    );
  }
});

module.exports = FieldBuilderView;
