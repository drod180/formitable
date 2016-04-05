var React = require('react');
var FieldTypeConstants = require('../../constants/field_type_constants');
var FieldsUtils = require('../../utils/fields_utils');
var FieldStore = require('../../stores/fields_store');
var FieldActions = require ('../../actions/field_actions');

var FieldAdder = React.createClass({

	handleNewField: function (key, e) {
		e.preventDefault();
		var form_rank_id;

		var params = {
			category: FieldTypeConstants[key].type,
			label: FieldTypeConstants[key].label,
			form_rank_id: (FieldStore.all().length + 1),
		};
		FieldActions.receiveFieldForForm(params);
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
  }
});

module.exports = FieldAdder;
