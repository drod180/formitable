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

	getInitialState: function () {
		return {
			name: "Untitled",
			description: "This is my form. Please fill it out. It's awesome!"
		};
	},

	componentDidMount: function () {
		var formStoreToken = FormStore.addListener(this._onChange);
		FormUtil.fetchFormForUser(this.props.formId);
	},

	componentWillUnmount: function () {
		formStoreToken.remove();
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

		(form.id === undefined) ? FormUtil.saveFormForUser(form, fields) : FormUtil.updateFormForUser(form, fields);

		router.push('/');
	},

  render: function () {
    return (
			<div>
				<h2>{this.state.name}</h2>
				<p>{this.state.description}</p>
				<FieldIndex formId={this.props.formId} />
				<button onClick={this.saveForm}>Save Form</button>
      </div>
    );
  },

	_onChange: function () {
		this.setState({
			name: FormStore.first().name,
			description: FormStore.first().description
		});
	}
});

module.exports = FieldBuilderView;
