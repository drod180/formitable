var React = require('react');
var FieldTypeConstants = require('../../constants/field_type_constants');
var FieldsUtils = require('../../utils/fields_utils');
var FieldStore = require('../../stores/fields_store');
var FieldIndex = require ('./field_index_item');

var FieldAdder = React.createClass({

	handleNewField: function (key) {
		var params = {
			fields: {
				type: FieldTypeConstants[key].type,
				label: FieldTypeConstants[key].label,
				form_rank_id: (FieldStore.all.length + 1),
				form_id: 1
			}
		};
		FieldsUtils.addFieldToForm(params);
	},

  render: function () {
		var fields = FieldTypeConstants;
		var selectors = Object.keys(fields).map(function (fieldKey, i) {
			return (
				<li key={i}>
					<button
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
