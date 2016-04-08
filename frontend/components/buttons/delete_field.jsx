var React = require('react');
var FieldUtil = require('../../utils/fields_utils');
var FieldActions = require('../../actions/field_actions');

var DeleteFieldButton = React.createClass({
	deleteField: function (e) {
		e.preventDefault();
		e.stopPropagation();
		FieldActions.removeFieldForForm(this.props.field);
	},

  render: function () {
    return (
      <button
        className="field-delete"
        onClick={this.deleteField}
        >--
      </button>
    );
  }
});

module.exports = DeleteFieldButton;
