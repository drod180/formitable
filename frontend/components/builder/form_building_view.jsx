var React = require('react');
var FieldIndex = require('./field_index');
var FieldsUtil = require('../../utils/fields_utils');
var FormUtil = require('../../utils/form_utils');
var ChoiceUtil = require('../../utils/choice_utils');
var FormStore = require('../../stores/forms_store');
var FieldStore = require('../../stores/fields_store');
var ChoiceStore = require('../../stores/choices_store');

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
		this.formStoreToken = FormStore.addListener(this._onChange);
    if (this.props.formId) {
		  FormUtil.fetchFormForUser(this.props.formId);
    }
	},

	componentWillUnmount: function () {
		this.formStoreToken.remove();
	},

	saveForm: function (e) {
		e.preventDefault();

		var router = this.context.router;
		var fields = FieldStore.all();
		var form = FormStore.first();
    var deleteFields = FieldStore.allRemoved();
		var deleteChoices = ChoiceStore.allRemoved();

    function clearFields() {
      deleteFields.forEach(function (id) {
        FieldsUtil.destroyField(id);
      });
			deleteChoices.forEach(function (id) {
        FieldsUtil.destroyField(id);
      });
			router.push('/');
    }

		if (form === undefined) {
			form = {};
			form.name = "Untitled Form";
			form.description = "This is my form. Please fill it out. It's awesome!";
		}

		fields.forEach(function (field) {
			field.choices = ChoiceStore.allForField(field.form_rank_id);
		});

		(form.id === undefined)
      ? FormUtil.saveFormForUser(form, fields, clearFields)
      : FormUtil.updateFormForUser(form, fields, clearFields);


	},

  render: function () {
    return (
      <div>
  			<section className="form-view-section">
  				<header className="form-view-header">
  					<h2>{this.state.name}</h2>
  					<p>{this.state.description}</p>
  				</header>
  				<FieldIndex
            selectedField={this.props.selectedField}
            callback={this.props.callback}
            formId={this.props.formId}
            />
        </section>
        <footer className="form-view-footer">
          <button
            className="form-save-button"
            onClick={this.saveForm}
            >Save Form
          </button>
        </footer>
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
