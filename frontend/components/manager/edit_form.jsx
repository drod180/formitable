var React = require('react');
var FormStore = require('../../stores/forms_store');
var FormUtil = require('../../utils/form_utils');
var EditForm = React.createClass({
	editForm: function () {

	},

  render: function () {
    return (
      <button onClick={this.editForm}>Edit</button>
    );
  }
});

module.exports = EditForm;
