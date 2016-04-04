var React = require('react');
var FieldUtil = require('../../utils/fields_utils');

var DeleteFieldButton = React.createClass({
	deleteField: function (e) {
		FieldUtil.destoryField(this.props.fieldId);
	},

  render: function () {
    return (
      <button onClick={this.deleteField}>DELETE FIELD</button>
    );
  }
});

module.exports = DeleteFieldButton;
