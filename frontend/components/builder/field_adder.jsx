var React = require('react');
var FieldTypeConstants = require('../../constants/field_type_constants');

var FieldAdder = React.createClass({
	handleNewField: function () {
			//Creates a new field to be added to the form
	},

  render: function () {
		var fields = FieldTypeConstants;
		var selectors = Object.keys(fields).map(function (fieldKey, i) {
			return (
				<li key={i}>
					<button
						onClick={this.handleNewField}
						name={fields[fieldKey].type}>
						{fields[fieldKey].name}
					</button>
				</li>
			);
		});
    return (
      <form className="field-adder">
				{selectors}
      </form>
    );
  }
});

module.exports = FieldAdder;
