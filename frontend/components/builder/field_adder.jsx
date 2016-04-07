var React = require('react');
var FieldTypeConstants = require('../../constants/field_type_constants');
var FieldsUtils = require('../../utils/fields_utils');
var FieldStore = require('../../stores/fields_store');
var FieldActions = require ('../../actions/field_actions');
var ChoiceActions = require('../../actions/choice_actions');

var FieldAdder = React.createClass({

	handleNewField: function (key, e) {
		e.preventDefault();

		var params = {
			category: FieldTypeConstants[key].type,
			label: FieldTypeConstants[key].label,
      option: FieldTypeConstants[key].option,
			form_rank_id: (FieldStore.all().length + 1),
		};
		if (params.category === "select" ||
				params.category === "radio" ||
		  	params.category === "checkbox") {
			FieldActions.receiveFieldForForm(params);
			this._addDefaultChoices(params.form_rank_id);
		} else {
			FieldActions.receiveFieldForForm(params);
		}

	},

  render: function () {
		var fields = FieldTypeConstants;
		var selectors = Object.keys(fields).map(function (fieldKey, i) {
			return (
				<li key={i}>
					<button
						className="field-adder-button"
						onClick={this.handleNewField.bind(this, fieldKey)}
						>{fields[fieldKey].name}
					</button>
				</li>
			);
		}.bind(this));

    return (
      <form className="field-adder">
				{selectors}
      </form>
    );
  },

	_addDefaultChoices: function (formRank) {
		var first_params = {
			label: "First Choice",
      selected: true,
			field_rank_id: 1,
			field_form_rank_id: formRank
		};

		var second_params = {
			label: "Second Choice",
			field_rank_id: 2,
			field_form_rank_id: formRank
		};

		var third_params = {
			label: "Third Choice",
			field_rank_id: 3,
			field_form_rank_id: formRank
		};

		ChoiceActions.receiveChoiceForField(first_params);
		ChoiceActions.receiveChoiceForField(second_params);
		ChoiceActions.receiveChoiceForField(third_params);
	}
});

module.exports = FieldAdder;
