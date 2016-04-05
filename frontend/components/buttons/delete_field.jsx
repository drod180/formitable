var React = require('react');
var FieldUtil = require('../../utils/fields_utils');
var FieldActions = require('../../actions/field_actions');

var DeleteFieldButton = React.createClass({
	deleteField: function (e) {
		e.preventDefault();
		
		if (this.props.field.id) {
			FieldUtil.destoryField(this.props.field.id);
		} else {
			FieldActions.removeFieldForForm(this.props.field);
		}
	},

  render: function () {
    return (
      <button onClick={this.deleteField}>DELETE FIELD</button>
    );
  }
});

module.exports = DeleteFieldButton;
